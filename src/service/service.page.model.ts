
export interface CommonDataModel{
    startDate:Date;
    endDate?:Date;
    department?:string;
    city:string;
    country:string;
}
export interface EducationDataModel extends CommonDataModel{
    schoolName:string;
}

export interface EmploymentDataModel extends CommonDataModel{
    companyName:string;
    title:string;
    summary:string;
    additionalInformation:string[];
}

export interface ProjectsDataModel{
    projectName:string;
    information:string;
    imageRoot:string;
}