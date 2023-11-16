import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>If there is any addition information required. Please let me know.</p>
        <p>Feel free to contact me.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:sharshit2306@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:sharshit2306@gmail.com">sharshit2306@gmail.com</a>
        </div>
        {/* <div>
        <a href="tel:+917376515044"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+917376515044">(+91) 7376515044</a>
        </div>   */}
      </div>
      {/* <Form></Form>  */}
    </Container>
  )
}