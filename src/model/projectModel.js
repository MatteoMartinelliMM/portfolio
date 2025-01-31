class ProjectModel {
    constructor(title, description,imageUrl, url, techList, inProgress = false) {
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.url = url;
        this.techList = techList;
        this.inProgress = inProgress;
    }
}

export default ProjectModel