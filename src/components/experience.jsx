import 'react'
import TimelineIcon from "./timeline/timelineIcon.jsx";
import TimelineElement from "./timeline/timelineElement.jsx";

function Experience() {
    return <div>

        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
                <TimelineIcon work={false}></TimelineIcon>
                <TimelineElement time="2016-2018" title="Bachelor's Degree in Computer Science @Unimi">
                    iPhone is a line of smartphones produced by Apple Inc. that use Apple&apos;s own iOS mobile
                    operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on
                    January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As
                    of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone
                    accounts for 15.6% of global smartphone market share
                </TimelineElement>
                <hr/>
            </li>
            <li>
                <hr/>
                <TimelineIcon></TimelineIcon>
                <TimelineElement left={false} time="2018-2020" title="Android developer @DSGroup">
                    The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh
                    personal computer. It played a pivotal role in establishing desktop publishing as a general
                    office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed
                    in a beige case with integrated carrying handle; it came with a keyboard and single-button
                    mouse.
                </TimelineElement>
                <hr/>
            </li>
            <li>
                <hr/>
                <TimelineIcon></TimelineIcon>
                <TimelineElement time="2020-2023" title={`Android/Flutter Developer & Scrum Member \n@DSGroup`}>
                    iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
                    been the primary part of Apple&apos;s consumer desktop offerings since its debut in August 1998,
                    and has evolved through seven distinct forms
                </TimelineElement>
                <hr/>
            </li>
            <li>
                <hr/>
                <TimelineIcon work={false}></TimelineIcon>
                <TimelineElement left={false} time="2024" title="ATC Flutter Certified Application Developer">
                    The iPod is a discontinued series of portable media players and multi-purpose mobile devices
                    designed and marketed by Apple Inc. The first version was released on October 23, 2001, about
                    8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450
                    million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At
                    over 20 years, the iPod brand is the oldest to be discontinued by Apple
                </TimelineElement>
                <hr/>
            </li>
            <li>
                <hr/>
                <TimelineIcon work={false}></TimelineIcon>
                <TimelineElement time="2024" title="Google Decelopers Android Certification">
                    The iPod is a discontinued series of portable media players and multi-purpose mobile devices
                    designed and marketed by Apple Inc. The first version was released on October 23, 2001, about
                    8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450
                    million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At
                    over 20 years, the iPod brand is the oldest to be discontinued by Apple
                </TimelineElement>
                <hr/>
            </li>
            <li>
                <hr/>
                <TimelineIcon></TimelineIcon>
                <TimelineElement left={false} time="2024" title={`Flutter Developer & Product designer \n@Kurt`}>
                    The iPod is a discontinued series of portable media players and multi-purpose mobile devices
                    designed and marketed by Apple Inc. The first version was released on October 23, 2001, about
                    8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450
                    million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At
                    over 20 years, the iPod brand is the oldest to be discontinued by Apple
                </TimelineElement>
                <hr/>
            </li>
            <li>
                <hr/>
                <TimelineIcon work={false}></TimelineIcon>
                <TimelineElement time="2024-now" title="Resuming university">
                    The iPod is a discontinued series of portable media players and multi-purpose mobile devices
                    designed and marketed by Apple Inc. The first version was released on October 23, 2001, about
                    8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450
                    million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At
                    over 20 years, the iPod brand is the oldest to be discontinued by Apple
                </TimelineElement>
                <hr/>
            </li>
        </ul>

    </div>
}

export default Experience