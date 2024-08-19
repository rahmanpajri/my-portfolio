import icositer from "../assets/projects/icositer.jpg";
import kembang from "../assets/projects/kembang.jpg";
import pplk from "../assets/projects/pplk.jpg";
import ptba from "../assets/projects/ptba.jpg";
import price from "../assets/projects/price-list.png";
import movieapp from "../assets/projects/movieapp.png";
import idnheroes from "../assets/projects/idnheroes.png";
import githubuser from "../assets/projects/githubuser.png";
import foodnesian from "../assets/projects/foodnesian.png";
import kuma from "../assets/projects/kuma.png";
import carbontrack from "../assets/projects/carbontrack.png";
import cancerdetect from "../assets/projects/cancerdetect.png";
import webcon from "../assets/projects/web-conf.png";
import storyapp from "../assets/projects/storyapp.png"

export const HERO_CONTENT = `I am a developer who has a passion in developing mobile-based applications and website development. With 2 years experience in mobile developer and 2 years experience in website developer, I have skills including kotlin, java, dart, firebase, MySQL, testing tools, php, javascript, css, and many other skills. My goal is to utilize my skills to create application solutions that can benefit and improve user experience.`;

export const ABOUT_TEXT = `Fresh graduate with a bachelor's degree in the Informatics Engineering study program at Institut Teknologi 
Sumatera with GPA 3.8 who has an interest in working in Mobile Application and Website Development. Have experience 
in Mobile Development through Independent Study at Bangkit Academy with Mobile Development Learning 
Path. And Experience in Web Developer by working on several work projects. Have a sense of time management, good communication, and willingness to learn something new. Expert 
in using Kotlin, Java, Flutter (Dart), Firebase, and SQL programming as evidenced by being a Mobile Developer 
on several projects that I have completed. And expert in using php, javascript, css, and other tools for web developers`;

export const EXPERIENCES = [
  {
    year: "Feb - Jul 2024",
    role: "Mobile Development Mentor",
    company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    description: `Being a contracted remote Mobile Development Learning Path Mentor with responsibilities to Control and helping the progress of the courses that students are working on by holding weekly meetings and communication, Provide training to students by holding training sessions with instructors`,
    technologies: ["Gmeet", "Discord","Kotlin", "Jetpack Compose"],
  },
  {
    year: "Sep 2023 - Jan 2024",
    role: "Backend Developer",
    company: "La.Maison Etc",
    description: `Produce database schema and ERD by designing and analyzing user requirements, Perform design to generate database table requirements, Create and generate APIs that can be integrated into the Android platform and website, and making Admin Content Management System`,
    technologies: ["Laravel", "MySQL","Postman"],
  },
  {
    year: "Jul - Aug 2023",
    role: "Backend Developer Intern",
    company: "GiNK Technology",
    description: `Produce database schema and ERD by designing and analyzing user requirements, Perform design to generate database table requirements, Create and generate APIs that can be integrated into the Android platform and website, and making Admin Content Management System`,
    technologies: ["Laravel", "MySQL","Postman"],
  },
  {
    year: "May - Jun 2023",
    role: "Android Developer",
    company: "KUMA Project",
    description: `Planning and analyzing user needs, Create an attractive Android interface for the KUMA Application, Create and connect logic for each action contained in the application, and Integrating Applications to API so that it can perform data processing`,
    technologies: ["Kotlin", "Retrofit","Material 3"],
  },
  {
    year: "Jul - Oct 2022",
    role: "Backend Developer",
    company: "ICOSITER ITERA",
    description: `Create a database schema and create database tables as needed, Create logic for registration of contestants, and Set the logic for each action on the website`,
    technologies: ["Laravel", "MySQL","PHP", "JS"],
  },
  {
    year: "Apr - Jul 2022",
    role: "Project Manager",
    company: "KembangOfficial",
    description: `Coordinate with clients regarding client needs that will be implemented on the website, budeget plan, and time schedule. Conduct discussions with team to carry out the division of tasks along with the timeline, and update progress to clients.`,
    technologies: ["Trello", "Word", "GMeet", "WordPress"],
  },
  {
    year: "Apr - Sep 2021",
    role: "Backend Developer",
    company: "PPLK ITERA",
    description: `Create database tables as needed, Create logic for each action on the website, and Connect each database table that is integrated with each other.`,
    technologies: ["Laravel", "MySQL","PHP", "JS"],
  },
  {
    year: "Jan - Mar 2019",
    role: "Website Developer Intern",
    company: "PT Bukit Asam",
    description: `Designing database schema and creating tables as needed, Create logic for each action contained on the website, and Integrating the employee satisfaction survey management website with the survey website`,
    technologies: ["PHP", "HTML5", "CSS", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "Cancer Detection",
    image: cancerdetect,
    description:
      "Application used to detect skin cancer through skin image detection",
    technologies: ["Kotlin", "TFlite", "CameraX", "Android Studio"],
    link: "https://github.com/rahmanpajri/cancer-detection/releases/download/v.1.0.0/app-debug.apk"
  },
  {
    title: "CarbonTrack Apps",
    image: carbontrack,
    description:
      "An application that is able to calculate exhaust emissions generated from mobile land vehicles.",
    technologies: ["Kotlin", "Google Maps API", "Firebase", "Android Studio"],
    link: "https://github.com/rahmanpajri/EmisiGas/releases/download/v.1.0.0/app-debug.apk",
  },
  {
    title: "KUMA (Koneksi untuk Memahami Anak Istimewa)",
    image: kuma,
    description:
      "An application that is able to understand the mood conditions of children with autism.",
    technologies: ["Kotlin", "Rest API", "MPAndroidChart", "Android Studio"],
    link: "https://github.com/rahmanpajri/Kuma-App/releases/download/v.1.0.0/app-debug.apk"
  },
  {
    title: "Foodnesian",
    image: foodnesian,
    description:
      "An application that allows you to select a food menu and view its details and prices.",
    technologies: ["Flutter", "VsCode"],
    link: "https://github.com/rahmanpajri/foodnesian"
  },
  {
    title: "Story App",
    image: storyapp,
    description:
      "An application that can be used to upload stories and view other people's stories",
    technologies: ["Kotlin", "JUnit", "Google Maps Api", "RestAPI", "Android Studio"],
    link: "https://github.com/rahmanpajri/github-user"
  },
  {
    title: "Github User",
    image: githubuser,
    description:
      "An application that lets you view other people's github users and see their details",
    technologies: ["Kotlin", "RestAPI", "Android Studio"],
    link: "https://github.com/rahmanpajri/github-user"
  },
  {
    title: "IDN Heroes",
    image: idnheroes,
    description:
      "An application that is able to see a list of hero names",
    technologies: ["Kotlin", "Jetpack Compose", "Android Studio"],
    link: "https://github.com/rahmanpajri/idn-heroes"
  },
  {
    title: "Movie App",
    image: movieapp,
    description:
      "An application used to view movie lists by genre and manage movies",
    technologies: ["Kotlin", "Firebase", "Android Studio"],
    link: "https://github.com/rahmanpajri/SIL-Project"
  },
  {
    title: "Laptop Price List",
    image: price,
    description:
      "Application that displays a list of laptops along with their specifications and prices",
    technologies: ["Kotlin", "Android Studio"],
    link: "https://github.com/rahmanpajri/laptop-price"
  },
  {
    title: "Employee Survey Management",
    image: ptba,
    description:
      "A website used to manage employee satisfaction survey results by quarter.",
    technologies: ["PHP", "MySQL", "Bootstrap", "AdminLte"],
    link: "https://github.com/rahmanpajri/Pengelolaan-Survei-Kepuasaan-Pegawai"
  },
  {
    title: "PPLK 2021 ITERA",
    image: pplk,
    description:
      "Website used for the activities of the Campus Environment Introduction Program",
    technologies: ["Laravel", "MySQL", "JS", "PHP"],
    link: "https://github.com/rahmanpajri/pplk-2021"
  },
  {
    title: "Kembang.id",
    image: kembang,
    description:
      "Became a Project manager on the development of the Website of a Flower Company engaged in Product / Service Solutions",
    technologies: ["Trello", "Gmeet", "Wordpress"],
    link: "https://kembang.id/"
  },
  {
    title: "ICoSITeR 2022 ITERA",
    image: icositer,
    description:
      "Website used for events International Conference on Science, Infrastructure Technology and Regional Development (ICoSITeR)",
    technologies: ["Laravel", "MySQL", "JS", "PHP"],
    link: "https://github.com/rahmanpajri/icositer2022"
  },
  {
    title: "Web Conference",
    image: webcon,
    description:
      "A landing page website that is used as an event web conference",
    technologies: ["HTML 5", "Bootstrap", "JS"],
    link: "https://github.com/rahmanpajri/Conference-Web"
  },
];

export const CONTACT = {
  phoneNo: "+62895620882104",
  email: "rahmanfajri.rf@gmail.com",
};
