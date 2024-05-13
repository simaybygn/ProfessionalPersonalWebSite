import { Injectable } from "@angular/core";
import { ActivitiesDataModel, CoursesDataModel, EducationDataModel, EmploymentDataModel, ProjectsDataModel } from "./service.page.model";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
@Injectable({
   providedIn: 'root'
 })
export class ServicesService {
   private mailApi = 'https://mailthis.to/codeninja'

   constructor(private http: HttpClient) { }
 
   sendEmail(serviceID: string, templateID: string, params: any, publicKey:string): Promise<EmailJSResponseStatus> {
      return emailjs.send(serviceID, templateID, params,publicKey);
    }
 
}

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

export const ActivitiesData:ActivitiesDataModel[]=[
   {
      activityName:'Deniz Yıldızı Project',
      position:'Project Manager',
      institutionName:'Çağdaş Yaşamı Destekleme Derneği',
      startDate:new Date('01.09.2023'),
      endDate:undefined,
      summary:'It is a deep-rooted project that has been going on for 20 years. Training calendar, instructor and student communication are managed.',
      location:'Kocaeli'
   },
   {
      activityName:'Executive Board',
      position:'Vice President',
      institutionName:'Çağdaş Yaşamı Destekleme Derneği',
      startDate:new Date('01.09.2021'),
      endDate:new Date('01.09.2022'),
      summary:'New projects and activities are organized taking into account the wishes of the students.',
      location:'Kocaeli'
   },
   {
      activityName:'23.Türkan Saylan Youth Convention',
      position:'Participant',
      institutionName:'Çağdaş Yaşamı Destekleme Derneği',
      startDate:new Date('06.08.2021'),
      endDate:new Date('08.08.2021'),
      summary:'Projects were developed on the development plans determined by the United Nations.',
      location:'Kocaeli'
   },
   {
      activityName:'English Empowerment Project,',
      position:'Participant',
      institutionName:'Çağdaş Yaşamı Destekleme Derneği',
      startDate:new Date('01.09.2020'),
      endDate:new Date('01.06.2020'),
      summary:'For 1 year, video calls were made with American students to support my English language development.',
      location:'Kocaeli'
   },
   {
      activityName:'Mevzu Kadınsa Symposium',
      position:'Coordinator',
      institutionName:'Genç Girişimciler Club,',
      startDate:new Date('01.03.2020'),
      endDate:undefined,
      summary:'Speakers and sponsors to participate in the symposium were determined and the speakers were hosted. English',
      location:'Kocaeli'
   }
]

export const CoursesData:CoursesDataModel[]=[
   {
      courseName:'English Course',
      institutionName:'American Culture Language Schools',
      date:new Date('01.01.2022'),
      image:'../../assets/images/AmericanCultureEnglishSkillsCertificate-1.png',
      isFlipped:false
   },
   {
      courseName:'Effective Communication Skills And Conflict Management',
      institutionName:'Morfo Danışmanlık',
      date:new Date('01.04.2022'),
      image:'../../assets/images/404NotFound.jpeg',
      isFlipped:false
   },
   {
      courseName:'Presentation Skills Training',
      institutionName:'Morfo Danışmanlık',
      date:new Date('01.07.2022'),
      image:'../../assets/images/404NotFound2.png',
      isFlipped:false
   },
   {
      courseName:'Mobile Programming Course',
      institutionName:'Ecodation Software Technology',
      date:new Date('01.01.2021'),
      image:'../../assets/images/MobileProgrammingCertificate-1.png',
      isFlipped:false
   },
   {
      courseName:'Python Programming Camp',
      institutionName:'Türk Hava Kurumu University',
      date:new Date('01.09.2021'),
      image:'../../assets/images/PythonCertificate-1.png',
      isFlipped:false
   }]