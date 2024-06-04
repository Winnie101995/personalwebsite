'use client';

import "./Homepage.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { useTypewriter} from "react-simple-typewriter"
import { Link } from "react-router-dom"
import profileimg from '../../assets/profileimg.jpg'
import { BackgroundBeams } from "../../components/ui/background-beams";
import { FaDownload } from "react-icons/fa6";
import winniecv from '../../assets/woimafidonCV.pdf'
export default function Homepage() {
    const [typeEffect] = useTypewriter({
        words: ['React Dev', 'Data Analyst', 'ML Engineer','SOC Analyst'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 100
     })
    return (

    <main>
<Navbar/>
        <div className="homepage">
        <div className="background-beams">
          <BackgroundBeams />
        </div>
        <div className="homepage-photo"><img alt="profileImage" src={profileimg}/></div>
        <div className="homepage-content-container"> 
       
        <p>Hi, I'm Winnie.</p>
        <h1 className="moving-text">A <span>{typeEffect}</span></h1>
        <div className="btn-container">
            <Link to="/projects" className="btn">Projects</Link>
            <a className="btn-light" target="_blank" href={winniecv}> <FaDownload /> Resume</a>
            
        </div>

        </div>

        </div>

<Footer/>
    </main>


    )
}