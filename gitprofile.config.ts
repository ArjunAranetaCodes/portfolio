// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ArjunAranetaCodes', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'ArjunAranetaCodes/Jobby',
          'ArjunAranetaCodes/LangChain-Guides',
          'ArjunAranetaCodes/MoreCodes-Youtube',
          'ArjunAranetaCodes/InventorySystem-Spring-ReactJS',
          'ArjunAranetaCodes/HibernateProjects',
          'ArjunAranetaCodes/JavaSpringProjects',
          'ArjunAranetaCodes/PomoTune-Pomodoro-App',
          'ArjunAranetaCodes/Issue-Tracker',
          'ArjunAranetaCodes/TailwindCSS-Projects',
          'ArjunAranetaCodes/JavaPractices',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Jobby',
          description:
            'Jobby is a cutting-edge job board website designed to revolutionize the way job seekers find opportunities and employers post vacancies.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'PomoTune',
          description:
            'Pomotune: Your personal productivity companion, leveraging the Pomodoro Technique to enhance focus and efficiency.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Arjun Araneta',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'arjun-araneta',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'arjunaraneta@gmail.com',
  },
  resume: {
    fileUrl: 'Resume-Arjun-Araneta2024.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Spring',
    'Hibernate',
    'JUnit',
    'JavaScript',
    'React.js',
    'Next.js',
    'Node.js',
    'Angular',
    'Vue',
    'PHP',
    'Laravel',
    'MSSQL',
    'Oracle Database',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Telus International Philippines',
      position: 'Java/Intermediate Applications Developer',
      from: 'May 17, 2021',
      to: 'December 31, 2023',
      companyLink: '',
    },
    {
      company: 'KR Solutions/Racami LTD',
      position: 'Java Developer',
      from: 'January 7, 2019',
      to: 'May 7, 2021',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Oracle Certified Professional, Java SE 8 Programmer',
      body: '',
      year: '',
      link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=8666D7A3CDA0F8E42B5E234202A62257236A9CE2648E47C88EC1C9B13745105C',
    },
    {
      name: 'Oracle Certified Professional, Java SE 8 Associate',
      body: '',
      year: '',
      link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=0FBDB523F8B9B53DECB8E5CDAE34291582F6E7D512F6C08388EDFA529DC3757B',
    },
    {
      name: 'Oracle Certified Foundations Associate',
      body: '',
      year: '',
      link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=0FBDB523F8B9B53DECB8E5CDAE34291582F6E7D512F6C08388EDFA529DC3757B',
    },
    {
      name: 'Oracle Cloud Infrastructure 2023 Certified Foundations Associate',
      body: '',
      year: '',
      link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=76688ACFFB4AAB6EB05CB94B7E09899D6CC7C499F008A836D04D51E7F4EBB199',
    },
    {
      name: 'React.JS Certification',
      body: '',
      year: '',
      link: 'https://my-learning.w3schools.com/certificates',
    },
    {
      name: 'Node JS Training and Fundamentals',
      body: '',
      year: '',
      link: 'ude.my/UC-NEBGPZGJ',
    },
    {
      name: 'Angular v4',
      body: '',
      year: '',
      link: 'ude.my/UC-VUFGUOGK',
    },
    {
      name: 'Jenkins From Zero to Hero',
      body: '',
      year: '',
      link: 'ude.my/UC-29656060-c1ae-4ca4-858e-fbcd74fc9b1b',
    },
  ],
  educations: [
    {
      institution: 'Divine Word College of San Jose',
      degree: 'Bachelor Of Science in Computer Science',
      from: '2008',
      to: '2012',
    },
    {
      institution: 'Occidental Mindoro National College',
      degree: 'Secondary Education',
      from: '2004',
      to: '2008',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: '@arjunaraneta', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: '',

  enablePWA: true,
};

export default CONFIG;
