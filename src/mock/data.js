import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Carlos développeur frontend', // e.g: 'Name | Developer'
  lang: 'fr', // e.g: en, es, fr, jp
  description: 'Portfolio Gonzalez Lo Vullo Carlos, développeur frontend JavaScript', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Bonjour, moi c'est",
  name: 'Carlos Gonzalez  Lo Vullo',
  subtitle: 'Je suis développeur frontend JS. Passionné de programmation',
  cta: 'Mon CV',
  resume: 'https://www.gonzalezlovullocarlos.fr/sources/CV-CARLOS.pdf', // if no resume, the button will not show up
  networks: [
    {
      id: nanoid(),
      social: 'twitter',
      url: 'https://twitter.com/glv_carlos',
    },
    {
      id: nanoid(),
      social: 'github',
      url: 'https://github.com/goniti',
    },
    {
      id: nanoid(),
      social: 'linkedin',
      url: 'https://www.linkedin.com/in/carlos-gonzalez-lo-vullo/',
    },
  ],
};

// ABOUT DATA
export const aboutData = {
  titleSection: 'À propos de moi',
  img: 'profile.jpg',
  paragraphOne: `Passionné de programmation et ayant pris goût a JavaScript.
    j'ai commencé à apprendre en autodidacte plusieurs technologies Front-End,
    Ensuite, je me suis perfectionné dans des technologies front plus avancée telle que React et Redux.`,
  paragraphTwo: `Afin d'améliorer ma compréhension lors de la communication avec une API 
    ainsi que l'utilisation d'une base de données, je me suis intéressé au Back-End notamment nodeJS et postgreSQL.`,
  paragraphThree: `Aujourd'hui encore, je continue de codé et me spécialiser avec React .`,
  cta: 'Faire connaissance',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'inbetween_folder-min.jpg',
    title: 'In Between',
    info: `Voici un projet JavaScript vanilla,
    Il s'agit d'un jeu de cartes dans lequel l'utilisateur est invité à tenter sa chance en pariant. Une fois la carte centrale découverte, le joueur verra ça mise, doublé triplé ou perdue. `,
    info2: `Le jeu est responsive, il m’a servi d'exercice pour manipuler le DOM.`,
    url: 'https://goniti.github.io/In_Between_Poker/',
    repo: 'https://github.com/goniti/In_Between_Poker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mini_folder.png',
    title: 'Mini',
    info: `Intégration PSD To HTML d'un site vitrine responsive. `,
    info2: `La page est statique, crée à l'aide de HTML/SASS `,
    url: 'https://goniti.github.io/mini/',
    repo: 'https://github.com/goniti/mini', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tourist-zone_folder.png',
    title: 'Tourist Zone List',
    info: `Application mobile first avec React et Sass. `,
    info2: `Développement d'une interface où l'utilisateur peut enregistrer ses prochains lieux a visité, pour cela, il devra créer des zones touristiques, chaque zone contient une liste regroupant jusqu'à trois villes.`,
    url: 'http://demo_zonelist.surge.sh',
    repo: 'https://github.com/goniti/touristZoneList', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: ' Vous voulez me connaître un peu mieux ?',
  btn: 'Discutons',
  email: 'gonzalezlovullocarlos@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/glv_carlos',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/carlos-gonzalez-lo-vullo/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/goniti',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
