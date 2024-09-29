import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.listen(port,(req,res)=>{
    console.log(`The server started right now and run on the port ${port} !!`);
});

app.get("/",(req,res)=>{
   var year = new Date();
   var thisYear = year.getFullYear();
res.render("index.ejs",{thisYear: thisYear}
    );
});

app.get("/register",(req,res)=>{
    res.render("register.ejs");
});

app.get("/terms-privacy",(req,res)=>{
    res.render("termsConditions.ejs");
});

app.get("/privacy-policy",(req,res)=>{
    res.render("privacy-policy.ejs");
});

app.get("/live",(req,res)=>{
   var year = new Date();
   var thisYear = year.getFullYear();
   var apiAlert = "Is incomplete because i need to understand how to use an API first time";
res.render("football-live.ejs",{thisYear: thisYear,
                                apiAlert: apiAlert}
    );
});

app.get("/write-your-blog",(req,res)=>{
      var year = new Date();
   var thisYear = year.getFullYear();
    res.render("createPost.ejs",{thisYear:thisYear});
});

app.post("/write-your-blog",(req,res)=>{

    var date = new Date();
   
   var day = date.getDate();
   var month = date.getMonth()+1;
   var thisYear = date.getFullYear();
   const curentDate = day + "." + month + "."+thisYear;

   var hour = date.getHours();
   var minute = date.getMinutes();

   const curentTime = hour + ":" + minute;

    var titlePost = req.body[`blog-title`];
    var name = req.body[`userName`];
    var photo = req.file;//photo is not working now
    var content = req.body[`blog-Content`];

    res.render("news.ejs",{
      titlePost: titlePost,
       name: name ,
       photo: photo,//photo is not working now
       content: content,
       thisYear: thisYear,
       curentDate: curentDate,
       day:day,
       month:month,
       curentTime: curentTime,
       hour:hour,
       minute:minute,
    }); 
});

app.get("/edit",(req,res)=>{
    var date = new Date();
    var thisYear = date.getFullYear();

    var titlePost = req.body[`blog-title`];
    var content = req.body[`blog-Content`];

    res.render("edit.ejs",{
        thisYear: thisYear,
        titlePost: titlePost,
        content: content
    });
});

app.get("/delete-post",(req,res)=>{
    res.render("deletePost.ejs");
});

app.get("/home-redirect-from-deleted-post",(req,res)=>{
    var year = new Date();
   var thisYear = year.getFullYear();
    res.render("index.ejs",{
      thisYear: thisYear,  
    });
});