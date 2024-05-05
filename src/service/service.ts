import { EducationDataModel, EmploymentDataModel } from "./service.page.model";

export const EducationDatas:EducationDataModel[]=[
    {
       schoolName:"Kocaeli University",
       startDate:new Date('01.09.2019'),
       endDate:new Date('01.06.2023'),
       department:"Electronic And Communication Engineering",
       city:"Kocaeli",
       country:"Türkiye"
    },
    {
        schoolName:"Hüseyin Özbuğday Anatolian High School",
        startDate:new Date('01.09.2015'),
        endDate:new Date('01.06.2019'),
        city:"Hatay",
        country:"Türkiye"
     }
];

export const EmploymentDatas:EmploymentDataModel[]=[
    {
       companyName:"Acıbadem Technology",
       title:"Junior Software Developer",
       summary:"I have been involved in the Core project since its inception and it is still ongoing, while also being involved in all stages of the Netherland regulation project from inception to the live phase.",
       additionalInformation:["Learned microservices architecture.","Learned Docker,RabbitMq technologies.","Written unit tests.","Designed microservices with Clean-Architecture.","Screens developed with Angular."],
       startDate:new Date('04.07.2022'),
       endDate:undefined,
       department:"Financial Software Team",
       city:"İstanbul",
       country:"Türkiye"
    },
    {
        companyName:"Ecodation Software Technologies",
        title:"Software Intern",
        summary:"Short-term Intern",
        additionalInformation:["Designed 3 different mobile applications using ionic.","Support was provided in the development of the mobile application called Haberci."],
        startDate:new Date('09.08.2021'),
        endDate:new Date('29.08.2021'),
        department:"Software Team",
        city:"İstanbul",
        country:"Türkiye"
     }
];