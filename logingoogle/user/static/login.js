const form = document.querySelector('#form')

const email = document.querySelector('#email')
const phonenumber=document.querySelector('#phonenumber')
const password = document.querySelector('#password')


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateform();
})

function validateform(){
  
    const emailval=email.value.trim();
    const passwordval=password.value.trim();
    // const phonenumberval=phonenumber.value.trim();
   
  

    if(emailval===''){
        seterror(email,'Email or Phone number is required')

    }
    else if(emailval.search(/^[0-9]{10}/) == 0){
        setsuccess(email)
      
    }
    else if(emailval.search(/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-z]{2,}$/)== 0 ){
       
        setsuccess(email)
    }
  


    
  
    else{
        //setsuccess(email)
        seterror(email,'enter valid email or Phone number')
       
    }
   
   
    if(passwordval===''){
        seterror(password,'Password is required')
    }
    else if(passwordval.length <6){
        seterror(password,'Password must be aleast 6 characters')
    }
    else if(passwordval.search(/[0-9]/)==-1){
        seterror(password,'Password should contain atleast 1 numeric character')
    }
    else if(passwordval.search(/[a-z]/)==-1){
        seterror(password,'Password should contain atleast 1 lowercase character')
    }
    else if(passwordval.search(/[A-Z]/)==-1){
        seterror(password,'Password should contain atleast 1 Uppercase character')
    }
    else if(passwordval.search(/[!\@\#\$\%\^\&\*]/)==-1){
        seterror(password,'Password should contain atleast 1 Special character')
    }
    else{
        setsuccess(password)
    }
   
}

function seterror(element,message){
    const inputgroup =element.parentElement;
    const errorelement = inputgroup.querySelector('.error')

    errorelement.innerText=message;
    inputgroup.classList.add('error')
    inputgroup.classList.remove('success')
}

function setsuccess(element){
    const inputgroup =element.parentElement;
    const errorelement = inputgroup.querySelector('.error')

    errorelement.innerText='';
    inputgroup.classList.add('success')
    inputgroup.classList.remove('error')
}

// const validateEmail=(email)=>{
//     return String(email)
//     .toLowerCase()
//     .match(
//         /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     );

// }





