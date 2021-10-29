
function submit(){
    alert("hey");
}


let nameIn = document.getElementById("name");
let spanName = document.getElementById("name-span");
nameIn.onblur = function(){
    let reName = /^(?![\s-])[a-zA-Z\S]*$/g;
    
    if(nameIn.value){
        if(reName.test(nameIn.value) === -1){
            spanName.innerText = "Enter valid Username";
            spanName.style.color= "red";
        } else if (nameIn.value === "") {
            spanName.innerText = "Enter Username";
            spanName.style.color = "red"
        } else if (nameIn.value.search(/[a-zA-Z]/) === -1){
            spanName.innerText = "Enter Valid Name";
            spanName.style.color = "red";
        } else {
            spanName.innerText = "Name Accepted";
            spanName.style.color = "green";
        }
    } else {
        spanName.innerText = "Min 5 characters needed";
        spanName.style.color= "red";
    }
};


let email = document.getElementById("email");
let spanEmail = document.getElementById("email-span");
email.onblur = function (){
    let reEmail =  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
            if (email.value.match(reEmail)){
                spanEmail.innerText = "Email Verified";
                spanEmail.style.color = "green"; 
            } else {
                spanEmail.innerText = "Invalid Email";
                spanEmail.style.color = "red";
            }
}

let message = document.getElementById("branch");
let spanMessage = document.getElementById("branch-span");
message.onblur = function(){
    if(message.value === "" || message.value == null){
        spanMessage.innerText = "Enter your Department";
        spanMessage.style.color = "red";
    } else if (message.value.length > 150){
        spanMessage.innerText = "Character Limit 150";
        spanMessage.style.color = "red";
    }else{
        spanMessage.innerText = "Message saved";
        spanMessage.style.color = "green";
    }
}
let gender = document.getElementById("gender");
let spanGender = document.getElementById("gender-span");
gender.onblur = function(){
    if(gender.value === "select"){
        spanGender.innerText = "Please Select Your Gender";
        spanGender.style.color = "red";
    }
    else{
        spanGender.innerText = "Message saved";
        spanGender.style.color = "green";
    }
}


// document.getElementById('btn').addEventListener('click', function(){
//   if(spanName.innerText === "Name Accepted" && spanEmail.innerText === "Email Verified"){
//       alert("Your Message was received successfully.");
//   } else if (spanMessage.innerText === "Message Saved"){
//       alert("Your Message was received successfully.");
//   } else{
//       alert("Recheck Inputs");
//   }
// });

// function sendEmail(){
//     Email.send({
//         Host: 'smtp.gmail.com',
//         SecureToken : "41d1170c-4d73-4da2-b687-908d72c5218f",
//         Port:2525,
//         EnableSsl : true,
//         Username : 'blackhathubguyz@gmail.com',
//         Password : '1D54E78AD1A3F6AFEF05D2D745F8317B8842',
//         To : 'ajaye995@gmail.com',
//         From : "blackhathubguyz@gmail.com",
//         Subject : "Black Hat Hub",
//         Body : this.nameIn.value +"Welcome to black hat hub guys"
//     }).then(
// 		message => alert("mail sent successfully")
// 	);
// }

function sendmail(params){
    var tempParams = {
        from_name : document.getElementById("name").value,
        id_email : document.getElementById("email").value,
       
    };
    emailjs.send('service_p8n74kf','template_y4l9fk3',tempParams)
.then(function(res){
        console.log("success",res.status)
        if(res.status!=200)alert("Unable to sent your message");
        else alert("Your message was sent successfully");
    })
}