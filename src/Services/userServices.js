import { myAxios } from "./helper";

export const signUp=(user)=>{
    return myAxios
    .post("/api/v1/users",user)
    .then((response)=> response.data)
};
export const loginUser =(loginDetail) =>{
    return myAxios.get("/api/v1/users", loginDetail).then((response)=>response.data)
}