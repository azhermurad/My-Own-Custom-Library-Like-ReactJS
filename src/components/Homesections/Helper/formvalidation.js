
   // login form validatin and  route to home page 
   let FormSubmit=(e)=>{
    e.preventDefault()
    let form=document.querySelector(".form")
     
      if(form.email.value==""){
        alert("Enter your email")
        return;
      }

      if(form.password.value==""){
        alert("please enter your password!!!!!")
        return;
    }
    
      if(form.password.value.length<5){
          alert("password is very short!!!!!!!!")
          return;
      }

                                   //this code is for creating an user in localstroge  for testing     

//    let users={email:"test@gmail.com",password:123456789}
//    let json=JSON.stringify(users)
 //  window.localStorage.setItem("users",json)

  

                                    // fetch the data form the localstoage 
     let user= window.localStorage.getItem("users")
     let data=JSON.parse(user)
     console.log(data)

     let email=form.email.value;
     let password=form.password.value
       
     if(email==data.email && password==data.password){
         alert("email is match to the user in the database")
         window.location.pathname="/home"
         return;
     }
     else{
         alert("invalid email or password")
     }
        
        // alert("the form is submite sucess full")s
    //   window.location.pathname="/home"
  }
  

export default FormSubmit;