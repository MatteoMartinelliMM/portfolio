import KnowledgeModel from "../model/knowledgeModel.js";
import KnowledgeType from "../model/knowledgeType.js";

const knowledgeMap = init()

function Knowledge() {
    return <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-12">
            {
                Array.from(knowledgeMap.keys()).map(k =>
                    <div key={k.label()} className="flex flex-col ">
                        <div key={k.dividerStyle()} className={`divider divider-start ${k.dividerStyle()}`}><h2
                            key={k.label()}
                            className="text-2xl">{k.label()}</h2>
                        </div>
                        {
                            knowledgeMap.get(k).map(v =>
                                <div key={`${k.label()}-${v.label}`}
                                     className="flex justify-between items-center gap-8 w-full">
                                    <span className="w-1/4 text-left">{`${v.label.toUpperCase()}:`}</span>
                                    <progress className={`progress ${k.progressStyle()} w-3/4 `} value={v.value}
                                              max="10"></progress>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
        <div className="container mx-auto flex flex-col mt-5">
            <div className="divider divider-start divider-success"><h2 className="text-2xl">SPOKEN LANGUAGES</h2></div>
            <div className="flex justify-between items-center gap-8 w-full">
                <span className="w-1/6 text-left">ITALIAN:</span>
                <progress className={`progress progress-success w-5/6 `} value="10"
                          max="10"></progress>
            </div>
            <div className="flex justify-between items-center gap-8 w-full">
                <span className="w-1/6 text-left">ENGLISH:</span>
                <progress className={`progress progress-success w-5/6 `} value="9"
                          max="10"></progress>
            </div>
            <div className="flex justify-between items-center gap-8 w-full">
                <span className="w-1/6 text-left">GERMAN:</span>
                <progress className={`progress progress-success w-5/6 `} value="8"
                          max="10"></progress>
            </div>
        </div>
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


export default Knowledge