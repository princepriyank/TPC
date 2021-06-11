import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import MyTitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Director from "./pages/Director/director.component";
import TPO from "./pages/TPO/TPO.component";
import Recruiters from "./pages/Recruiters/Recruiters.component";
import Highlights from "./pages/Highlights/highlights.component";
import Container from "react-bootstrap/Container";
import Stats from "./pages/Stats/Stats.component";
import Seat from "./pages/Seat/Seat.component";
import Objective from "./pages/Objective/Objective.component";
import Students from "./pages/Students/Students.component"
import Procedure from "./pages/Procedure/Procedure.component"
import FAQs from "./pages/FAQs/Faqs.component"
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import FooterPanel from "./components/footer/footer.component";
import "./App.css";


function App() {
  return (
    <div className="App">
     <div className="App" style={{ position: "relative" }}>
     <MyNavbar />
      <MyCarousal />
      <MyTitleMessage />
      

      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
          <hr />
         
          <div>
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <Director/>
              </Fade>
            </Container>
          </div>
          <div></div>
          <div>
                <TPO/>

          </div>
          <div>
              <Fade duration={500}>
                <Objective />
              </Fade>
          </div>
          <div>
       
       <Procedure />
   
   </div>
   <div>
          <Fade duration={500}>
            <Students />
          </Fade>
      </div>
          <Highlights />
        
      </div>

    
   <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Seat />
          </Fade>
        </Container>
  
      <div>
          <Fade duration={500}>\

            <Stats />
          </Fade>
      </div>
      <div>
      <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Recruiters />
          </Fade>
        </Container>
      </div>
     
      
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <FAQs />
          </Fade>
        </Container>
      </div>
          <hr />
          <FooterPanel />
      
    </div>
    </div>
  );
}

export default App;
