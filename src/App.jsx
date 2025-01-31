import './App.css'
import Navbar from "./components/navbar.jsx";
import Experience from "./components/experience.jsx";
import Knowledge from "./components/knowledge.jsx";
import Projects from "./components/projects.jsx";

function App() {

    return (
        <>
            <Navbar></Navbar>
            <div>
                <section id="home" className="h-screen flex items-center justify-center">
                    <h2 className="text-4xl">HOME</h2>
                </section>
                <section id="experience">
                    <Experience></Experience>
                </section>
                <section id="knowledge" className="h-screen flex items-center justify-center">
                    <Knowledge></Knowledge>
                </section>
                <section id="projects" className="h-screen flex items-center justify-center">
                    <Projects></Projects>
                </section>
                <section id="contact" className="h-screen flex items-center justify-center">
                    <h2 className="text-4xl">CONTACT</h2>
                </section>
            </div>
        </>
    )
}

export default App
