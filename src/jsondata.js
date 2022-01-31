// const express = require("express");
// const app = express();
// const port = 3000;
// app.get("/",(req,res)=>{
//     res.status(200).write("<h1>hellow world I am looking for a job...</h1>");
//     res.status(200).write("<h2>hellow world I am looking for a job...</h2>");
//     res.status(200).write("<h3>hellow world I am looking for a job...</h3>");
//     res.send();
// });
// app.get("/about",(req,res)=>{
//     res.status(200).json([{
//         id:10,
//         Name  : "Arun singh",
//         father : "rajendra singh",    
//         mother : "kanya devi",

//     },
//     {
//         id:10,
//         Name  : "Arun singh",
//         father : "rajendra singh",    
//         mother : "kanya devi",

// //  Note ; the method are identical when an object or array is passed 
//  // but res.json () will also convert non objects.
// // such as null and undefined , which are not valid JSon.

//     }
// ]);
// });
// app.get("/contact",(req,res)=>{
//     res.status(200).send("hellow world please contact us ...");
// });
// app.get("/temperatur",(req,res)=>{
//     res.status(200).send("hellow world please check temperature ...");
// });
// app.listen(port,()=>{
//     console.log(`listinig my port no ${port}`)
// });