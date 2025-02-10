import 'react'
import TimelineIcon from "./timeline/timelineIcon.jsx";
import TimelineElement from "./timeline/timelineElement.jsx";
import {useEffect, useRef, useState} from "react";

function attachListners(listRef, setLineHeight) {

}

function Experience() {
    const listRef = useRef(null)
    const [lineHeight, setLineHeight] = useState(0);

    useEffect(() => {
        const items = listRef.current?.querySelectorAll('li')
        if (!items) return

        const obs = new IntersectionObserver(
            (entries) => {
                const maxBottom = entries.reduce((max, entry) => entry.isIntersecting ?
                        Math.max(max, entry.target.getBoundingClientRect().bottom) : max
                    , lineHeight)
                console.log(`maxBottom is ${maxBottom} `)
                if (listRef.current) {
                    const ulTop = listRef.current.getBoundingClientRect().top
                    console.log(`ulTop is ${ulTop} `)
                    setLineHeight(maxBottom - ulTop)
                }
            },
            {threshold:0}
        )
        items.forEach((i) => obs.observe(i))
        return () => items.forEach(i => obs.unobserve(i))
    }, []);
    return <div>
        <ul ref={listRef}
            className="overflow-hidden transition-all duration-700 ease-in-out timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
            style={{maxHeight: `${lineHeight}px`}}
        >
            <li>
                <TimelineIcon work={false}></TimelineIcon>
                <TimelineElement time="2016-2018" title="Bachelor's Degree in Computer Science @Unimi">
                    During my time at the University of Milan (Unimi), I pursued a Bachelor's degree in Computer
                    Science,
                    developing a solid foundation in key areas of the field such as algorithms, data structures,
                    programming,
                    operating systems, and databases. Alongside my studies, I worked full-time,
                    which limited the time I could fully dedicate to university. As a result,
                    I decided to pause my studies to focus on my professional growth and career development.
                    This decision allowed me to gain valuable hands-on experience in software development,
                    which has been instrumental in shaping my technical skills.
                </TimelineElement>
                <hr/>
            </li>
            <li>
                <hr/>
                <TimelineIcon></TimelineIcon>
                <TimelineElement left={false} time="2018-2020" title="Android developer @DSGroup">
                    During this time, I worked on a B2B project for Poste Italiane, collaborating with designers,
                    backend developers,
                    and analysts to find the best solutions. This experience allowed me to work with both legacy and
                    modern approaches to Android development.
                    On the legacy side, I worked with Java, MVC, MVP, SQLite, and Room on devices running older versions
                    of the operating system.
                    On the other hand, I also gained experience with newer technologies such as Android Jetpack, Kotlin,
                    MVVM, LiveData, Room, and Retrofit,
                    working on more innovative solutions. Additionally, I was responsible for implementing both UI and
                    non-UI tests
                    (including unit tests and integration tests), ensuring the quality and reliability of the
                    applications we developed.
                </TimelineElement>
                <hr/>
            </li>
            <li>
                <hr/>
                <TimelineIcon></TimelineIcon>
                <TimelineElement time="2020-2023" title={`Android/Flutter Developer & Scrum Member \n@DSGroup`}>
                    During this period, I worked on projects for Enel, developing applications both for Android and
                    using Flutter.
                    This experience gave me a comprehensive understanding of the Android operating system, as I had to
                    work at a lower level,
                    utilizing content providers and other system components. As a member of a Scrum team,
                    I was the only developer coordinating directly with the analyst for the implementation of two major
                    projects.
                    This role taught me how to handle large-scale projects independently, requiring strong
                    problem-solving and project management skills.
                    I was involved in the entire development lifecycle, from design and architecture to implementation
                    and testing,
                    gaining valuable experience in working autonomously on complex projects.
                </TimelineElement>
                <hr/>
            </li>
            <li>
                <hr/>
                <TimelineIcon work={false}></TimelineIcon>
                <TimelineElement left={false} time="2023" title="ATC Flutter Certified Application Developer">
                    I obtained the ATC Flutter Certified Application Developer certification, which further validated my
                    expertise
                    in Flutter and Dart for mobile application development.
                </TimelineElement>
                <hr/>
            </li>
            <li>
                <hr/>
                <TimelineIcon work={false}></TimelineIcon>
                <TimelineElement time="2023" title="Google Developers Android Certification">
                    I obtained the Google Developers Android Certification, validating my skills in Android application
                    development and reinforcing my expertise in building high-quality, scalable Android apps.
                </TimelineElement>
                <hr/>
            </li>
            <li>
                <hr/>
                <TimelineIcon work={false}></TimelineIcon>
                <TimelineElement left={false} time="2023" title="PSM1 (Professional Scrum Master I)">
                    The Professional Scrum Master I (PSM I) certification demonstrates my understanding of Scrum
                    principles and practices,
                    focusing on the Scrum Master role. I gained skills in facilitating teams, resolving conflicts, and
                    optimizing workflows
                    to ensure continuous improvement and efficient Agile processes.
                </TimelineElement>
                <hr/>
            </li>
            <li>
                <hr/>
                <TimelineIcon></TimelineIcon>
                <TimelineElement time="2024" title={`Flutter Developer & Product designer \n@Kurt`}>
                    I briefly collaborated with a startup focused on connecting people who enjoy playing soccer. During
                    this time,
                    I contributed to the development of new features and made a significant impact on improving the user
                    experience based on feedback from users.
                    To this day, the voting system I designed is still in use.
                </TimelineElement>
                <hr/>
            </li>
            <li>
                <hr/>
                <TimelineIcon work={false}></TimelineIcon>
                <TimelineElement left={false} time="2024-now" title="Resuming university">
                    I decided to leave my full-time job and pursue a freelance career as a developer to better manage my
                    time and complete my university studies.
                    This decision was driven by my desire to continuously learn new skills. Since returning to
                    university,
                    I've enhanced my knowledge in functional programming and developed a strong passion for
                    cybersecurity.
                </TimelineElement>
                <hr/>
            </li>
        </ul>

    </div>
}

export default Experience