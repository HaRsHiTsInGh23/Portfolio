import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

  

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/HaRsHiTsInGh23/WorkingBankSystem_Backend" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Working Bank System</h3>
              <p>
              It is basically a working banking system, which contains 8 APIs having different APIs for CRUD Operations with debit and credit APIs. I have also performed Junit testing of each API in the project and cover 90% lines of the code.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Java</li>
                <li>Springboot</li>
                <li>MySQL</li>
                <li>Postman</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/HaRsHiTsInGh23/Users_CommentManagement" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>User_CommentManagement</h3>
              <p>
              This is an application which deals with the users and their comments database.
              This is the main application class from where the application starts to run.
              It has two tables in the database :
              users_api : u_id,commentFrom,commentTo
              comment: c_id, message, date, postedByUserId
              I have created two API's :
              To add user with their message.
              To get All the message given to a particular user.
              I have Covered all the validation checks on Name, Date , etc.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Java</li>
                <li>Springboot</li>
                <li>MySQL</li>
                <li>Postman</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://harshitsingh23.github.io/FreshLook2022/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>freshLook_2023- Clothing Store</h3>
              <p>
              This webpage is a clothing website, where it actually shows the clothing items for '23 fresh year. This helps to keep you up to date with latest style and fashion. And helps you to keeps the track of your orders.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}