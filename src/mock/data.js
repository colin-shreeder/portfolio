import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm ",
  name: 'Colin Reeder',
  subtitle: 'Full-Stack Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'linkedin2.jpg',
  paragraphOne: "After four years of door to door sales and four years of tech sales, I finally decided to make the switch to web development! I recently graduated from Devmountain's Full-Stack Web Development program in January 2021. The stack I specialize in is SERN (Sql, Express, React, Node). Since my graduation, I've been branching out to learn other languages and frameworks such as Java, Python, React Native, and Django. I'm a life long learner and am always working on projects to add to my portfolio.",
  paragraphTwo: "I love snowboarding, jiu-jitsu, lacrosse, and making music. I've played music since I was eight years old and in a lot of ways, writing code reminds me of writing and transposing music. Playing lacrosse in high school & college taught me how important it is to work together as a team in order to achieve a goal. Snowboarding and jiu jitsu have taught me humility and that you can't take yourself too seriously. There are certain things that require near-perfect technique, or they simply won't work. Failure is an essential part of the equation, and more often than not, you need the humility to ask for advice from someone else.",
  paragraphThree: "While other candidates might bring more experience or a tradional CS degree to the table, I've proven myself to be a quick learner. I bring to the table intangibles from the sales world and playing collegiate sports competitively that simply can't be taught in a normal college experience. I have proven experience meeting tight deadlines under pressure. I have a strong business acumen and understand how not meeting a deadline on the development side can affect sales and the rest of the company.",
  resume: 'https://drive.google.com/file/d/1jfB1QZekT0dViZCw_qfK0QvdZDgbHVkB/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pokedex.jpeg',
    title: 'React Native (Mobile): PokeDex App',
    info: 'This is a mobile app, so please access link via your mobile device for app to appear appropriately.',
    info2: 'Leverages an external PokeMon API that allows you to lookup information about all of the PokeMon.',
    url: 'https://wonderful-wright-f2f1a5.netlify.app/',
    repo: 'https://github.com/colin-shreeder/pokedex', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'shreddit.jpg',
    title: 'Full Stack (SERN): Social Forum App - Shreddit!',
    info: 'Shallow copy of the website, Reddit. Uses the SERN stack, Bcrypt, and .env to secure login info.',
    info2: 'To login, enter a username and password, then click sign up. If you have already created an account, use your previous login info. ',
    url: 'http://165.232.146.25:4000/',
    repo: 'https://github.com/colin-shreeder/personalproject', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'holeinwall.jpg',
    title: 'Full Stack Travel App: Hole In The Wall',
    info: 'Travel app that uses a Google Maps API integration. Coded with SERN stack.',
    info2: '',
    url: 'http://165.232.146.25:4020/',
    repo: 'https://github.com/colin-shreeder/GroupProject', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'blog.jpg',
    title: 'React: Blog Website',
    info: 'Built using Express, React, Node, and .env',
    info2: '',
    url: 'http://165.232.146.25:3016/',
    repo: 'https://github.com/colin-shreeder/react-4-mini', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'todo.jpg',
    title: 'Angular: Todo List',
    info: 'Built using Angular.',
    info2: '',
    url: 'https://elated-noether-a100f9.netlify.app/',
    repo: 'https://github.com/colin-shreeder/angular-todolist', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'usu.jpg',
    title: 'University/Class Schedule Website',
    info: 'Built using Express, React, and Node.',
    info2: '',
    url: 'http://165.232.146.25:3017/',
    repo: 'https://github.com/colin-shreeder/react-4-afternoon', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fxpad.jpg',
    title: 'Piano & FX Pad',
    info: 'Built using HTML, CSS, and VanillaJS.',
    info2: '',
    url: 'https://priceless-hodgkin-901503.netlify.app/',
    repo: 'https://github.com/colin-shreeder/vanillajs-2-afternoon', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tictactoe.jpg',
    title: 'Tic Tac Toe Game',
    info: 'Bulit using HTML, CSS, and VanillaJS',
    info2: '',
    url: 'https://peaceful-curran-ee1d2f.netlify.app/',
    repo: 'https://github.com/colin-shreeder/vanillajs-1-afternoon/tree/master', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'texteditor.jpg',
    title: 'Text Editor',
    info: 'Built using HTML, CSS, JavaScript, Node, and React.',
    info2: '',
    url: 'http://165.232.146.25:4001/',
    repo: 'https://github.com/colin-shreeder/react-2-mini', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me?',
  btn: "Let's talk!",
  email: 'colin.c.reeder@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://www.linkedin.com/in/colinreeder/',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://www.linkedin.com/in/colinreeder/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/colinreeder/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/colin-shreeder',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
