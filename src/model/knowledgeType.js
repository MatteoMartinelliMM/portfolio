class KnowledgeType {
    constructor(type) {
        this.type = type;
    }

    static MOBILE = new KnowledgeType('mobile');
    static WEB = new KnowledgeType('web');
    static DB_BACKEND = new KnowledgeType('db & backend');
    static MD_PROCESS = new KnowledgeType('media proc.');


    style() {
        switch (this.type) {
            case 'mobile':
                return 'primary'
            case 'web':
                return 'accent'
            case 'db & backend':
                return 'warning'
            case 'media proc.':
                return 'error'
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