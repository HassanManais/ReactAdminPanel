import {request as https} from "./request";
import DashBoardComponent from "../Components/BodyComponent/Dashboard/DashBoardComponent";

export const GetPost=({limit})=>{
//return https.get('https://dummyapi.io/data/api/post?limit=${limit}');    According to tutorial

return https.get('https://dummyapi.io/data/v1/user?page=1&limit=10');

//https://dummyapi.io/data/v1/user?page=1&limit=10

};

export const GetUser=({limit})=>{
//return https.get('https://dummyapi.io/data/api/user?limit=${limit}');

return https.get('https://dummyapi.io/data/api/user?limit=5');

};