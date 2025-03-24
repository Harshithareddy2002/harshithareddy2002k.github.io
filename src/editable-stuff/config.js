//Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Harshitha Reddy",
  middleName: "",
  lastName: "Kancherla",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Harshithareddy2002",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/harshithareddyk",
    },
   
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink:"/me.jpg",
  imageSize: 375,
  message:
    "Hi! I’m Harshitha Reddy Kancherla . A Master’s student in Computer Science at Syracuse University, in my final semester, seeking full-time and internship opportunities in data-driven roles. Passionate about data analysis, machine learning, deep Learning and NLP, I enjoy transforming raw data into actionable insights. With expertise in Python, SQL, and visualization , I thrive on solving complex problems and building impactful solutions. Excited to collaborate, learn, and apply data to drive real-world decisions!" ,
  
}

// PROJECTS SECTION
// Setting up project length will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Harshithareddy2002", //i.e."johnDoe12Gh"
  reposLength: 6,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  programming: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 85 },
    { name: "MS Excel", value: 85 },
    { name: "R", value: 80 },
    { name: "Java", value: 85 },
    { name: "JavaScript", value: 85 },
    
  ],

    dataScience: [
      { name: "Machine Learning", value: 90 },
      { name: "Deep Learning", value: 85 },
      { name: "NLP", value: 80 },
      { name: "Bayesian Networks", value: 70 },
      { name: "Neural Networks", value: 80 },
      { name: "Tableau & Power BI", value: 85 },
  
    
  ],
};


// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Data Analyst,Data Science or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "harshithareddyk2002@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experience",
  data: [
    {
      role: 'Data Analyst',
      companyname: 'Sai Likitha Indane',
      date: 'Sep 2021 – July 2023',
    },
    {
      role: 'ML Intern',
      companyname: 'Sai Likitha Indane',
      date: 'June 2021 – August 2023',
    },
    
  ]
}


export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
