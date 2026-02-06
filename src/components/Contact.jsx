import { useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { HiOutlineMail, HiOutlineArrowRight, HiCheckCircle, HiXCircle } from 'react-icons/hi';
import useScrollReveal from '../hooks/useScrollReveal';
import SectionHeading from './common/SectionHeading';
import Button from './common/Button';
import personal from '../data/personal';
import { contactInfo, socialLinks, emailjsConfig } from '../data/contact';

// ─── Validation helpers ────────────────────────────────────────────────────

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(fields) {
  const errors = {};
  if (!fields.name.trim()) errors.name = 'Name is required';
  if (!fields.email.trim()) errors.email = 'Email is required';
  else if (!EMAIL_REGEX.test(fields.email)) errors.email = 'Enter a valid email address';
  if (!fields.subject.trim()) errors.subject = 'Subject is required';
  if (!fields.message.trim()) errors.message = 'Message is required';
  return errors;
}

// ─── Animation variants ────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// ─── Input component ───────────────────────────────────────────────────────

function FormField({ label, name, type = 'text', value, onChange, onBlur, error, touched, rows }) {
  const id = `contact-${name}`;
  const isTextarea = !!rows;
  const Tag = isTextarea ? 'textarea' : 'input';

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-primary">
        {label} <span className="text-red-500">*</span>
      </label>
      <Tag
        id={id}
        name={name}
        type={isTextarea ? undefined : type}
        rows={rows}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={touched && !!error}
        aria-describedby={touched && error ? `${id}-error` : undefined}
        className={`w-full rounded-sm border bg-input-bg px-4 py-3 text-sm text-primary placeholder:text-secondary/60 outline-none transition-all duration-200
          ${touched && error
            ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100'
            : 'border-border focus:border-primary focus:ring-2 focus:ring-primary/10 hover:border-secondary/30'
          }
          ${isTextarea ? 'resize-y min-h-[120px]' : ''}
        `}
        placeholder={`Enter your ${label.toLowerCase()}`}
      />
      {touched && error && (
        <p id={`${id}-error`} className="text-xs text-red-500 mt-0.5" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Contact page component ────────────────────────────────────────────────

export default function Contact() {
  const formRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { ref: sectionRef, controls, variants } = useScrollReveal({ y: 30 });

  // Form state
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Live-clear error when user fixes it
    if (errors[name]) {
      const updated = validate({ ...fields, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: updated[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const updated = validate(fields);
    setErrors((prev) => ({ ...prev, [name]: updated[name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Mark all fields as touched
    const allTouched = Object.keys(fields).reduce((acc, k) => ({ ...acc, [k]: true }), {});
    setTouched(allTouched);

    const validationErrors = validate(fields);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus('sending');

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: fields.name,
          from_email: fields.email,
          subject: fields.subject,
          message: fields.message,
        },
        emailjsConfig.publicKey
      );

      setStatus('success');
      setStatusMessage('Message sent successfully! I\'ll get back to you soon.');
      setFields({ name: '', email: '', subject: '', message: '' });
      setTouched({});
      setErrors({});

      // Reset status after 6 seconds
      setTimeout(() => setStatus('idle'), 6000);
    } catch {
      setStatus('error');
      setStatusMessage('Something went wrong. Please try again or email me directly.');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-page-bg"
      aria-labelledby="contact-heading"
    >
      <div className="content-container">
        <motion.div
          ref={sectionRef}
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <SectionHeading
            title="Get In Touch"
            subtitle="Have a project in mind or want to collaborate? I'd love to hear from you. Fill out the form or reach out directly."
            align="center"
            className="mb-16"
          />
        </motion.div>

        {/* Two-column layout: Contact Info | Form */}
        <motion.div
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16"
        >
          {/* ── Left column: Contact info ─────────────────────────── */}
          <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col gap-8">
            {/* Contact details card */}
            <div className="bg-card-bg rounded-md p-8 shadow-card">
              <h3 className="font-display font-medium text-lg text-primary mb-6">
                Contact Information
              </h3>
              <ul className="flex flex-col gap-5">
                {contactInfo.map(({ label, value, href, icon: Icon }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-sm bg-primary/5 flex items-center justify-center text-primary">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-secondary mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm text-primary hover:text-primary/70 transition-colors break-all"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-primary">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social links card */}
            <div className="bg-card-bg rounded-md p-8 shadow-card">
              <h3 className="font-display font-medium text-lg text-primary mb-6">
                Follow Me
              </h3>
              <div className="flex gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                    className="w-11 h-11 rounded-sm bg-primary/5 flex items-center justify-center text-primary hover:bg-[#222222] dark:hover:bg-white hover:text-white dark:hover:text-[#222222] transition-colors duration-200"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Direct email button */}
            <Button
              variant="outline"
              href={`mailto:${personal.email}`}
              icon={<HiOutlineMail />}
              className="w-full justify-center text-base py-4"
            >
              Email Me Directly
            </Button>
          </motion.div>

          {/* ── Right column: Contact form ─────────────────────────── */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="bg-card-bg rounded-md p-8 md:p-10 shadow-card"
            >
              <h3 className="font-display font-medium text-lg text-primary mb-8">
                Send a Message
              </h3>

              <div className="flex flex-col gap-5">
                {/* Name & Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    label="Name"
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.name}
                    touched={touched.name}
                  />
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    value={fields.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email}
                    touched={touched.email}
                  />
                </div>

                <FormField
                  label="Subject"
                  name="subject"
                  value={fields.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.subject}
                  touched={touched.subject}
                />

                <FormField
                  label="Message"
                  name="message"
                  value={fields.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.message}
                  touched={touched.message}
                  rows={5}
                />
              </div>

              {/* Status message */}
              {(status === 'success' || status === 'error') && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-6 flex items-center gap-2 rounded-sm px-4 py-3 text-sm ${
                    status === 'success'
                      ? 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20'
                      : 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20'
                  }`}
                  role="alert"
                >
                  {status === 'success' ? (
                    <HiCheckCircle size={18} className="flex-shrink-0" />
                  ) : (
                    <HiXCircle size={18} className="flex-shrink-0" />
                  )}
                  {statusMessage}
                </motion.div>
              )}

              {/* Submit button */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center justify-center gap-2 font-medium rounded-sm px-8 py-4 text-base tracking-wide cursor-pointer transition-all duration-200 ease-in-out
                    bg-[#222222] dark:bg-white text-white dark:text-[#222222] hover:opacity-90 hover:scale-[1.03] active:scale-[0.98]
                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
                    disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100
                    w-full sm:w-auto"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <HiOutlineArrowRight size={18} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
