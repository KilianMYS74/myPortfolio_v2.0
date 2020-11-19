# Full-Stack Developer | Kilian MAYANS Portfolio ⚡
The goal of my Portfolio is to be multilingual, mobile friendly, have json fetched data and looking amazing.
But the main feature of this portfolio and not the least... THE DARK MODE BUTTON.
## Table of Contents
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Change and Customize](#change-and-customize-every-section-according-to-your-need)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Illustrations](#illustrations)

## Getting Started

I trully believe in OpenSource project, that is why this repository will stay public and free-to-use.

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer or use [Docker](https://www.docker.com/products/docker-desktop).

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```
### Docker Commands

```
1) BUILD IMAGE : docker build -t developerfolio:latest .
2) RUN IMAGE: docker run -t -p 3000:3000 developerfolio:latest
```


## How To Use 

From your command line, clone and run developerFolio:

```bash
# Clone this repository
$ git clone git@github.com:KilianMYS74/myPortfolio_v2.0.git

# Go into the repository
$ cd myPortfolio_v2.0

# Install dependencies
$ npm install

#Start's development server
$ npm start
```

## Change and customize every section according to your need.

#### Personalize page content in `/src/portfolio.js` & modify it as per your need.

```javascript
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Kilian Mayans",
  title: "Hi all, I'm Kilian",
  subTitle: emoji("A passionate Full-Stack Developer 🚀🖥️ developing a passion of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native / Flutter and some other cool libraries and frameworks."),
  resumeLink: "https://www.dropbox.com/s/u2pi3x6czg9n40e/CV%20KILIAN%20MAYANS%20EPI%20v4_EN.pdf?dl=0"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/KilianMYS74",
  linkedin: "https://www.linkedin.com/in/kilian-mayans/",
  gmail: "mayanskilian@gmail.com",
  // Support Gitlab, Facebook, Medium, Stackoverflow, Instagram and Twitter are also supported in the links!
};


const skillsSection = { ... }

const techStack = { ... }

const workExperience = { ... }

const openSource = { ... }

const bigProjects = { ... }

const achievementSection = { ... }

const blogSection = { ... }

const contactInfo = { ... }

const twitterDetails = { ... }

```

#### Using Emojis

For adding emoji 😃 into the texts in `Portfolio.js`, use the `emoji()` function and pass the text you need as an argument. This would help in keeping emojis compatible across different browsers and platforms.

#### Adding Twitter Time line to your Page
Insert your Twitter username in `portfolio.js` to show your recent activity on your page.

```javascript
const twitterDetails = {
  userName : "Your Twitter Username"
};
```
Note: Don't use `@` symbol when adding username.

## Deployment
When you are done with the setup, you should host your website online.


#### Deploying to Netlify

You can host directly with Netlify by linking your own repository.

[![Deploy To Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/KilianMYS74/myPortfolio_v2.0)

For more information, read [hosting on Netlify](https://create-react-app.dev/docs/deployment/#netlify).

#### Deploying to Github Pages

Do not hesitate to follow the guide [here](https://create-react-app.dev/docs/deployment/#github-pages).

## Technologies Used 

- [React](https://reactjs.org/)
- [graphql](https://graphql.org/)
- [apollo-boost](https://www.apollographql.com/docs/react/get-started/)
- [react-twitter-embed](https://github.com/saurabhnemade/react-twitter-embed)
- [react-easy-emoji](https://github.com/appfigures/react-easy-emoji)
- [react-headroom](https://github.com/KyleAMathews/react-headroom)
- [color-thief](https://github.com/lokesh/color-thief)

## Illustrations
- [UnDraw](https://undraw.co/illustrations)

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

## Scan my QRCODE and visit my Portfolio!

![Scan my QRCODE and visit my Portfolio!](https://raw.githubusercontent.com/KilianMYS74/myPortfolio_v2.0/master/portfolioQRCODE.png)

---

