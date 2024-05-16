// console.log(process);

import axios from "axios";
import express from "express";

const app=express();
const port=3000;
const url='https://jsonplaceholder.typicode.com/users/2';
const args=process.argv.slice(0);

const portN=args.find( args=> args.startsWith("port=3012"));

if (portN){
    port=portN.split("=").at(1);
}
else{
console.log("running on default port nuumber");
}

app.listen(port,()=>{
    console.log(`app started on http://localhost:${3012}`);
});

app.get("/",(request,response)=>{
        console.log("hello");
        response.send("Hello World");
});

app.get("/contact",(request,response)=>{
    console.log("contact");
    response.send("Please contact us.");
});

app.get("/about",(request,response)=>{
    console.log("about");
    response.send("About our company");
});

//ReferenceError: axios is not defined
// console.log("node project working....");

// const url="http://localhost:9099/emp/get-all-emps";


// axios.get(url)
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err));
/*
comparison
Springboot+maven - Node+npm
pom.xml-package.json
maven update -npm install
run project - npm start
project - packege
mvnrepository.com-npm.com
*/
