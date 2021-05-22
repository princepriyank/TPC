import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import MyTitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Recruiters from "./pages/Recruiters/Recruiters.component";
import Highlights from "./pages/Highlights/highlights.component";
import Container from "react-bootstrap/Container";
import Stats from "./pages/Stats/Stats.component";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import FooterPanel from "./components/footer/footer.component";
import "./App.css";


function App() {
  return (
    <div className="App">
     <div className="App" style={{ position: "relative" }}>
      <MyCarousal />
      <MyTitleMessage />
      <MyNavbar />

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
        <Slide bottom duration={500}>
          <hr />
          <Highlights />
        </Slide>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Stats />
          </Fade>
        </Container>
      </div>
      <div>
      <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Recruiters />
          </Fade>
        </Container>
      </div>
      
        <Fade duration={500}>
          <hr />
          <FooterPanel />
        </Fade>
      
    </div>
    </div>
  );
}

export default App;
