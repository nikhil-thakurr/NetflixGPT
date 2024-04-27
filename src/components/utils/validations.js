export const checkValidateData =(email,password)=>{

   const checkEmail= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

   const checkPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);

   if(!checkEmail)return "Email is not valid";
   if(!checkPassword)return "Password is not valid";

   return null;

}