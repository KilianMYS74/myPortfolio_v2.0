
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Kilian Mayans",
  title: "Hi all, I'm Kilian",
  subTitle: emoji("A passionate Full-Stack Developer 🚀🖥️ developing a passion of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native / Flutter and some other cool libraries and frameworks. Oh, and I code a lot of bugs too. 🤓"),
  resumeLink: "https://www.dropbox.com/s/u2pi3x6czg9n40e/CV%20KILIAN%20MAYANS%20EPI%20v4_EN.pdf?dl=0",
  resumeLink2: "https://www.dropbox.com/s/w98mqe804liniaw/CV%20KILIAN%20MAYANS%20EPI%20v4_FR.pdf?dl=0"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/KilianMYS74",
  linkedin: "https://www.linkedin.com/in/kilian-mayans/",
  gmail: "mayanskilian@gmail.com",
  // Support Gitlab, Facebook, Medium, Stackoverflow, Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I ❤",
  subTitle: "I AM A CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end & User Interfaces for your web and mobile applications ✏"),
    emoji("⚡ Develop fast back-end solutions for your web and mobile applications 🖥️"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks ↗"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean 🖧"),
    emoji("⚡ Tailor-made web consulting 🚀")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "fas fa-times"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "EPITECH Paris",
      logo: require("./assets/images/epitechLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2019 - July 2021",
      desc: "Activities and associations: Epitech Innovative Project (EIP).",
      descBullets: [
        "Agile methods",
        "Group/Project Management",
        "Web, mobile and software development",
        "Network and system administration"  ,
        "Business-IT",
        "..."
      ]
    },
    {
      schoolName: "ESCP Europe",
      logo: require("./assets/images/escpLogo.png"),
      subHeader: "Option E: Entrepreunarial and business formation",
      duration: "September 2020 - January 2021",
      desc: "Double Master 2 in partnership with EPITECH | Activities and associations: Epitech Innovative Project (EIP) and Tech consulting (for Option E groups).",
      descBullets: [
        "Design thinking & innovation",
        "Finance and venture capital",
        "Pitching",
        "Prototyping and market testing",
        "Startup ecosystems",
        "..."
      ]
    },
    {
      schoolName: "DCU (Dublin City University)",
      logo: require("./assets/images/dcuLogo.png"),
      subHeader: "Master 1 of Science in Computer Science",
      duration: "September 2019 - June 2020",
      desc: "Engineering and computing | 60/60 credits validated | Activities and associations: Epitech Innovative Project (EIP) and Gym association.",
      descBullets: [
        "Business-IT",
        "Entrepreneurship",
        "Project Management",
        "Agile methods",
        "Cryptography and number theory",
        "Cloud computing",
        "..."
      ]
    },
    {
      schoolName: "EPITECH Lyon",
      logo: require("./assets/images/epitechLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2016 - September 2019",
      desc: "Activities and associations: Epitech Innovative Project (EIP) and Gym/Sport association.",
      descBullets: [
        "Agile methods",
        "Web, mobile and software development",
        "Network and system administration",
        "Group/Project management",
        "..."
      ]
    }
  ]
}

// Your top proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "65%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    },
    {
      Stack: "Web consulting and advices",
      progressPercentage: "99%"
    }
  ]
};


// Your top work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full-Stack Developer and web consultant",
      company: "AUTO-ENTREPRISE MAYANS",
      companylogo: require("./assets/images/MAYANS_Kilian_+Z.jpg"),
      date: "October 2020 – Present",
      desc: "Mobile, web and software development and maintenance | Web consulting",
      descBullets: [
        "Mobile, web and software development",
        "Maintenance and addition of functionalities on existing projects",
        "Consultant in many companies that needed web / mobile solutions",
        "Formation on tools like Git"
      ]
    },
    {
      role: "Voice Assistants Developer",
      company: "ELCIA",
      companylogo: require("./assets/images/elciaLogo.jpg"),
      date: "April 2019 – July 2019",
      desc: "3rd-year internship | Voice assistant developer within the Research & Development department in the ClientsApps team | Research and development of the different connected speakers on the current market.",
      descBullets: [
          "Skills/Actions on Alexa and Google Assistant",
          "Agile methods",
          "Python",
          "AWS"
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "AUTO-ENTREPRISE MAYANS",
      companylogo: require("./assets/images/MAYANS_Kilian_+Z.jpg"),
      date: "December 2017 – April 2019",
      desc: "Mobile, web and software development and maintenance.",
      descBullets: [
          "Mobile, web and software development",
          "Maintenance and addition of functionalities on existing projects"
      ]
    },
    {
      role: "Back-End Developer",
      company: "Acti",
      companylogo: require("./assets/images/actiLogo.jpg"),
      date: "July 2017 – December 2017",
      desc: "2nd-year internship | Worked on websites such as Le Petit-Paumé, Ravifruit and given some development support on Val Thorens, Courchevel and ESCP Europe websites.",
      descBullets: [
        "Back-End development (PHP)",
        "WordPress",
        "Woocommerce",
        "Drupal 7"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "KilianMYS74", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"false" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: emoji("Big Projects 💡"),
  subtitle: "SOME PROJECTS I WORKED ON WITHIN MY INTERNSHIPS, WITHIN MY SCHOOLS OR EVEN DURING MY FREELANCE TIME",

  projectsCards: [
    {
      title: "ESCP Europe",
      subtitle: "I worked on this website thanks to my 2nd year internship at Acti.",
      image: require("./assets/images/escpLogo.png"),
      footerLink: [
        { name: "View website", url: "https://escp.eu/fr" }
      ]
    },
    {
      title: "Ravifruit",
      subtitle: "I worked on this website thanks to my 2nd year internship at Acti.",
      image: require("./assets/images/ravifruitLogo.jpg"),
      footerLink: [{ name: "View website", url: "https://www.ravifruit.com/fr/" }]
    },
    {
      title: "Le Petit-Paumé",
      subtitle: "I worked on this website thanks to my 2nd year internship at Acti.",
      image: require("./assets/images/lepetitpaumeLogo.jpg"),
      footerLink: [
        { name: "View website", url: "https://petitpaume.com/" }
      ]
    },
    {
      title: "Iz'Heal",
      subtitle: "Iz'Heal is my EIP (Epitech Innovative Project), and we are a team of 5 people including me. For more explanations about it feel free to visit the website (in french sorry) or watch the video prototype. Status: work in progress.",
      image: require("./assets/images/2021_affiche_izheal.png"),
      footerLink: [
        { name: "View website", url: "https://eip.epitech.eu/2021/izheal/" },
        { name: "View prototype", url: "https://www.youtube.com/watch?v=2CDwEn0RJgo"}
      ]
    },
    {
      title: "HFIT",
      subtitle: "HFIT is the main project of the Option E formation. I created the prototype thanks to Figma, feel free to take a look at it using the link below. The app will be developed thanks to Flutter. Status: work in progress.",
      image: require("./assets/images/hfitLogo.jpeg"),
      footerLink: [
        { name: "View prototype", url: "https://www.figma.com/proto/daFeABulVYQBOEMilGZcqg/HFIT-Prototype?node-id=0%3A2&scaling=scale-down"}
      ]
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

/*const achievementSection = {
  viewAchievements: false,
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },
    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};*/

// Blogs Section

const blogSection = {

  title: emoji("Blogs 📝"),
  subtitle: "With ❤ for developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "_blank",
      title: "I haven't yet had the time or the audacity to start writing.",
      description: "But stay tuned, it will come..."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "Talks 🎤",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE..."),

  talks: [
    {
      title: "I haven't yet had the time to do talks.",
      subtitle: "But stay tuned, it will come...",
      slides_url: "_blank",
      event_url: "_blank"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcasts 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY (BUT MOSTLY MYSELF) \n" +
      "No podcasts for now but it will come one day... maybe...",

  // Please Provide with Your Podcast embeded Link
  podcast: [""]
};

const contactInfo = {
  title: emoji("Contact Me ☎"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  desc: "Aspiring Full-Stack Developer 👾 | Open Source Contributor 🔥 | In ❤ with new technologies 🤓 | Fully open for new opportunities 🚀",
  email_address: "mayanskilian@gmail.com"
};

//Twitter Section

/*const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @

};*/

export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, blogSection, talkSection, podcastSection, contactInfo };
