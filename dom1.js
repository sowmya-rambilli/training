// let ele = document.createElement("h1");
// ele.innerText= "dynamic creation of html element";
// // ele.id = "demo"
// ele.setAttribute("id" , "demo")
// console.log(ele);

// // ele.removeAttribute("id");
// document.body.appendChild(ele);


// let image = document.createElement("img");
// image.src= "./3606208.jpg";
// console.log(image);

// document.body.appendChild(image)


// let form = document.querySelector("form");
// let username = document.querySelector("#uName");
// let email = document.querySelector("#uMail");
// let psw = document.querySelector("#uPsw");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     // console.log(event);
//     // console.log("form submitted");
//     // console.log(username.value);
//     let name =username.value;
//     let mail = email.value;
//     let password = psw.value;
//     let userDetails={
//         name:name,
//         mail : mail,
//         password:password
//     } ;
//     // console.log(userDetails);
//     localStorage.setItem("userData" , JSON.stringify(userDetails))
// })


// localStorage.clear()


// ! 

// let mainEle = document.createElement("div");
// mainEle.setAttribute("id" , "mainBlock");

// console.log(mainEle);


// let topEle = document.createElement("div");
// topEle.setAttribute("class" , "topBlock");
// // console.log(topEle);

// let image = document.createElement("img");
// image.src="https://cdn.pixabay.com/photo/2023/02/09/16/43/cat-7779237_640.jpg";
// image.width="300";
// image.height="300";
// image.style.objectFit="cover"

// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class" , "bottomBlock");
// // console.log(bottomEle);
// let h1 = document.createElement("h1");
// h1.innerText="CAT";

// let btn = document.createElement("button");
// btn.innerText="View More";

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);
// topEle.appendChild(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);

// document.body.appendChild(mainEle)


// // !
// let form = document.querySelector("form");
// let username = document.getElementById("uName");
// let password = document.getElementById("uPass");
// let check = document.getElementById("check");
// let show = document.getElementById("show");

// let gender = document.getElementsByName("gender");
// // console.log(gender);

// // ! hiding and showing the password
// check.addEventListener("click" , (event)=>{
//     // console.log(event.target.checked);
//     if(event.target.checked == true){
//         password.setAttribute("type" , "text");
//         show.innerText = "hide password";
//     }else{
//         password.setAttribute("type" , "password");
//         show.innerText="show password";
//     }
// })

// form.addEventListener("submit" , event=>{
//     event.preventDefault();
//     let un = username.value;
//     let up = password.value;
//     let gen = "";
//     for(let i = 0;i<=gender.length-1;i++){
//         // console.log(gender[i].value);
//         // console.log(gender[i].checked);
//         if(gender[i].checked == true){
//             // console.log(gender[i].value);
//             gen += gender[i].value;
//         }
//     };
//     let userDetails={
//         username:un,
//         password:up,
//         gender:gen

//     };
//     console.log(userDetails);
//     sessionStorage.setItem("userData" ,JSON.stringify(userDetails) )
// })

// take  an array of objects where each object contains employee Id,employee name,employee company,
// employee salary, employee Address.where emp address futher contains an object which includes 2 properties such as empcity,area.
// display all these employee data on the ui through javascript 

const employees = [
    {
        empId: 1,
        empName:"sowmya",
        empCompany:"Tech M",
        empSalary: 75000,
        empAddress:{
            empCity:"Hyd",
            empArea:"Madhapur"
        }
    },
    {
        empId: 2,
        empName:"shannu",
        empCompany:"Google",
        empSalary: 85000,
        empAddress:{
            empCity:"khammam",
            empArea:"kothagudam"
        } 
    },
    {
        empId: 3,
        empName:"Preethi",
        empCompany:"Aws",
        empSalary: 70000,
        empAddress:{
            empCity:"Warngal",
            empArea:"Hanumakonda"
        }
    },
    {
        empId: 4,
        empName:"Bhanu",
        empCompany:"Tcs",
        empSalary: 95000,
        empAddress:{
            empCity:"Hyd",
            empArea:"Hitech"
        }
    }
];