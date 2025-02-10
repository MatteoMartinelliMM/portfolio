import './App.css'
import React, {useState, useEffect} from "react";
import Navbar from "./components/navbar.jsx";
import Experience from "./components/experience.jsx";
import Knowledge from "./components/knowledge.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contact.jsx";
import FloatingActionButton from "./components/floatingActionButton.jsx";

function App() {
    const [isButtonVisible, setIsButtonVisibile] = useState(false)

    const checkScroll = () => {
        const homeSection = document.getElementById("home")
        const homeHeight = homeSection ? homeSection.offsetHeight : 0
        setIsButtonVisibile(window.scrollY > homeHeight *0.35)
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScroll)

        return () => {
            window.removeEventListener("scroll", checkScroll)
        }
    }, []);

    return (
        <>
            <Navbar></Navbar>
            <div className="flex flex-col min-h-screen justify-between relative">
                <div className="main-body flex-grow">
                    <section id="home" className="min-h-screen flex items-center justify-center  ">
                        <h2>HOME</h2>
                    </section>
                    <section id="experience"
                             className="min-h-screen flex items-center justify-center  scroll-mt-20 mt-60">
                        <Experience></Experience>
                    </section>
                    <section id="knowledge" className="min-h-screen flex items-center justify-center  mt-24">
                        <Knowledge></Knowledge>
                    </section>
                    <section id="projects"
                             className="min-h-screen flex items-center justify-center  scroll-mt-20 mt-60">
                        <Projects></Projects>
                    </section>
                </div>
                <section id="contact" className="w-screen  mt-60">
                    <Contact></Contact>
                </section>
            </div>
            <FloatingActionButton className={`${isButtonVisible ? "block" : "hidden"}`}></FloatingActionButton>
        </>
    )
}

export default App
