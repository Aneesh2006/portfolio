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
    { name: 'Python', icon: SiPython, color: '#3776AB', darkColor: '#4B8BBE' },
    { name: 'C/C++', icon: SiCplusplus, color: '#00599C', darkColor: '#659AD2' },
    {
      name: 'Java',
      icon: FaJava,
      color: '#f89820',
      darkColor: '#FFA94D',
      svgGradient: {
        id: 'grad-java',
        attrs: { x1: '0%', y1: '0%', x2: '0%', y2: '100%' },
        stops: [
          { offset: '0%', color: '#f89820' },
          { offset: '100%', color: '#5382a1' },
        ],
      },
      darkSvgGradient: {
        id: 'grad-java-dark',
        attrs: { x1: '0%', y1: '0%', x2: '0%', y2: '100%' },
        stops: [
          { offset: '0%', color: '#FFA94D' },
          { offset: '100%', color: '#74A0C4' },
        ],
      },
    },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', darkColor: '#F0DB4F' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', darkColor: '#3178C6' },
    { name: 'LaTeX', icon: SiLatex, color: '#008080', darkColor: '#5EEAD4' },
  ],
  databases: [
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', darkColor: '#4DB33D' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1', darkColor: '#5D9BD5' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', darkColor: '#4A90E2' },
  ],
  frameworks: [
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', darkColor: '#68CC68' },
    { name: 'Express.js', icon: SiExpress, color: '#000000', darkColor: '#AAAAAA' },
    { name: 'React', icon: SiReact, color: '#61DAFB', darkColor: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000', darkColor: '#FFFFFF' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', darkColor: '#38BDF8' },
    { name: 'Three.js', icon: SiThreedotjs, color: '#000000', darkColor: '#FFFFFF' },
  ],
  devopsCloud: [
    { name: 'Docker', icon: SiDocker, color: '#2496ED', darkColor: '#4DB8FF' },
    { name: 'Vercel', icon: SiVercel, color: '#000000', darkColor: '#FFFFFF' },
    { name: 'Render', icon: SiRender, color: '#000000', darkColor: '#B8B8B8' },
    { name: 'Railway', icon: SiRailway, color: '#0B0D0E', darkColor: '#FFFFFF' },
    {
      name: 'Google Cloud',
      icon: SiGooglecloud,
      color: '#4285F4',
      darkColor: '#60A5FA',
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
      darkSvgGradient: {
        id: 'grad-gcloud-dark',
        attrs: { x1: '0%', y1: '0%', x2: '100%', y2: '0%' },
        stops: [
          { offset: '0%', color: '#60A5FA' },
          { offset: '33%', color: '#F87171' },
          { offset: '66%', color: '#FCD34D' },
          { offset: '100%', color: '#4ADE80' },
        ],
      },
    },
    { name: 'Azure', icon: VscAzure, color: '#0078D4', darkColor: '#3B9BFF' },
  ],
  automationDesign: [
    { name: 'n8n', icon: SiN8N, color: '#F26E60', darkColor: '#FF9580' },
    {
      name: 'Make',
      icon: SiMake,
      color: '#9761c9',
      darkColor: '#B794F4',
      svgGradient: {
        id: 'grad-make',
        attrs: { x1: '0%', y1: '0%', x2: '100%', y2: '100%' },
        stops: [
          { offset: '0%', color: '#6D00CC' },
          { offset: '50%', color: '#9B51E0' },
          { offset: '100%', color: '#CE82FF' },
        ],
      },
      darkSvgGradient: {
        id: 'grad-make-dark',
        attrs: { x1: '0%', y1: '0%', x2: '100%', y2: '100%' },
        stops: [
          { offset: '0%', color: '#9333EA' },
          { offset: '50%', color: '#B794F4' },
          { offset: '100%', color: '#DDA0FF' },
        ],
      },
    },
    {
      name: 'Odoo',
      icon: SiOdoo,
      color: '#714B67',
      darkColor: '#A78BA5',
      svgGradient: {
        id: 'grad-odoo',
        attrs: { x1: '0%', y1: '0%', x2: '100%', y2: '0%' },
        stops: [
          { offset: '0%', color: '#714B67' },
          { offset: '45%', color: '#8F8F8F' },
        ],
      },
      darkSvgGradient: {
        id: 'grad-odoo-dark',
        attrs: { x1: '0%', y1: '0%', x2: '100%', y2: '0%' },
        stops: [
          { offset: '0%', color: '#A78BA5' },
          { offset: '45%', color: '#B8B8B8' },
        ],
      },
    },
    {
      name: 'Figma',
      icon: SiFigma,
      color: '#F24E1E',
      darkColor: '#FF6B6B',
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
      darkSvgGradient: {
        id: 'grad-figma-dark',
        attrs: { x1: '0%', y1: '0%', x2: '0%', y2: '100%' },
        stops: [
          { offset: '0%', color: '#FF6B6B' },
          { offset: '25%', color: '#FF9580' },
          { offset: '50%', color: '#B794F4' },
          { offset: '75%', color: '#4ADE80' },
          { offset: '100%', color: '#60D5FF' },
        ],
      },
    },
  ],
  tools: [
    { name: 'Git', icon: SiGit, color: '#F05032', darkColor: '#F05032' },
    { name: 'GitHub', icon: SiGithub, color: '#181717', darkColor: '#FFFFFF' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37', darkColor: '#FF8A65' },
    { name: 'Selenium', icon: SiSelenium, color: '#43B02A', darkColor: '#6FCF5B' },
  ],
};

export default techStack;