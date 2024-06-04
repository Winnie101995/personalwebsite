import "./About.css"
import {Container, Row, Col} from "react-bootstrap";
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../../assets/meter1.svg'
import meter2 from '../../assets/meter2.svg'
import meter3 from '../../assets/meter3.svg'
export default function About() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
    <main>
        <Navbar/>
        <div className="aboutpage">
        <h2>Skills</h2>

<div className="skillstext-container">


        <p>A masters in computer science holder who thrives in supportive, collaborative environment. 
            I am eager to contribute to a dynamic team and gain experience which contributes positively to my professional journey.</p>
        </div>
        <div className="skills-container" id="skills">

            <Container>

                <Row>
                    <Col>
                    <div className="skills-bx">
                    <Carousel responsive={responsive} infinite={true} className="skills-slider">
                        <div className="skills-item">
                            <img src={meter1} alt="Image"/>
                            <h5>Python</h5>
                        </div>
                        <div className="skills-item">
                            <img src={meter2} alt="Image"/>
                            <h5>Java</h5>
                        </div>
                        <div className="skills-item">
                            <img src={meter3} alt="Image"/>
                            <h5>ReactJS</h5>
                        </div>
                        <div className="skills-item">
                            <img src={meter1} alt="Image"/>
                            <h5>FME</h5>
                        </div>
                        <div className="skills-item">
                            <img src={meter1} alt="Image"/>
                            <h5>HTML/CSS/Javascript</h5>
                        </div>
                        <div className="skills-item">
                            <img src={meter3} alt="Image"/>
                            <h5>Apache Spark & Hadoop</h5>
                        </div>
                        <div className="skills-item">
                            <img src={meter2} alt="Image"/>
                            <h5>SQL</h5>
                        </div>
                        <div className="skills-item">
                            <img src={meter2} alt="Image"/>
                            <h5>Git</h5>
                        </div>
                        <div className="skills-item">
                            <img src={meter1} alt="Image"/>
                            <h5> Advanced Machine Learning</h5>
                        </div>
                        <div className="skills-item">
                            <img src={meter2} alt="Image"/>
                            <h5>C++</h5>
                        </div>
                        <div className="skills-item">
                            <img src={meter1} alt="Image"/>
                            <h5>Agile and SCRUM Methodology</h5>
                        </div>
                        <div className="skills-item">
                            <img src={meter1} alt="Image"/>
                            <h5>Bash Scripting</h5>
                        </div>
                        <div className="skills-item">
                            <img src={meter1} alt="Image"/>
                            <h5>Tableau & PowerBi</h5>
                        </div>
                    </Carousel>
                    </div>
                    </Col>

                </Row>
            </Container>


        </div>

        </div>
        <Footer/>
    </main>
    )
}
