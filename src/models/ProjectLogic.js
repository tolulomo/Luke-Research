class ProjectLogics {
    constructor(id, status, name, sponsor, sdate, edate){
        this.name = name;
        this.id = id;
        this.sponsor = sponsor;
        this.active = status;
        this.project_start_date = sdate;
        this.project_end_date = edate;
    }
};

export default ProjectLogics;