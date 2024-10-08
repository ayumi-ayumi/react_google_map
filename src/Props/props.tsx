import { serverTimestamp } from "firebase/firestore";
import { UserProfileType } from "../interfaces/interfaces";


export const options_learnerORmentor = ["Learner", "Mentor"]

export const options_LearningDuration = ["Beginner", "3 to 6 months", "6 to 12 months",
  "1 to 2 years", "More than 2 years"]

export const options_WorkingDuration = ["6 to 12 months", "1 to 2 years", "2 to 4 years", "More than 4 years"]

export const options_Langugages = ["German", "English", "Spanish", "French", "Italian", "Dutch", "Portuguese",
  "Russian", "Chinese", "Japanese", "Korean"]

export const options_ProgrammingLanguages = ["HTML&CSS", "JavaScript", "React", "TypeScript", "Python",
  "PHP", "C", "C++", "Java"]

export const options_cafeDetail = ["Wifi", "Power sockets", "Long stay", "Work-friendly table/chair", "Terrace",
  "pet-friendly", "Quiet", "Video/audio calls", "Bathroom"]
// export const options_learnerORmentor = [
//   {
//     label: "Learner",
//     value: "learner",
//   },
//   {
//     label: "Mentor",
//     value: "mentor",
//   },
// ];

// export const options_LearningDuration = [
//   {
//     label: "Beginner",
//     value: "beginner",
//   },
//   {
//     label: "3 to 6 months",
//     value: "3 to 6 m",
//   },
//   {
//     label: "6 to 12 months",
//     value: "6 to 12 m",
//   },
//   {
//     label: "1 to 2 years",
//     value: "1 to 2 y",
//   },
//   {
//     label: "More than 2 years",
//     value: "more than 2 y",
//   },
// ];

// export const options_WorkingDuration = [
//   {
//     label: "6 to 12 months",
//     value: "6 to 12 m",
//   },
//   {
//     label: "1 to 2 years",
//     value: "1 to 2 y",
//   },
//   {
//     label: "2 to 4 years",
//     value: "2 to 4 y",
//   },
//   {
//     label: "More than 4 years",
//     value: "more than 4 y",
//   },
//   {
//     label: "More than 10 years",
//     value: "more than 10 y",
//   },
// ];

// export const options_Langugages = [
//   {
//     label: "German",
//     value: "German",
//   },
//   {
//     label: "English",
//     value: "English",
//   },
//   {
//     label: "Spanish",
//     value: "Spanish",
//   },
//   {
//     label: "French",
//     value: "French",
//   },
//   {
//     label: "Italian",
//     value: "Italian",
//   },
//   {
//     label: "Dutch",
//     value: "Dutch",
//   },
//   {
//     label: "Portuguese",
//     value: "Portuguese",
//   },
//   {
//     label: "Russian",
//     value: "Russian",
//   },
//   {
//     label: "Chinese",
//     value: "Chinese",
//   },
//   {
//     label: "Japanese",
//     value: "Japanese",
//   },
//   {
//     label: "Korean",
//     value: "Korean",
//   },
// ];

// export const options_ProgrammingLanguages = [
//   {
//     label: "HTML&CSS",
//     value: "htmlANDcss",
//   },
//   {
//     label: "JavaScript",
//     value: "javascript",
//   },
//   {
//     label: "React",
//     value: "react",
//   },
//   {
//     label: "TypeScript",
//     value: "typescript",
//   },
//   {
//     label: "Python",
//     value: "python",
//   },
//   {
//     label: "PHP",
//     value: "php",
//   },
//   {
//     label: "C",
//     value: "c",
//   },
//   {
//     label: "C++",
//     value: "c++",
//   },
//   {
//     label: "Java",
//     value: "java",
//   },
// ];

// export const options_cafeDetail = [
//   {
//     label: "Wifi",
//     value: "wifi",
//   },
//   {
//     label: "Power sockets",
//     value: "power sockets",
//   },
//   {
//     label: "Long stay",
//     value: "long stay",
//   },
//   {
//     label: "Work-friendly table/chair",
//     value: "work-friendly table/chair",
//   },
//   {
//     label: "Terrace",
//     value: "terrace",
//   },
//   {
//     label: "pet-friendly",
//     value: "pet-friendly",
//   },
//   {
//     label: "Quiet",
//     value: "quiet",
//   },
//   {
//     label: "Video/audio calls",
//     value: "video/audio calls",
//   },
//   {
//     label: "Bathroom",
//     value: "bathroom",
//   },
// ]

export const defaultValues: UserProfileType = {
  // id: 0,
  timestamp: serverTimestamp(),
  place: {
    address: "",
    position: {
      lat: 0,
      lng: 0
    },
  },
  name: "",
  learnerORmentor: "",
  learningDuration: "",
  workingDuration: "",
  programmingLanguages: [],
  languages: [],
  uid: "",
  avatar: ""
};

export const avatarImgs = [
  { id: 1, src: 'avatars/avatar1.svg', description: "black clothes with glasses" },
  { id: 2, src: 'avatars/avatar2.svg', description: "three eyes with twin tails" },
  { id: 3, src: 'avatars/avatar3.svg', description: "serious face with a laptop" },
  { id: 4, src: 'avatars/avatar4.svg', description: "crossing arms with glasses" },
  { id: 5, src: 'avatars/avatar5.svg', description: "hoodie with beard" },
  { id: 6, src: 'avatars/avatar6.svg', description: "pony tail with mustache" },
  { id: 7, src: 'avatars/avatar7.svg', description: "crossing arms with hair band" },
  { id: 8, src: 'avatars/avatar8.svg', description: "sweater with glasses and beard" },
  { id: 9, src: 'avatars/avatar9.svg', description: "eye with pony tail" },
  { id: 10, src: 'avatars/avatar10.svg', description: "hoodie with beard and thick hait" }
]