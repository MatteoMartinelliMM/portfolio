import GithubIcon from "@/app/components/icons/githubIcon";
import LinkIcon from "@/app/components/icons/linkIcon";
import {useTranslations} from "next-intl";
import {PROJECTS_T_NODE} from "@/features/projects/projects.constants";

function ProjectCard({project}) {
    const t = useTranslations(PROJECTS_T_NODE)
    return <div className="card card-compact text-start bg-base-100 shadow-xl mx-4">
        <CardFigure project={project}/>
        <div className="card-body">
            <h2 className="card-title">{project.title}
                <CardBadge project={project} translator={t}/>
            </h2>
            <div className="card-description ">
                {project.description}
            </div>
            <div className="card-actions mt-3">
                {
                    project.techList.map((tl, i) =>
                        <div key={i} className="badge badge-outline">{`#${tl}`}</div>
                    )
                }
            </div>
        </div>
    </div>
}


function CardBadge({project, translator}) {
    return <a
        href={project.url || "#"}
        target={project.url ? "_blank" : "_self"}
        rel={project.url ? "noopener noreferrer" : ""}
        className={`block ${!project.url ? "pointer-events-none cursor-default" : ""}`}// Previene il comportamento di navigazione
    >
        <div className={`badge ${project.isPublic() ? 'badge-success' : 'badge-error'}`}>
            <GithubIcon className="ml-1"></GithubIcon>
            <span className="mx-1">{translator(project.getVisibility())}</span>
            <LinkIcon className="mr-1" enable={project.isPublic()}></LinkIcon>
        </div>
    </a>

}

function CardFigure({project}) {
    return <figure>
        <a
            href={project.url || "#"}
            target={project.url ? "_blank" : "_self"}
            rel={project.url ? "noopener noreferrer" : ""}
            className={`block ${!project.url ? "pointer-events-none cursor-default" : ""}`}// Previene il comportamento di navigazione
        >
            <img src={project.imageUrl} className={`${project.url ? 'clickable-card' : ''}`}/>
        </a>
    </figure>
}

export default ProjectCard



