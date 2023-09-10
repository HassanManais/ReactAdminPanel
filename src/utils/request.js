import axios from "axios";
import DashBoardComponent from "../Components/BodyComponent/Dashboard/DashBoardComponent";


axios.interceptors.request.use((config)=>{
   config.headers["app-id"]="64f2dd05fd397f0a4b402a49";
   return config;
});

   // get request 64f2dd05fd397f0a4b402a49

   export const request={
       get:axios.get,
   };