// pages/index.tsx
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { FaLinkedin, FaGithub, FaInstagram, FaTelegram, FaYoutube, FaCode, FaDownload, FaPinterest, FaPhoneAlt, FaRegImages, FaVideo, FaUser, FaBriefcase, FaFolder, FaAward, FaCertificate, FaSeedling, FaMapPin, } from 'react-icons/fa';
import { FaPython, FaHtml5, FaCss3, FaCloud,  } from 'react-icons/fa';
import { SiFlutter, SiFigma, SiFlask, SiJavascript, SiGo, SiLeetcode, SiCodeforces, SiHellofresh } from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay, FreeMode, } from 'swiper/modules';
import {FaEnvelope } from 'react-icons/fa';

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name}) => {
  return (
    <div className={`${styles.skillCard} flex flex-col items-center text-center space-y-2`}>
      <div className="icon p-3 rounded-full">{icon}</div>
      <h4 className="text-lg font-semibold">{name}</h4>
    </div>
  );
};

const skills = [
  { icon: <FaPython size={25}/>, name: 'Python'},
  { icon: <FaCode size={25}/>, name: 'Data Structures & Algorithms'},
  { icon: <SiGo size={25}/>, name: 'Go'},
  { icon: <SiFlutter size={25}/>, name: 'Flutter'},
  { icon: <FaCloud size={25}/>, name: 'Cloud Architecture'},
  { icon: <FaHtml5 size={25}/>, name: 'HTML'},
  { icon: <FaCss3 size={25}/>, name: 'CSS'},
  { icon: <SiFlask size={25}/>, name: 'Flask'},
  { icon: <SiFigma size={25}/>, name: 'Figma'},
  { icon: <SiJavascript size={25}/>, name: 'JavaScript'},
];



const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.codeLinks}>
          <a href="https://www.linkedin.com/in/samrawit-dawit-59a5b4250/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/SamrawitDawit" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://leetcode.com/u/SamrawitDawit/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
          <a href="https://codeforces.com/profile/SamrawitDawit" target="_blank" rel="noopener noreferrer"><SiCodeforces /></a>
      </div>
      <div className={styles.socialLinks}>
      <a href="https://www.instagram.com/samrawit__dawit/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://t.me/Samaritan_lady" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
          <a href="https://www.pinterest.com/samrikdawit/" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
      </div>
         
  
    <header className={styles.header}>
      <div className={styles.logo}>
      <Image
            src="/logo.png" 
            alt="logo"
            width={70}
            height={50}
          />
      </div>
      <nav className={styles.navLinks}>
        <Link href="#about"><FaUser/></Link>
        <Link href="#skills"><FaCode/></Link>
        <Link href="#experience"><FaBriefcase/></Link>
        <Link href="#projects"><FaFolder/></Link>
        <Link href="#certificates"><FaCertificate/></Link>
        <Link href="#footer"><FaEnvelope/></Link>
      </nav>
    </header>
    <section className={styles.hero}>
  <div className={styles.textContainer}>
    <p className={styles.hello}>Hey</p>
    <h1 className={styles.title}>
      I’m <span className={styles.highlight}>Samrawit Dawit</span>
    </h1>
    <p className={styles.typing}>
      Software Engineering Student at <span className={styles.school}><a href="https://www.aau.edu.et/blog/addis-ababa-university-scales-up-global-ranking/#:~:text=Addis%20Ababa%20University%20(AAU)%20emerged,553rd%20in%20the%20world." target="_blank" rel="noopener noreferrer">Addis Ababa University</a> </span><strong>(Ethiopia)</strong>.
    </p>
    <a href="https://flowcv.com/resume/j81stadn8c" target="_blank" rel="noopener noreferrer"><button className={styles.resumeButton}>Resume</button></a>
  </div>
  <div>
    <Image
      src="/samri.png" 
      alt="Samrawit Dawit"
      width={350}
      height={350}
      className={styles.profileImage}
    />
  </div>
</section>

      <section id="about" className={styles.aboutSection}>
      <h2 className={styles.aboutTitle}>About Me</h2>
      <p className={styles.aboutText}>
      Hi! I’m Samrawit "Samri"—a driven Software Engineering student at Addis Ababa University, specializing in full-stack development and cloud solutions. With a foundation in data structures and algorithms, honed by solving 600+ LeetCode problems and a year with A2SV, I excel in building optimized, high-performance systems.
      </p>
      <p className={styles.aboutText}>
      Now, I’m diving into AI to create ethical, impactful tools that address real-world challenges for vulnerable communities. Outside of work, I enjoy light-hearted movies, learning Spanish, and catching up with friends. I'm excited to explore new opportunities where I can contribute to meaningful projects and keep growing.
      </p>
    </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            icon={skill.icon}
            name={skill.name}
          />
        ))}
      </div>
    </section>

    <section id="experience" className={styles.experienceSection}>
  <h2 className={styles.experienceTitle}>Experience</h2>
  <div className={styles.experienceGrid}>
    <div className={styles.experienceCard}>
      <Image
        src="/a2sv.png" 
        alt="A2SV"
        width={130}
        height={130}
        className={styles.organizationImage}
      />
      <div className={styles.caption}>
        <h3>African to Silicon Valley (A2SV)</h3>
        <p>Head of Education</p>
        <a
          href="https://a2sv.org" 
          target="_blank"
          rel="noopener noreferrer"
          className={styles.organizationLink}
        >
          Visit A2SV
        </a>
      </div>
    </div>
    <div className={styles.experienceCard}>
      <Image
        src="/ethioware.jpg" 
        alt="Ethioware"
        width={130}
        height={130}
        className={styles.organizationImage}
      />
      <div className={styles.caption}>
        <h3>Ethioware Edtech initiative</h3>
        <p>Mobile App developer intern</p>
        <a
          href="https://ethioware.org/" 
          target="_blank"
          rel="noopener noreferrer"
          className={styles.organizationLink}
        >
          Visit Ethioware
        </a>
      </div>
    </div>
    <div className={styles.experienceCard}>
      <Image
        src="/RTC.png" 
        alt="Rewriting The Code"
        width={130}
        height={130}
        className={styles.organizationImage}
      />
      <div className={styles.caption}>
        <h3>Rewriting The Code (RTC)</h3>
        <p>Student fellow</p>
        <a
          href="https://rewritingthecode.org/" 
          target="_blank"
          rel="noopener noreferrer"
          className={styles.organizationLink}
        >
          Visit RTC
        </a>
      </div>
    </div>

    <div className={styles.experienceCard}>
      <Image
        src="/AAiT.jpg" 
        alt="SiTE"
        width={130}
        height={130}
        className={styles.organizationImage}
      />
      <div className={styles.caption}>
        <h3>School of Information Technology and Engineering
        </h3>
        <p>Full Stack developer intern</p>
        <a
          href="http://www.aait.edu.et/school-information-technology-engineering-site" 
          target="_blank"
          rel="noopener noreferrer"
          className={styles.organizationLink}
        >
          Visit SiTE
        </a>
      </div>    
    </div>
    <div className={styles.experienceCard}>
      <Image
        src="/iCog.jpg" 
        alt="iCogLabs"
        width={130}
        height={130}
        className={styles.organizationImage}
      />
      <div className={styles.caption}>
        <h3>iCog Labs
        </h3>
        <p>AI research intern</p>
        <a
          href="https://icog-labs.com/" 
          target="_blank"
          rel="noopener noreferrer"
          className={styles.organizationLink}
        >
          Visit iCog
        </a>
      </div>
      </div>
  </div>
</section>




<section id="projects" className={styles.projectsSection}>
      <h2 className={styles.projectsTitle}>
        <span className={styles.worksText}>Works</span> My projects
      </h2>
      <Swiper
        spaceBetween={30} 
        slidesPerView={3} 
        loop={true} 
        autoplay={{
          delay: 1.5, 
          pauseOnMouseEnter: true,
        }}
        speed={4000} 
        freeMode={true}
        modules={[Navigation, Pagination, Autoplay, FreeMode]}
        className={styles.projectsSlider}
      >

        {/* Project Card 1 */}
        <SwiperSlide>
          <div className={styles.projectCard}>
            <Image src="/chuchAI.png" alt="Chuch AI" width={315} height={480} className={styles.projectImage} />
            <div className={styles.overlay}>
              <h3>Chuch AI</h3>
              <p>An educational chatbot designed to engage kids with fun math and general knowledge questions while providing feedback and telling stories.</p>
              <div className={styles.projectLinks}>
                <a href="https://chuch-ai.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                </a>
                <a href="https://github.com/SamrawitDawit/ChuchAI" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="ChuchAIDemoPage" target="_blank" rel="noopener noreferrer">
                  <FaVideo />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.projectCard}>
            <Image src="/Memoire.jpg" alt="Memoire" width={250} height={500} className={styles.projectImage} />
            <div className={styles.overlay}>
              <h3>Memoire</h3>
              <p>a journaling app designed to help users reflect, boost creativity, and improve mental well-being with features like mood tracking, entry lock, image entries, and daily reminders and quotes.</p>
              <div className={styles.projectLinks}>
              <a 
                  href="/Memoire.apk" 
                  download 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.downloadLink}
                >
                  <FaDownload />
                </a>
                <a href="https://github.com/SamrawitDawit/Memoire" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="MemoireDemoPage" target="_blank" rel="noopener noreferrer">
                  <FaRegImages />
                </a>
                
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.projectCard}>
            <Image src="/Safe_haven_logo.png" alt="Safe Haven" width={315} height={480} className={styles.projectImage} />
            <div className={styles.overlay}>
              <h3>Safe Haven</h3>
              <p>"Empowering Survivors with Secure Support" A robust, secure platform designed for survivors to report incidents anonymously, connect with counselors, and access educational content. Focused on protecting user data with strong encryption and enhancing community well-being.</p>
              <div className={styles.projectLinks}>
                <a href="https://github.com/SamrawitDawit/Safe-Haven" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.projectCard}>
            <Image src="/kendilPharma.png" alt="Kendil Pharma" width={315} height={480} className={styles.projectImage} />
            <div className={styles.overlay}>
              <h3>Kendil Pharma</h3>
              <p>A mobile app that helps Pharmacists manage their medications, and allows their customers to order medicine</p>
              <div className={styles.projectLinks}>
                <a href="https://github.com/SamrawitDawit/flutter-2024-Kendil-Pharma" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="KendilPharmaDemoPage" target="_blank" rel="noopener noreferrer">
                  <FaRegImages />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        </Swiper>
      </section>


    

{/* Certificates Section */}
<section id="certificates" className={styles.awardsSection}>
  <h2 className={styles.awardsTitle}>
    <span className={styles.awardsHighlight}>Certifications</span> & Achievements
  </h2>
  <div className={styles.awardsBubbles}>
    {/* Certificate Bubbles */}
    <div className="certificate">
    <div className={styles.bubble}>
      <Image src="/aws.png" alt="AWS Certification" width={155} height={130} />
    </div>
    <div className={styles.projectLinks}>
    <a href="https://www.credly.com/badges/940ea66b-2910-4253-b2f8-5352b57056aa/linked_in_profile" target="_blank" rel="noopener noreferrer" className={styles.certLink}>
      <FaExternalLinkAlt />
      </a>
    </div>
    </div>
    
    <div className="certificate">
    <div className={styles.bubble}>
      <Image src="/cisco.png" alt="Cisco Certification" width={120} height={100} />
    </div>
    <div className={styles.projectLinks}>
    <a href="https://www.credly.com/badges/918f9372-2c7f-42c3-89dd-f329b95017bc/linked_in_profile" target="_blank" rel="noopener noreferrer" className={styles.certLink}>
      <FaExternalLinkAlt />
      </a>
    </div>
    </div>
    
  </div>
</section>


      <footer id="footer" className={styles.footer}>
      {/* Curved lines */}
      <div className={styles.curves}>
        <div className={styles.curveYellow}></div>
        <div className={styles.curveOrange}></div>
      </div>

      {/* Name and social links */}
      <div className={styles.content}>
        <h3 className={styles.name}>Samrawit Dawit</h3>
        <h4 className="py-3">
        <FaPhoneAlt /> +251-984-91-34-83
        </h4>
        <h4>
        <FaEnvelope /> samrikdawit@gmail.com
        </h4>
        <p className={styles.copyright}>
          © 2024 All rights reserved.
        </p>
      </div>
    </footer>
    </div>
  );
};

export default Home;

