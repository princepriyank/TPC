import React from "react";
import "./footer.style.css";
import Profile from "../../assets/img/tpo/tpo.jpg";
import Image from "react-bootstrap/Image";
const FooterPanel = () => {
  return (
    <div className="footer">
      <center><h1>Contact</h1>
      <h4 className="text-sub">Reach out to us via:</h4>
      <a  href="tel:3177594940">
      <i class="fas fa-phone-alt">   Phone: +91: 9090909090</i>
      </a><br/>
      <a href="mailto:someone@example.com">
      <i class="fas fa-envelope-open" >  Email: mishrapriyank17@gmail.com</i>
      </a><br/>
      <a href="linkedin.com">
      <i class="fab fa-linkedin">  Linkedin: placementnitp</i>
      </a><br/>
      <h2>Our Team</h2>
      
      <Image className="justify-content-end avatar" alt="profile" src={Profile} fluid  />
      <h4>Dr. Samrat Mukherji</h4><span>Professor – In charge,<br/>
Training And Placement Cell<br/>
email: samrat@nitp.ac.in</span>
      </center>
    </div>
  );
};

export default FooterPanel;
