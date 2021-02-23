import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Larry | Front End Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello World! My name is',
  name: 'Larry Castillo',
  subtitle: 'I am a Front End Developer!',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'LarryCastilloHeadShot2.JPG',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  // resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Gachostyle.png',
    title: 'Gacho Style Magazine Website',
    info:
      'A digital art portfolio and magazine aesthetically designed by a San Antonio artist named Zerktronic. Using paired programing we utilized the Spring Framework and Bootstrap to create a responsive mobile experience. To handle image storage we created a UI that allows the artist to upload pictures to an Amazon S3 bucket. The api Flipsnack was used to showcase a digital version of a magazine the artist created.\n',
    info2: '',
    url: 'https://github.com/mando-larry/Gacho-Style-Magazine',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'AB.png',
    title: 'Adventure Buddy',
    info:
      'A social media platform that allows users to create events, view stats on various hiking trails, and make profiles to save favorite trails and buddies. This dynamic full-stack application was made possible with Spring Boot using a mobile-first approach aimed at ease of use.',
    info2: '',
    url: 'https://github.com/Adventure-Buddy/adventurebuddy',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'javascriptcalc.png',
    title: 'Javascript Calculator',
    info:
      'An attemp at creating a digital version of one of the best selling Texas Instrument calculators. This application uses Javascript to handle any calculator logic. As a bonus feature when you press the solar panels an animated sun will appear recharging the calculator',
    info2: '',
    url: 'https://github.com/larrycastillo2009/Javascript-Calculator',
    repo: '', // if no repo, the button will not show up
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
