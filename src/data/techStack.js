import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiThreedotjs,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiSelenium,
  SiFigma,
  SiLatex,
  SiVercel,
  SiRender,
  SiRailway,
  SiGooglecloud,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { SiN8N, SiMake } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

const techStack = {
  languages: [
    { name: 'Python', icon: SiPython },
    { name: 'C/C++', icon: SiCplusplus },
    { name: 'Java', icon: FaJava },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'SQL', icon: SiMysql },
  ],
  databases: [
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'MySQL', icon: SiMysql },
    { name: 'PostgreSQL', icon: SiPostgresql },
  ],
  frameworks: [
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Three.js', icon: SiThreedotjs },
  ],
  tools: [
    { name: 'n8n', icon: SiN8N },
    { name: 'Make', icon: SiMake },
    { name: 'Git', icon: SiGit },
    { name: 'GitHub', icon: SiGithub },
    { name: 'Postman', icon: SiPostman },
    { name: 'Docker', icon: SiDocker },
    { name: 'Selenium', icon: SiSelenium },
    { name: 'Figma', icon: SiFigma },
    { name: 'LaTeX', icon: SiLatex },
    { name: 'Vercel', icon: SiVercel },
    { name: 'Render', icon: SiRender },
    { name: 'Railway', icon: SiRailway },
    { name: 'Google Cloud', icon: SiGooglecloud },
    { name: 'Azure', icon: VscAzure },
  ],
};

export default techStack;
