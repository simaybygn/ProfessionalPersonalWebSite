import { EducationDataModel, EmploymentDataModel, ProjectsDataModel } from "./service.page.model";

export const EducationDatas:EducationDataModel[]=[
    {
       schoolName:"Kocaeli University",
       startDate:new Date('09.01.2019'),
       endDate:new Date('06.01.2023'),
       department:"Electronic And Communication Engineering",
       city:"Kocaeli",
       country:"Türkiye"
    },
    {
        schoolName:"Hüseyin Özbuğday Anatolian High School",
        startDate:new Date('09.01.2015'),
        endDate:new Date('06.01.2019'),
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
       startDate:new Date('07.04.2022'),
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
        startDate:new Date('08.09.2021'),
        endDate:new Date('09.29.2021'),
        department:"Software Team",
        city:"İstanbul",
        country:"Türkiye"
     }
];

export const ProjectsData:ProjectsDataModel[]=[
   {
      projectName:'TARLADAN EVE',
      information:'I aimed to reach farmers directly to consumers with the "Tarladan Eve" e-commerce site I created as my graduation project. While doing this project, I used technologies such as Microsevice, Angular, C#, .netCore, Clean architecture, Unit test, Docker, CQRS.',
      imageRoot:'https://drive.google.com/file/d/14J4nTxmxFE0FqFwVqbbR3_8XuekbNlUP/preview'
   },
   {
      projectName:'PERSONAL WEB SITE',
      information:'I created a website summarizing my resume using Angular and Angular material. This is my first project where I experienced Angular.',
      imageRoot:'https://drive.google.com/file/d/1WWBye8YNUYDUfsHApCFzOCEuoAmCwLjB/preview'
   }
]