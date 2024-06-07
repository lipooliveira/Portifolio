import { useState, useEffect } from "react";
import "./App.css";
import perfil from "./pfl.jpg";

import { FaGithub, FaLinkedin, FaDiscord, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { GrLanguage } from "react-icons/gr";

import en from './lang/en'
import pt from "./lang/pt";

function App() {
  const [language, setLanguage] = useState(en);

  const updateLanguage = () => {
    setLanguage((previousState) => {
      if (previousState === en) {
        return pt;
      } else {
        return en;
      }
    });
  }

  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }

  function switchMenu(){
    const dropdown = document.querySelector('.dropdown-content');
    if(dropdown){
      dropdown.classList.toggle('show');
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      const dropdown = document.querySelector('.dropdown-content');
      const button = document.querySelector('.dropdown-button');
      
      if (dropdown && !dropdown.contains(event.target) && button && !button.contains(event.target)) {
        dropdown.classList.remove('show');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('scroll', handleClickOutside);
  }, []);

  return (
  <>
    <div className="main">
      <nav className="navigation dropdown">
        <button className="dropdown-button" onClick={() => switchMenu()}>
          Menu
        </button>
        <ul className="dropdown-content">
          <li>
            <a onClick={() => scrollToSection('about')}>
              {language.header.buttons.about}
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('skills')}>
              {language.header.buttons.skills}
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('projects')}>
              {language.header.buttons.projects}
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('contact')}>
              {language.header.buttons.contact}
            </a>
          </li>
        </ul>
        <div className="btnright">
          <button onClick={updateLanguage}>
            <GrLanguage/> {language.lang === "en" ? "English" : "Português"}
          </button>
        </div>
      </nav>

      
      <main>
        <section id="about">
          <header>
            <h1>{language.about.title}</h1>
          </header>
          <h2>{language.about["sub-title"]}</h2>
          <div className="profile">
            <div>
              <img src={perfil} alt="Felipe - Full Stack Developer" />
            </div>
            <div>
              <h3>Felipe Oliveira</h3>
              <p>
                {language.about.description1}
              </p>
            </div>
          </div>
          <p>
            {language.about.description2}
          </p>
        </section>
        <section id="skills">
          <div className="skills">
            <div className="hard skill">
              <h2>{language.skills.hardskills.title}</h2>
              <ul className="skills-list">
                <li>{language.skills.hardskills.one}</li>
                <li>{language.skills.hardskills.two}</li>
                <li>{language.skills.hardskills.three}</li>
                <li>{language.skills.hardskills.four}</li>
                <li>{language.skills.hardskills.five}</li>
              </ul>
            </div>
            <div className="soft skill">
              <h2>{language.skills.softskills.title}</h2>
              <ul className="skills-list">
                <li>{language.skills.softskills.one}</li>
                <li>{language.skills.softskills.two}</li>
                <li>{language.skills.softskills.three}</li>
                <li>{language.skills.softskills.four}</li>
                <li>{language.skills.softskills.five}</li>
              </ul>
            </div>
          </div>
          <div className="stacks">
            <FaJava fontSize={45}/>
            <IoLogoJavascript fontSize={50}/>
            <BiLogoTypescript fontSize={60}/>
            <FaNodeJs fontSize={50}/>
            <FaReact fontSize={50}/>
            <SiMysql fontSize={50}/>
          </div>

        </section>
        <section id="projects">
          <h2>{language.projects.title}</h2>
          <p>{language.projects.notAvaliable.description}</p>
          <a href="https://github.com/lipooliveira" target="_blank" rel="noopener noreferrer">
            {language.projects.notAvaliable.github}
          </a>
        </section>

        <section id="contact">
          <h2>{language.contact.title}</h2>
          <p>{language.contact.description}</p>
          <form className="contact-form" method="POST" action="https://lipotut.xyz/message">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows={5} required></textarea>

            <button type="submit">{language.contact.btnSend}</button>
          </form>
          <div className="links">
            <a href="https://linkedin.com/in/lipooliveira"><FaLinkedin fontSize={30}/></a>
            <a href="https://github.com/lipooliveira"><FaGithub fontSize={30}/></a>
            <a href="https://discord.gg/pbBmyW4GH2"><FaDiscord fontSize={30}/></a>
          </div>
        </section>

      </main>
      <footer>
        <p>© 2024 Felipe Oliveira. All rights reserved.</p>
      </footer>
      

    </div>
  </>
)}

export default App