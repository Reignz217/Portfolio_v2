import { Mail, PhoneOutgoing,MapPin } from "lucide-react"
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {

    const form = useRef();
    const [result, setResult] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_PUBLIC_KEY
        )
        .then(() => {
            setResult('Message sent successfully!');
            setError('');
            form.current.reset();
        }).catch((err) => {
            console.error(err);
            setError('Failed to send message. Please try again.');
            setResult('');
        }).finally(() => {
            setLoading(false);
        });
    }

  return (
    <section id="contact"  className="flex flex-col justify-center items-center md:gap-10 gap-5 my-10 px-5 md:px-0 scroll-mt-20">
        <h4 className="lg:text-5xl md:text-3xl text-xl">Get In Touch</h4>
        <div className="flex lg:flex-row flex-col justify-center lg:gap-20 gap-10">
            <div className="lg:w-1/2 flex flex-col gap-5">
                <h2 className="lg:text-3xl md:text-3xl text-lg name">Let's Talk</h2>
                <p className="lg:text-2xl md:text-xl">Available for freelance opportunities or open to collaborating on personal projects that align with my expertise and professional goals.</p>
                <p className="lg:text-2xl md:text-xl flex gap-5 items-center"><Mail /> renzharveysunico17@gmail.com</p>
                <p className="lg:text-2xl md:text-xl flex gap-5 items-center"><PhoneOutgoing /> 09687283496</p>
                <p className="lg:text-2xl md:text-xl flex gap-5 items-center"><MapPin /> Iloilo, Philippines</p>
            </div>
            <form  ref={form} onSubmit={sendEmail} className="lg:w-1/2 w-full flex flex-col gap-5">
                {result && <div className="text-green-600 font-semibold">{result}</div>}
                {error && <div className="text-red-600 font-semibold">{error}</div>}
                <div className="flex flex-col">
                    <label htmlFor="name" className="md:text-xl mb-3">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name='name' 
                        placeholder="Enter Your Name" 
                        className="bg-gray-700 rounded-xl md:px-5 md:py-3 px-3 py-2 outline-none focus:border focus:border-[#00ADB5]"
                        required 
                        autoComplete="off">
                    </input>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="md:text-xl mb-3">Email:</label>
                    <input 
                        type="email" 
                        id="email"
                        name='email_from' 
                        placeholder="Enter Your Email" 
                        className="bg-gray-700 rounded-xl md:px-5 md:py-3 px-3 py-2 outline-none focus:border focus:border-[#00ADB5]" 
                        required 
                        autoComplete="off">
                    </input>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message" className="md:text-xl mb-3">Message:</label>
                    <textarea 
                        placeholder="Message here..." 
                        id="message" 
                        name='message' 
                        className="bg-gray-700 rounded-xl px-5 py-3 md:h-56 h-40 outline-none focus:border focus:border-[#00ADB5]" 
                        required 
                        autoComplete="off">
                    </textarea>
                </div>
                <div className="flex justify-center">
                   <button className="bg-[#00ADB5] md:px-8 px-5 py-3 text-sm rounded-3xl cursor-pointer button" disabled={loading}>{loading ? 'Sending...' : 'Send'}</button>
                </div>
            </form>
        </div>
    </section>
  )
}
