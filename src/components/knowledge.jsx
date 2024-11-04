import KnowledgeModel from "../model/knowledgeModel.js";
import KnowledgeType from "../model/knowledgeType.js";

const knowledgeMap = init()

function Knowledge() {
    return <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-12">
        {
            Array.from(knowledgeMap.keys()).map(k =>
                <div key={k.label()} className="flex flex-col lg:ml-10">
                    <div key={k.style()} className={`divider divider-start divider-${k.style()}`}><h2 key={k.label()}
                                                                                                      className="text-2xl">{k.label()}</h2>
                    </div>

                    {
                        knowledgeMap.get(k).map(v =>
                            <div key={`${k.label()}-${v.label}`} className="flex justify-between items-center gap-8 w-full">
                                <span className="w-1/4 text-left">{`${v.label.toUpperCase()}:`}</span>
                                <progress className={`progress progress-${k.style()} w-3/4 `} value={v.value}
                                          max="10"></progress>
                            </div>
                        )
                    }

                </div>
            )
        }
    </div>

}

function init() {
    const knowledgeMap = new Map();
    knowledgeMap.set(KnowledgeType.MOBILE, [
        new KnowledgeModel('Java', KnowledgeType.MOBILE, 10),
        new KnowledgeModel('Kotlin', KnowledgeType.MOBILE, 10),
        new KnowledgeModel('Flutter', KnowledgeType.MOBILE, 10),
    ])
    knowledgeMap.set(KnowledgeType.WEB, [
        new KnowledgeModel('Javascript', KnowledgeType.WEB, 9),
        new KnowledgeModel('React', KnowledgeType.WEB, 7),
        new KnowledgeModel('NextJS', KnowledgeType.WEB, 7),
        new KnowledgeModel('Tailwind', KnowledgeType.WEB, 7),
    ])
    knowledgeMap.set(KnowledgeType.DB_BACKEND, [
        new KnowledgeModel('PosgreSQL', KnowledgeType.DB_BACKEND, 9),
        new KnowledgeModel('Firebase', KnowledgeType.DB_BACKEND, 10),
        new KnowledgeModel('Supabase', KnowledgeType.DB_BACKEND, 8),
        new KnowledgeModel('Mongodb', KnowledgeType.DB_BACKEND, 7),
    ])
    knowledgeMap.set(KnowledgeType.MD_PROCESS, [
        new KnowledgeModel('FFmpeg', KnowledgeType.MD_PROCESS, 6),
    ])
    return knowledgeMap
}

{/*
    <div className="flex flex-col">




                <span>KOTLIN:<progress className="progress progress-primary w-56 ml-3" value="40"
                                       max="100"></progress></span>
            <span>FLUTTER:<progress className="progress progress-primary w-56 ml-3" value="40"
                                        max="100"></progress></span>

        </div>
        <div>
            <div className="divider divider-start divider-accent lg:divider-end"><h2 className="text-2xl">WEB</h2></div>
            <div className="flex flex-col">
            <span className="text-left">JAVASCRIPT:<progress className="progress progress-accent w-56 ml-3" value="40"
                                       max="100"></progress></span>
                <span>REACT:<progress className="progress progress-accent w-56 ml-3" value="40"
                                      max="100"></progress></span>
                <span>NEXTJS:<progress className="progress progress-accent w-56 ml-3" value="40"
                                       max="100"></progress></span>
                <span>TAILWIND:<progress className="progress progress-accent w-56 ml-3" value="40"
                                         max="100"></progress></span>
            </div>
        </div>
        <div>
            <div className="divider divider-start divider-warning"><h2 className="text-2xl">DATABASE & BACKEND</h2>
            </div>
            <div className="flex flex-col">
            <span>POSTRESQL:<progress className="progress progress-warning w-56 ml-3" value="40"
                                      max="100"></progress></span>
                <span>FIREBASE:<progress className="progress progress-warning w-56 ml-3" value="40"
                                         max="100"></progress></span>
                <span>SUPABASE:<progress className="progress progress-warning w-56 ml-3" value="40"
                                         max="100"></progress></span>
                <span>MONGODB:<progress className="progress progress-warning w-56 ml-3" value="40"
                                        max="100"></progress></span>
            </div>
        </div>
        <div>
            <div className="divider divider-start divider-error"><h2 className="text-2xl">MEDIA PROCESSING</h2></div>
            <div className="flex flex-col">
            <span>FFMPEG:<progress className="progress progress-error w-56 ml-3" value="40"
                                   max="100"></progress></span>
            </div>
        </div>*/
}

export default Knowledge