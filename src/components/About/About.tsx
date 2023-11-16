import { Container } from "./styles";
import HarshitSingh from "../../assets/HarshitSingh.png";
import java from "../../assets/java.svg";
import springboot from "../../assets/springboot.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import redis from "../../assets/redis.svg";
import reactIcon from "../../assets/react-icon.svg";
import hibernate from "../../assets/hibernate.svg";
import mysql from "../../assets/mysql.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";


export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          Hi there! I'm Harshit, a Software developer with a strong commitment to crafting high-quality, scalable, and efficient software solutions.Leveraging a deep understanding of Java technologies and a keen eye for detail, I thrive on turning complex problems into elegant, user-friendly applications.
          With a skill set including Java, Springboot, Spring MVC, MySQL, C++, HTML, CSS, JavaScript and React.
          </p>
        </ScrollAnimation>
        <br></br>
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Work Experience</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft">
          <h3>Freecharge Payments Technologies Pvt. Ltd. </h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          I have done an Internship experience in Freecharge Payments Technologies Pvt. Ltd. , where I worked closely with seniors to develop RESTful APIs using Java by utilizing Springboot Framework to build and maintain backend systems. .I am eager to apply my skills in a dynamic work environment.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          My six months at Freecharge were a valuable learning experience that solidified my technical skills and collaborative mindset. I am confident that my dedication to producing clean, efficient code, coupled with my ability to work effectively in cross-functional teams, aligns well with company's commitment to excellence. </p>
       
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <ul>
          <li><p>I have done JUnit testing in KYC Service for Service and Controller classes andincreased the coverage of the Service from 22% to 70%.</p></li>
          <li><p>I have created APIs for detail verification of users, and for retrieving details fromcache, and makes it more efficient by 55% with the use of Redis, which is usedfor caching by reducing the response time to 10% of the overall request latency.</p></li>
        </ul>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={java} alt="Java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={springboot} alt="springboot" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={hibernate} alt="hibernate" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={mysql} alt="mysql" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={redis} alt="redis" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={HarshitSingh} alt="Harshit Singh" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
