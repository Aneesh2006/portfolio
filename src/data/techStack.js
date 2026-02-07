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
import { SiN8N, SiMake, SiOdoo } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

const techStack = {
  languages: [
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'C/C++', icon: SiCplusplus, color: '#00599C' },
    {
      name: 'Java',
      icon: FaJava,
      color: '#f89820',
      svgGradient: {
        id: 'grad-java',
        attrs: { x1: '0%', y1: '0%', x2: '0%', y2: '100%' },
        stops: [
          { offset: '0%', color: '#f89820' },
          { offset: '100%', color: '#5382a1' },
        ],
      },
    },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'SQL', icon: SiMysql, color: '#4479A1' },
  ],
  databases: [
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  ],
  frameworks: [
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express.js', icon: SiExpress, color: '#000000', darkColor: '#FFFFFF' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000', darkColor: '#FFFFFF' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Three.js', icon: SiThreedotjs, color: '#000000', darkColor: '#FFFFFF' },
  ],
  tools: [
    { name: 'n8n', icon: SiN8N, color: '#F26E60' },
    {
      name: 'Make',
      icon: SiMake,
      color: '#9761c9',
      svgGradient: {
        id: 'grad-make',
        attrs: { x1: '0%', y1: '0%', x2: '100%', y2: '100%' },
        stops: [
          { offset: '0%', color: '#6D00CC' },
          { offset: '50%', color: '#9B51E0' },
          { offset: '100%', color: '#CE82FF' },
        ],
      },
    },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, color: '#181717', darkColor: '#FFFFFF' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Selenium', icon: SiSelenium, color: '#43B02A' },
    {
      name: 'Figma',
      icon: SiFigma,
      color: '#F24E1E',
      svgGradient: {
        id: 'grad-figma',
        attrs: { x1: '0%', y1: '0%', x2: '0%', y2: '100%' },
        stops: [
          { offset: '0%', color: '#F24E1E' },
          { offset: '25%', color: '#FF7262' },
          { offset: '50%', color: '#A259FF' },
          { offset: '75%', color: '#0ACF83' },
          { offset: '100%', color: '#1ABCFE' },
        ],
      },
    },
    { name: 'LaTeX', icon: SiLatex, color: '#008080' },
    { name: 'Vercel', icon: SiVercel, color: '#000000', darkColor: '#FFFFFF' },
    { name: 'Render', icon: SiRender, color: '#000000', darkColor: '#FFFFFF' },
    { name: 'Railway', icon: SiRailway, color: '#0B0D0E', darkColor: '#FFFFFF' },
    {
      name: 'Google Cloud',
      icon: SiGooglecloud,
      color: '#4285F4',
      svgGradient: {
        id: 'grad-gcloud',
        attrs: { x1: '0%', y1: '0%', x2: '100%', y2: '0%' },
        stops: [
          { offset: '0%', color: '#4285F4' },
          { offset: '33%', color: '#EA4335' },
          { offset: '66%', color: '#FBBC05' },
          { offset: '100%', color: '#34A853' },
        ],
      },
    },
    { name: 'Azure', icon: VscAzure, color: '#0078D4' },
    {
      name: 'Odoo',
      icon: SiOdoo,
      color: '#714B67',
      svgGradient: {
        id: 'grad-odoo',
        attrs: { x1: '0%', y1: '0%', x2: '100%', y2: '0%' },
        stops: [
          { offset: '0%', color: '#714B67' },
          { offset: '45%', color: '#8F8F8F' },
        ],
      },
    },
  ],
};

export default techStack;
