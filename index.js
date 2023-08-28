import express from "express";
import bodyParser from "body-parser";

const hostname = "0.0.0.0";
const port = 3000;

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",function(request,response){
    response.render("index.ejs");
});

app.post("/exit",function(req,res){
    res.render("index.ejs");
});

app.post("/submit1",function(req,res){
    const randomAdj = boyArray[Math.floor(Math.random() * boyArray.length)];

    res.render("boy.ejs",{
        babyName : randomAdj,
    });
});

app.post("/submit2",function(req,res){
    const randomAdj = girlArray[Math.floor(Math.random() * girlArray.length)];

    res.render("girl.ejs",{
        babyName : randomAdj,
    });
});

app.listen(port,hostname,function(){
    console.log("Listining on port 3000");
});
var boyArray = ["adi","ajith","chethan","ashwin","Chandan","Aarav",
"Aryan",
"Aditya",
"Arjun",
"Rohan",
"Vivaan",
"Vihaan",
"Ishaan",
"Advait",
"Kabir",
"Samar",
"Aadi",
"Dhruv",
"Aayush",
"Vedant",
"Aryan",
"Amit",
"Rajat",
"Yuvan",
"Krishna",
"Alok",
  "Amitabh",
  "Anand",
  "Arnav",
  "Bhuvan",
  "Chaitanya",
  "Darshan",
  "Dev",
  "Eshaan",
  "Girish",
  "Harish",
  "Ishan",
  "Jayant",
  "Kunal",
  "Lalit",
  "Manish",
  "Nakul",
  "Omkar",
  "Pranav",
  "Rahul",
  "Sanjay",
  "Tarun",
  "Utkarsh",
  "Vikram",
  "Yash",
  "Chirag",
  "Dhanraj",
  "Eknath",
  "Ganesh",
  "Hari",
  "Inder",
  "Jagdish",
  "Kartik",
  "Lakshman",
  "Mohan",
  "Nitin",
  "Omkar",
  "Pranay",
  "Ravi",
  "Shyam",
  "Tejas",
  "Uday",
  "Vijay",
  "Yashwant",
  "Zubin", "Alok",
  "Bharat",
  "Chetan",
  "Dinesh",
  "Eklavya",
  "Gopal",
  "Himanshu",
  "Indra",
  "Jai",
  "Kiran",
  "Lalit",
  "Manoj",
  "Nikhil",
  "Ojas",
  "Pramod",
  "Raghav",
  "Suresh",
  "Tapan",
  "Ujjwal",
  "Vishal",
  "Yogesh",
  "Zayn",
];

var girlArray = ["Aaradhya",
"Anika",
"Avani",
"Aanya",
"Diya",
"Esha",
"Ishani",
"Kavya",
"Neha",
"Prisha",
"Riya",
"Sanya",
"Tanvi",
"Trisha",
"Vanya",
"Zara",
"Aditi",
"Divya",
"Ishita",
"Kiara",
"Akshara",
  "Ananya",
  "Bhavya",
  "Chhavi",
  "Deeksha",
  "Ekta",
  "Gayatri",
  "Himani",
  "Ishika",
  "Jyoti",
  "Kritika",
  "Lakshmi",
  "Meera",
  "Niharika",
  "Ojaswi",
  "Pooja",
  "Rashmi",
  "Sakshi",
  "Tanya",
  "Uma",
  "Vidya",
  "Yamini",
  "Zoya","Amrita",
  "Charul",
  "Disha",
  "Ekisha",
  "Falguni",
  "Gauri",
  "Hansika",
  "Ishwari",
  "Jasmine",
  "Kamakshi",
  "Lavanya",
  "Mansi",
  "Navika",
  "Oindrila",
  "Pari",
  "Rachana",
  "Samaira",
  "Tara",
  "Urvashi",
  "Vibha",
  "Yukta",
  "Zaina",
];
