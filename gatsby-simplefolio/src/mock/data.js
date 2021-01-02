import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'LarryCastilloHeadShot2.JPG',
  paragraphOne:
    'As new technologies emerge, developers have to remain sharp and update on a variety of languages and industry standards. With that in mind, developers are slowly realizing that they can no longer specify in a particular side of development, be it front-end or back-end. I like to think of my self as a jack of trades on an endless journey to learn and stay update to date on the latest standards and technnoloies, a true full-stack developer. ',
  paragraphTwo:
    'I have experience with using Java for various means, integrating various APIs into a web application with Javascript, managing databases using MySQL, working in a team environment using Agile methodology in a remote environment, using various distributions of Linux to any end, and I am also fluent in HTML and CSS along with the Bootstrap Framework. At the moment I am looking to add React.js to that list.',
  paragraphThree:
    'If you would like to chat about anything you see here, work on a project todether, or are an employer looking for your next team member, please email me down below and I will get back to you as soon as I can. See ya around the web!',
  // resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'larrycastillo2009@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/larrycastillo/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/larrycastillo2009',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
