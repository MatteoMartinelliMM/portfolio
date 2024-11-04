import WorkIcon from "../icons/workIcon.jsx";
import StudyIcon from "../icons/studyIcon.jsx";

// eslint-disable-next-line react/prop-types
function TimelineIcon({work = true}) {
    return <div className="timeline-middle">
        {work ? <WorkIcon></WorkIcon> : <StudyIcon></StudyIcon>}
    </div>
}

export default TimelineIcon