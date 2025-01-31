import mockup from '../../public/assets/appMockup.jpg'
import MasonryLayout from "./masonryLayout.jsx";
import ProjectModel from "../model/projectModel.js";
import ProjectCard from "./project/projectCard.jsx";

const model = [
    new ProjectModel('Marvel Stickers Collection', 'Discover a web application built entirely with vanilla JavaScript, developed for a university exam.\n' +
        'This app allows users to collect, buy, and trade Marvel stickers.\n' +
        'The frontend is powered by a custom framework I created to ensure a smooth Single Page Application (SPA) experience, providing seamless navigation.\n' +
        'Enjoy an intuitive interface for managing your collection and engaging in trades with others.',
        '/assets/appMockup.jpg', 'https://github.com/MatteoMartinelliMM/afse', ['Javascript', 'Bootstrap', 'NodeJS', 'MongoDB'], false),
    new ProjectModel('Personal portfolio', 'Explore my portfolio built with Next.js, styled with Tailwind CSS and DaisyUI.\n' +
        'This responsive site highlights my skills, projects, and experience, offering smooth navigation and high performance.\n' +
        'Tailwind CSS and DaisyUI provide a customizable, consistent UI, making it a great way to showcase my work and technical expertise.',
        '/assets/appMockup.jpg', 'https://github.com/MatteoMartinelliMM/portfolio', ['NextJS', 'TailwindCSS', 'DaisyUI'], false),
    new ProjectModel('Team Management & Match Streaming', 'This Flutter-based app was developed to meet my personal needs for managing a football team, available on both mobile and desktop.\n' +
        'It covers everything from player convocations and individual stats to match streaming via OBS Studio, with custom graphics generated in real-time using FFmpeg.\n' +
        'The app also automates the creation of post-match video content in both vertical and horizontal formats.\n' +
        'While initially built for personal use, my goal is to refine and commercialize the app, offering it as a comprehensive tool for coaches, players, and content creators looking to streamline team management and video production.',
        '/assets/appMockup.jpg', undefined, ['Flutter', 'Bloc', 'Firebase', 'FFmpeg'], false),
    new ProjectModel('Trivia Escape', 'Explore a 2D space-themed trivia adventure!\n' +
        'Guide the ball through intricate mazes by answering questions to unlock paths.\n' ,
        '/assets/appMockup.jpg', undefined, ['Flutter', 'Bloc', 'NoSQL'], true),

]

function Projects() {
    return <div className="container mx-auto max-w-full">
        <MasonryLayout items={model.map(p => <ProjectCard project={p}></ProjectCard>)}/>
    </div>
}

export default Projects