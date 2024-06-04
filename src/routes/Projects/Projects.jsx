import "./Projects.css"
import { Container, Row, Col, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import Nav from 'react-bootstrap/Nav';
import img from '../../assets/project1.png';
import img2 from '../../assets/project2.png';
import img3 from '../../assets/project3.png';
import img4 from '../../assets/project4.png';
import img5 from '../../assets/project5.png';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import TrackVisibility from 'react-on-screen';
export default function Projects() {
    const projects_one = [
        {
          title: "Asteroid Game",
          description: "Developed modern reinterpretation of classic arcade game using JavaFX",
          imgUrl: img,
        },
        {
          title: "AdVantage",
          description: "AdVantage aims to streamling the OOH billboard advertising process, by leveraging Geographical Information System (GIS) data and advanced ML techniques.",
          imgUrl: img2,
        },
    
        {
            title: "Dublin Bikes",
            description: "Web based application to assist users in real-time bike station monitoring and trip planning in Dublin",
            imgUrl: img3,
          },
    
      ];
      const projects_two = [

  
      {
        title: "Machine Learning: Robo Racer",
        description: "Reinforcement Machine Learning technique to train a simple self-driving racing car OpenAI Gym Racing environment",
        imgUrl: img4,
      },
      {
        title: "Machine Learning Fatigue Dectection",
        description: "Explores Advanced Machine Learning Techniques to classify time series data",
        imgUrl: img5,
      },
    ]
    return (
        <main>
            <Navbar/>
            <section className="project" id="projects">
<Container>

    <Row>

        <Col size={12}>
        <TrackVisibility>
        {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
        <h2>Projects</h2>
        {/* <p> </p> */}
        <Tab.Container id="projects-tabs" defaultActiveKey="first">

        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Software Engineering</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Data and Machine Learning</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Cybersecurity</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects_one.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects_two.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Coming soon...</p>
                    </Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>
                  </div>}
            </TrackVisibility>
        </Col>
    </Row>
</Container>


            </section>
            <Footer/>

        </main>
        )
}
