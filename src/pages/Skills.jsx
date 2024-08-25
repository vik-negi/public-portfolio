// import React, { useState } from "react";
import create from "../utils/Theme";

import SectionHeader from "../componenets/SectionHeader";
// const SkillTab = ({ title, skills, isActive }) => {
//   if (!isActive) return null;
// const theme = create();

// const tabTitleStyle = "text-5xl font-bold my-5 font-mono text-blue-500 px-10";

// const skillCardStyle = `my-5 p-5 w-[200px] h-[150px] bg-[#100F22] rounded-lg shadow-lg flex flex-col justify-center items-center ${
//   theme.theme === "light" && "bg-[#E1EBF5]"
// }`;

//   return (
//     <div>
//       {/* <div className={`${tabTitleStyle}`}>{title}</div> */}
//       <div
//         className={`grid mx-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:grid-cols-2 gap-2 justify-items-center transition-all overflow-hidden duration-5000 ease-in-out`}
//       >
//         {skills.map((skill) => (
//           <div
//             key={skill.name}
//             style={
//               {
//                 // backgroundColor: "rgb(16 15 34)",
//               }
//             }
//             className={`${skillCardStyle} hover:bg-transparent hover:shadow-none transition duration-500 ease-in-out hover:border-2 hover:border-blue-500 rounded-lg hover:cursor-pointer
//            `}
//           >
//             <img
//               className="w-20 h-20 rounded-full"
//               src={
//                 // skill.image ||
//                 "https://th.bing.com/th/id/R.c963626c145ea660ba7ceee666789c0a?rik=%2b8pQxk8WvGd0Fw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fgithub%2fgithub_PNG28.png&ehk=SD294NKjXG3JppRn7fPyo6czUcyiLUWeIci5Y0RO%2fbk%3d&risl=&pid=ImgRaw&r=0"
//               }
//               alt={skill.name}
//             />
//             <h3 className={`text-3xl text-semibold my-3 `}>{skill.name}</h3>
//             <p className="text-[12px] text-bold my-1">{skill.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const Skills = () => {
//   const [activeTab, setActiveTab] = useState("Web Development");
//   const [showMoreSkills, setShowMoreSkills] = useState(false);

//   const handleTabClick = (skill) => {
//     setActiveTab(skill);
//     showMoreSkills && setShowMoreSkills(false);
//   };

//   const tabNameStyle =
//     "flex-1 mx-2 text-center text-2xl font-bold py-4 my-3 hover:cursor-pointer hover:text-blue-500 transition duration-1000 ease-in-out hover:bg-gray-200 rounded-t-lg";

//   const skills = {
//     "Web Development": [
//       {
//         name: "HTML/CSS",
//         title: "Frontend Development",
//         subtitle: "Web technologies",
//         image: "path/to/html-css-image.png",
//       },
//       {
//         name: "JavaScript",
//         title: "Frontend Development",
//         subtitle: "Web technologies",
//         image: "path/to/js-image.png",
//       },
//       {
//         name: "React",
//         title: "Frontend Development",
//         subtitle: "JavaScript library",
//         image: "path/to/react-image.png",
//       },
//       // {
//       //   name: "Vue.js",
//       //   title: "Frontend Development",
//       //   subtitle: "JavaScript framework",
//       //   image: "path/to/vuejs-image.png",
//       // },
//       {
//         name: "Node.js",
//         title: "Backend Development",
//         subtitle: "JavaScript runtime",
//         image: "path/to/nodejs-image.png",
//       },
//       {
//         name: "Express.js",
//         title: "Backend Development",
//         subtitle: "Web application framework",
//         image: "path/to/expressjs-image.png",
//       },
//       {
//         name: "Python",
//         title: "Backend Development",
//         subtitle: "Programming language",
//         image: "path/to/python-image.png",
//       },
//       // {
//       //   name: "Ruby on Rails",
//       //   title: "Backend Development",
//       //   subtitle: "Web application framework",
//       //   image: "path/to/ruby-on-rails-image.png",
//       // },
//       {
//         name: "MongoDB",
//         title: "Database",
//         subtitle: "NoSQL database",
//         image: "path/to/mongodb-image.png",
//       },
//       {
//         name: "SQL",
//         title: "Database",
//         subtitle: "Structured Query Language",
//         image: "path/to/sql-image.png",
//       },
//     ],
//     Cloud: [
//       {
//         name: "AWS",
//         title: "Amazon Web Services",
//         subtitle: "Cloud Computing",
//         image: "path/to/aws-image.png",
//       },
//       // {
//       //   name: "Azure",
//       //   title: "Microsoft Azure",
//       //   subtitle: "Cloud Computing",
//       //   image: "path/to/azure-image.png",
//       // },
//       // {
//       //   name: "Google Cloud",
//       //   title: "Google Cloud Platform",
//       //   subtitle: "Cloud Computing",
//       //   image: "path/to/google-cloud-image.png",
//       // },
//       // {
//       //   name: "DigitalOcean",
//       //   title: "DigitalOcean",
//       //   subtitle: "Cloud Computing",
//       //   image: "path/to/digitalocean-image.png",
//       // },
//       {
//         name: "Heroku",
//         title: "Heroku",
//         subtitle: "Cloud Platform",
//         image: "path/to/heroku-image.png",
//       },
//       {
//         name: "Firebase",
//         title: "Firebase",
//         subtitle: "Mobile and Web Application Platform",
//         image: "path/to/firebase-image.png",
//       },
//       // {
//       //   name: "Kubernetes",
//       //   title: "Kubernetes",
//       //   subtitle: "Container Orchestration",
//       //   image: "path/to/kubernetes-image.png",
//       // },
//       {
//         name: "Docker",
//         title: "Docker",
//         subtitle: "Containerization Platform",
//         image: "path/to/docker-image.png",
//       },
//       {
//         name: "CI/CD",
//         title: "Continuous Integration/Continuous Deployment",
//         subtitle: "Software Development Process",
//         image: "path/to/cicd-image.png",
//       },
//       // {
//       //   name: "Serverless",
//       //   title: "Serverless Architecture",
//       //   subtitle: "Cloud Computing",
//       //   image: "path/to/serverless-image.png",
//       // },
//     ],
//     "App Development": [
//       {
//         name: "React Native",
//         title: "Mobile App Development",
//         subtitle: "Cross-platform apps",
//         image: "path/to/react-native-image.png",
//       },
//       {
//         name: "Flutter",
//         title: "Mobile App Development",
//         subtitle: "Cross-platform apps",
//         image: "path/to/flutter-image.png",
//       },
//       // {
//       //   name: "Swift",
//       //   title: "iOS App Development",
//       //   subtitle: "Apple's programming language",
//       //   image: "path/to/swift-image.png",
//       // },
//       // {
//       //   name: "Kotlin",
//       //   title: "Android App Development",
//       //   subtitle: "Android programming language",
//       //   image: "path/to/kotlin-image.png",
//       // },
//       // {
//       //   name: "Ionic",
//       //   title: "Hybrid App Development",
//       //   subtitle: "Mobile App Development",
//       //   image: "path/to/ionic-image.png",
//       // },
//       // {
//       //   name: "Electron",
//       //   title: "Desktop App Development",
//       //   subtitle: "Cross-platform framework",
//       //   image: "path/to/electron-image.png",
//       // },
//       // {
//       //   name: "React Desktop",
//       //   title: "Desktop App Development",
//       //   subtitle: "Cross-platform framework",
//       //   image: "path/to/react-desktop-image.png",
//       // },
//       // {
//       //   name: "JavaFX",
//       //   title: "Desktop App Development",
//       //   subtitle: "Java library for UI",
//       //   image: "path/to/javafx-image.png",
//       // },
//       // {
//       //   name: "C#",
//       //   title: "Windows App Development",
//       //   subtitle: "Microsoft's programming language",
//       //   image: "path/to/csharp-image.png",
//       // },
//       // {
//       //   name: "Unity",
//       //   title: "Game Development",
//       //   subtitle: "Game engine",
//       //   image: "path/to/unity-image.png",
//       // },
//     ],

//     Blockchain: [
//       {
//         name: "Ethereum",
//         title: "Blockchain Development",
//         subtitle: "Smart Contracts",
//         image: "path/to/ethereum-image.png",
//       },
//     ],

//     "Machine Learning": [
//       {
//         name: "TensorFlow",
//         title: "Machine Learning",
//         subtitle: "Deep learning",
//         image: "path/to/tensorflow-image.png",
//       },
//       // Add other machine learning skills here
//     ],
//   };

//   return (
//     <div
//       className="section lg:container mx-auto flex flex-col
//     "
//       id="skills"
//       tabIndex="18"
//     >
//       <SectionHeader title="Skills" description="This is some of mine skills" />
//       <div className="tab-bar flex flex-row sm:flex hidden justify-spaceBetween items-center">
//         {Object.keys(skills).map((skill) => (
//           <button
//             className={`${tabNameStyle} ${
//               activeTab === skill && "border-b-2 border-gray-500"
//             } `}
//             onClick={() => handleTabClick(skill)}
//           >
//             {skill}
//           </button>
//         ))}
//       </div>

//       {/* make a dropdown of above list */}

//       <div className="flex h-15 flex-col gap-6 sm:hidden block">
//         <select
//           className="p-3"
//           size="lg"
//           label="Select skills"
//           onChange={(e) => handleTabClick(e.target.value)}
//         >
//           {Object.keys(skills).map((skill) => (
//             <option
//               className="p-3 bg-[#F9F9F9] text-gray-500 mb-2 rounded-md
//             "
//             >
//               {skill}
//             </option>
//           ))}
//         </select>
//       </div>

//       {Object.keys(skills).map((skill, index) => {
//         console.log("skills.length", skills[skill].length);
//         const skillsToShow =
//           skill.length > 10 && !showMoreSkills
//             ? skills[skill].slice(0, 10)
//             : skills[skill];
//         return (
//           <>
//             <SkillTab
//               key={skill}
//               title={skill}
//               skills={skillsToShow}
//               isActive={activeTab === skill}
//             />
//           </>
//         );
//       })}
//       {skills[activeTab].length > 10 && (
//         <button
//           onClick={() => setShowMoreSkills(!showMoreSkills)}
//           className={`bg-[#16a34a] hover:bg-[#1fd863] text-white font-bold py-2 my-10 px-4 rounded w-[125px] mx-auto`}
//         >
//           <p
//             className="text-center text-md font-medium cursor-pointer
//         "
//           >
//             {showMoreSkills ? "Show Less" : "Show More"}
//           </p>
//         </button>
//       )}
//     </div>
//   );
// };

// export default Skills;

import React, { useState } from "react";
import { getAdminSkills } from "../axios/skills";
import { useQuery } from "react-query";
// import { Tilt } from "react-tilt";

// export const skills = [
//   {
//     title: "Frontend",
//     skills: [
//       {
//         name: "React Js",
//         image:
//           "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
//       },
//       {
//         name: "Redux",
//         image:
//           "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
//       },
//       {
//         name: "Next Js",
//         image:
//           "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
//       },
//       {
//         name: "Angular Js",
//         image:
//           "https://camo.githubusercontent.com/8886130b3d8aba95dbdd7c4f9a41029606424cc06d1873c1ced87dd55a222fef/68747470733a2f2f616e67756c61722e696f2f6173736574732f696d616765732f6c6f676f732f616e67756c61722f616e67756c61722e737667",
//       },
//       {
//         name: "HTML",
//         image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
//       },
//       {
//         name: "CSS",
//         image:
//           "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
//       },
//       {
//         name: "JavaScript",
//         image:
//           "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
//       },
//       {
//         name: "Bootstrap",
//         image:
//           "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
//       },
//       {
//         name: "Material UI",
//         image:
//           "data:image/png;base64,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",
//       },
//       {
//         name: "Flutter",
//         image:
//           "https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png",
//       },
//     ],
//   },
//   {
//     title: "Backend",
//     skills: [
//       {
//         name: "Node Js",
//         image: "https://nodejs.org/static/images/logo.svg",
//       },
//       {
//         name: "Express Js",
//         image:
//           "data:image/png;base64,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",
//       },
//       {
//         name: "Graph Ql",
//         image: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
//       },
//       {
//         name: "Python",
//         image:
//           "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
//       },
//       {
//         name: "Flask",
//         image:
//           "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1280px-Flask_logo.svg.png",
//       },
//       {
//         name: "Django",
//         image:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlFFyY16N5NRhzoG24RqB7x8Ok2t8Bdgs-tuMsOBXS2Q&s",
//       },
//       {
//         name: "MySQL",
//         image:
//           "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
//       },
//       {
//         name: "Postgresql",
//         image: "https://www.postgresql.org/media/img/about/press/elephant.png",
//       },
//       {
//         name: "MongoDB",
//         image:
//           "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
//       },
//       {
//         name: "Firebase",
//         image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
//       },
//     ],
//   },
//   {
//     title: "DevOps",
//     skills: [
//       {
//         name: "AWS",
//         image:
//           "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
//       },
//       // {
//       //   name: "Google Cloud",
//       //   image:
//       //     "https://static-00.iconduck.com/assets.00/google-cloud-platform-logo-icon-2048x1824-pg4wzspq.png",
//       // },
//       {
//         name: "Docker",
//         image:
//           "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
//       },
//       // {
//       //   name: "Jenkins",
//       //   image:
//       //     "https://toppng.com/uploads/preview/jenkins-logo-11609365847mufysaivph.png",
//       // },
//       // {
//       //   name: "Nginx",
//       //   image: "https://download.logo.wine/logo/Nginx/Nginx-Logo.wine.png",
//       // },
//       // {
//       //   name: "Grafana",
//       //   image:
//       //     "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Grafana_logo.svg/1200px-Grafana_logo.svg.png",
//       // },
//       // {
//       //   name: "Kubernetes",
//       //   image:
//       //     "https://upload.wikimedia.org/wikipedia/commons/0/00/Kubernetes_%28container_engine%29.png",
//       // },
//       // {
//       //   name: "Prometheus",
//       //   image:
//       //     "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/1200px-Prometheus_software_logo.svg.png",
//       // },
//     ],
//   },
//   {
//     title: "App Development",
//     skills: [
//       {
//         name: "Java",
//         image:
//           "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
//       },
//       {
//         name: "Flutter",
//         image:
//           "https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png",
//       },
//       {
//         name: "React Native",
//         image:
//           "https://th.bing.com/th/id/OIP.zXu2vsYPZ5mqF0tOB7kupAHaHa?rs=1&pid=ImgDetMain",
//       },
//       // {
//       //   name: "Kotlin",
//       //   image:
//       //     "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
//       // },
//       // {
//       //   name: "Jetpack Compose",
//       //   image:
//       //     "https://3.bp.blogspot.com/-VVp3WvJvl84/X0Vu6EjYqDI/AAAAAAAAPjU/ZOMKiUlgfg8ok8DY8Hc-ocOvGdB0z86AgCLcBGAsYHQ/s1600/jetpack%2Bcompose%2Bicon_RGB.png",
//       // },
//       // {
//       //   name: "XML",
//       //   image:
//       //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s",
//       // },
//       {
//         name: "Android Studio",
//         image:
//           "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
//       },
//     ],
//   },
//   {
//     title: "Machine Learning",
//     skills: [
//       {
//         name: "Python",
//         image:
//           "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
//       },
//       {
//         name: "Tenserflow",
//         image:
//           "https://static-00.iconduck.com/assets.00/tensorflow-icon-1911x2048-1m2s54vn.png",
//       },
//       // {
//       //   name: "Keras",
//       //   image:
//       //     "https://miro.medium.com/v2/resize:fit:600/1*DKu_54iqz6C-p6ndo7rO3g.png",
//       // },
//       {
//         name: "Jupyter",
//         image:
//           "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1767px-Jupyter_logo.svg.png",
//       },
//       {
//         name: "Google Colab",
//         image:
//           "https://assets.stickpng.com/images/63c2e4c9c4baad4ce22bf9ef.png",
//       },
//       {
//         name: "Sk Learn Kit",
//         image:
//           "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/2560px-Scikit_learn_logo_small.svg.png",
//       },
//     ],
//   },
//   {
//     title: "Others",
//     skills: [
//       {
//         name: "Git",
//         image:
//           "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
//       },
//       {
//         name: "GitHub",
//         image:
//           "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
//       },
//       {
//         name: "Netlify",
//         image:
//           "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
//       },
//       {
//         name: "VS Code",
//         image:
//           "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
//       },
//       {
//         name: "Postman",
//         image:
//           "https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png",
//       },
//       {
//         name: "Adobe XD",
//         image:
//           "https://camo.githubusercontent.com/c205ecbe12500177d102169d97bc1c17c545155fdf5ec78c08d54ac53e5b38c1/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f61646f62652d78642e737667",
//       },
//       {
//         name: "Figma",
//         image:
//           "https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png",
//       },
//     ],
//   },
// ];

const Skills = () => {
  const theme = create();

  const [skills, setSkills] = useState([]);

  const { data, refetch: refetchskills } = useQuery(
    "my-skills",
    getAdminSkills,
    {
      retry: 1,
      retryDelay: 1,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        setSkills(data?.data?.skills);
      },
    }
  );

  const tabTitleStyle = "text-5xl font-bold my-5 font-mono text-blue-500 px-10";

  const skillCardStyle = `my-5 p-5  bg-[#100F22] rounded-lg shadow-lg flex flex-col  items-start ${
    theme.theme === "light" && "bg-[#E1EBF5]"
  }`;
  return (
    <div
      id="Skills"
      className="section lg:mb-[100px] lg:sm-[50px] lg:container px-[5%] mx-auto  flex flex-col justify-center items-center relative z-10"
    >
      <div className="w-full flex flex-col items-center">
        {/* <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-semibold text-center mt-8 md:mt-12 mb-6  ${
            theme.theme === "light" ? "text-[#12121]" : "text-white"
          }  animate-bounce `}
        >
          Skills
        </h2>
        <p className="text-lg md:text-xl font-semibold text-center text-secondary mb-8 md:mb-10 animate-fade-in-up">
          Here are some of my skills on which I have been working on for the
          past 3 years.
        </p> */}

        <SectionHeader
          title="Skills"
          description="My Skill Set: Developed and Applied Throughout My Journey"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={`skill-${index}`}
              className={`max-w-[500px]  border shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:cursor-pointer ${skillCardStyle} hover:bg-transparent hover:shadow-none transition duration-500 ease-in-out hover:border-2 hover:border-blue-500`}
            >
              <div className="px-6 py-4 align-top">
                <h3
                  className={`text-3xl mb-[20px] ${
                    theme.theme == "light" ? "text-gray-800" : "text-white"
                  } font-semibold mb-4  text-center`}
                >
                  {skill.category}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {skill.skills.map((item, index_x) => (
                    <div
                      key={`skill-x-${index_x}`}
                      className={`flex items-center ${
                        theme.theme !== "light" && "bg-gray-900"
                      }  border border-gray-400 dark:border-gray-600 rounded-md py-2 px-4 transform hover:rotate-6 hover:scale-110 transition duration-300`}
                    >
                      <img
                        src={item?.skill?.image}
                        alt={item?.skill?.name}
                        className="w-6 h-6 mr-2"
                      />
                      <span
                        className={` ${
                          theme.theme == "light"
                            ? "text-grey-900"
                            : "text-white"
                        }`}
                      >
                        {item?.skill?.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
