class KnowledgeType {
    constructor(type) {
        this.type = type;
    }

    static MOBILE = new KnowledgeType('mobile');
    static WEB = new KnowledgeType('web');
    static DB_BACKEND = new KnowledgeType('db & backend');
    static MD_PROCESS = new KnowledgeType('media proc.');


    dividerStyle() {

        switch (this.type) {
            case 'mobile':
                return 'divider-primary'
            case 'web':
                return 'divider-accent'
            case 'db & backend':
                return 'divider-warning'
            case 'media proc.':
                return 'divider-error'
        }
    }

    progressStyle(){
        switch (this.type) {
            case 'mobile':
                return 'progress-primary'
            case 'web':
                return 'progress-accent'
            case 'db & backend':
                return 'progress-warning'
            case 'media proc.':
                return 'progress-error'
        }
    }

    label() {
        return this.type.toUpperCase()
    }

    static values() {
        return [this.MOBILE, this.WEB, this.DB_BACKEND, this.MD_PROCESS];
    }
}

export default KnowledgeType