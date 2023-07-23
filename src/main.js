const userfrom = document.getElementById("userfrom");

const msg = document.querySelector(".msg");




// user submit form

userfrom.onsubmit = (e) =>{
   e.preventDefault();

   const form_data = new FormData(e.target);

   const data = Object.fromEntries(form_data);
  

 // validation 

   if(!data.name || !data.email || !data.mobile){
    msg.innerHTML = createAlert("All fields are required");
   }else{
    msg.innerHTML = createAlert("Data stable");
   };

};