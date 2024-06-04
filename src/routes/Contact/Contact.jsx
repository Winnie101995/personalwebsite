import "./Contact.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import emailjs from '@emailjs/browser';
import { useRef } from "react";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css';

export default function Contact() {
    const form = useRef();
    // const showToastMessageSuccess = () => {
    //     toast.success("Message Successfully Sent!", {
    //       position: toast.POSITION.TOP_RIGHT,
    //       className: "toast-message",

    //     });
    //   };    

    //   const showToastMessageNotSuccess= () => {
    //     toast.error("Message Not Successfully Sent", {
    //       position: toast.POSITION.TOP_RIGHT,
          
    //     });
    //   };

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_a90pldg', 'template_v57dvhu', form.current, {
          publicKey: 'e0gS0tDBOAtNkiYKD',
        })
        .then(
          () => {
           

            console.log('SUCCESS!')
            // showToastMessageSuccess()
            alert('Message Sent Successfully!')
            setTimeout(() => {
                window.location.reload(); // Refresh the page after a short delay
              }, 2000); // Adjust the delay as needed

          },
          (error) => {
            console.log('FAILED...', error.text);
            // showToastMessageNotSuccess()
          },
        );
    };
    return (
        <main>
            <Navbar/>
            <div className="contactpage">
            <h1 className="heading">Contact <span> Me </span></h1>
<form ref={form} onSubmit={sendEmail}>
    <div className="input-group">
        <div className="input-box">

            <input type="text" name="user_name"placeholder="Full Name"></input>
            <input type="email" name="user_email"placeholder="Email"></input>

        </div>
        <div className="input-box">

        <input type="number" placeholder="Phone Number"></input>
        <input type="text" placeholder="Subject"></input>

        </div>

    </div>
    <div className="input-group">
        <textarea name="message" id="" cols={30} rows={10}  placeholder="Your Message"></textarea>
        <input type="submit" value="Send Message" className="btn"></input>
        {/* <ToastContainer /> */}

</div>

</form>
            </div>

            <Footer/>

        </main>
        )
}
