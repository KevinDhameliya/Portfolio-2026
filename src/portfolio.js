/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Kevin's Portfolio",
  description:
    "Android Developer with 2+ years of experience building scalable and production-ready Android applications using Kotlin and MVVM architecture.",
  og: {
    title: "Kevin Dhameliya Portfolio",
    type: "website",
    url: "http://yourportfolio.com/",
  },
};

//Home Page
const greeting = {
  title: "Kevin Dhameliya",
  logo_name: "KevinDhameliya",
  nickname: "Android Developer",
  subTitle:
    "Android Developer with 2+ years of experience building production-ready Android applications using Kotlin, MVVM architecture, Retrofit, Firebase, and Jetpack Compose.",
  resumeLink:
    "https://drive.google.com/file/d/1DoQ_1lG1Q3gp0pxe24p46YtC4Zc6opT6/view?usp=sharing",
  portfolio_repository: "https://github.com/KevinDhameliya",
  githubProfile: "https://github.com/KevinDhameliya",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kevin-dhameliya-49328318b/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:dhameliyakevin405@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "GitHub",
    link: "https://github.com/KevinDhameliya",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
];

const skills = {
  data: [
    {
      title: "Android Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing scalable Android applications using Kotlin and MVVM architecture",
        "⚡ Building responsive and user-friendly mobile UI using XML and Jetpack Compose",
        "⚡ Integrating REST APIs using Retrofit and handling asynchronous operations with Coroutines and Flow",
        "⚡ Working with Firebase, Google Maps, HERE Maps SDK and Play Store deployment",
      ],
      softwareSkills: [
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "simple-icons:kotlin",
          style: {
            color: "#7F52FF",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
      ],
    },
    {
      title: "React Native Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building cross-platform mobile applications using React Native",
        "⚡ Integrating APIs and improving application performance",
        "⚡ Designing reusable UI components and scalable app architecture",
      ],
      softwareSkills: [
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Ahmedabad Institute of Technology",
      subtitle: "Bachelor of Engineering",
      logo_path: "Ait_logo.png",
      alt_name: "AIT",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ Completed Bachelor of Engineering with focus on software development and Android application development.",
        "⚡ GPA: 8.16 / 10",
      ],
      website_link: "https://aitindia.in/",
    },
    {
      title: "Imperial Science School, Dhoraji",
      subtitle: "Higher Secondary Education",
      logo_path: "school.logo.png",
      alt_name: "HSC",
      duration: "2017 - 2019",
      descriptions: ["⚡ Percentage: 82%"],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Projects",
  description:
    "Experienced Android Developer with expertise in Kotlin, MVVM architecture, Retrofit, Firebase and React Native application development.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Mobile App Developer",
          company: "iFlair Web Technologies Pvt. Ltd.",
          company_url: "https://www.iflair.com/",
          logo_path: "mobile_app.jpg",
          duration: "2024 - Present",
          location: "Ahmedabad, Gujarat",
          description:
            "Developing scalable Android applications using Kotlin, MVVM architecture, Retrofit and HERE Maps SDK. Working on real-time navigation and business applications.",
          color: "#0879bf",
        },
        {
          title: "React Native Developer",
          company: "Saawahi IT Solution LLP",
          company_url: "",
          logo_path: "react_native_logo.png",
          duration: "June 2023 - 2024",
          location: "Ahmedabad, Gujarat",
          description:
            "Worked on cross-platform mobile applications using React Native. Integrated APIs and improved mobile application performance and UI.",
          color: "#fc1f20",
          padding: "200px",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Professional Android and React Native applications developed using Kotlin, MVVM architecture, Retrofit, Firebase, HERE Maps SDK, and modern mobile development practices.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    description:
      "Feel free to contact me regarding Android Development, Kotlin, React Native or mobile application projects.",
  },

  addressSection: {
    title: "Address",
    subtitle: "Ahmedabad, Gujarat, India",
    locality: "Ahmedabad",
    country: "India",
    region: "Gujarat",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },

  phoneSection: {
    title: "Phone Number",
    subtitle: "+91-9727318649",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
