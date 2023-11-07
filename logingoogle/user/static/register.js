const form = document.querySelector('#form')
const firstname = document.querySelector('#firstname')

const phonenumber=document.querySelector('#phonenumber')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmpassword = document.querySelector('#cpassword')
const dob= document.querySelector('#DOB')

form.addEventListener('submit',(e)=>{
    
    if(!validateform()){
        e.preventDefault();
    }
})

function validateform(){
    const firstnameval=firstname !=null ? (firstname.value !=null ? firstname.value.trim() :''):'';
    const dobval=dob !=null ? (dob.value !=null ? dob.value.trim() :''):'';
    const phonenumberval=phonenumber !=null ? (phonenumber.value !=null ? phonenumber.value.trim() :''):'';
    const emailval=email !=null ? (email.value !=null ? email.value.trim() :''):'';
    const passwordval=password !=null ? (password.value !=null ? password.value.trim() :''):'';
    const confirmpasswordval=confirmpassword !=null ? (confirmpassword.value !=null ? confirmpassword.value.trim() :''):'';
    let success = true

    if(firstnameval===''){
        success=false;
        seterror(firstname,'Firstname is required')
    }
    else{
        setsuccess(firstname)
    }
    // if(lastnameval===''){
    //     seterror(lastname,'lastname is required')
    // }
    // else{
    //     setsuccess(lastname)
    // }
    if(emailval===''){
        success=false;
        seterror(email,'Email is required')

    }
    else if(emailval.search(/[@]/)==-1){
        success=false;
        seterror(email,'Email should contain @ symbol')
    }
    else if(emailval.search(/[.]/)==-1){
        success=false;
        seterror(email,'Email should contain "."')
    }
    else{
        setsuccess(email)
    }
    if(phonenumberval===''){
        success=false;
        seterror(phonenumber,'Phone number is required')
     }
   
    else if(phonenumberval.length<10){
        success=false;
        seterror(phonenumber,'Phone number must be 10 digits')
    }
    else if(phonenumberval.search(/[a-z\A-Z]/)==0){
        success=false;
        seterror(phonenumber,'Phone number should contain only number')
    }
    else{
        setsuccess(phonenumber)
    }
    if(passwordval===''){
        success=false;
        seterror(password,'Password is required')
    }
    else if(passwordval.length <6){
        success=false;
        seterror(password,'Password must be aleast 6 characters')
    }
    else if(passwordval.search(/[0-9]/)==-1){
        success=false;
        seterror(password,'Password should contain atleast 1 numeric character')
    }
    else if(passwordval.search(/[a-z]/)==-1){
        success=false;
        seterror(password,'Password should contain atleast 1 lowercase character')
    }
    else if(passwordval.search(/[A-Z]/)==-1){
        success=false;
        seterror(password,'Password should contain atleast 1 Uppercase character')
    }
    else if(passwordval.search(/[!\@\#\$\%\^\&\*]/)==-1){
        success=false;
        seterror(password,'Password should contain atleast 1 Special character')
    }
    else{
        setsuccess(password)
    }
    if(confirmpasswordval===''){
        success=false;
        seterror(confirmpassword,'Confirm password is required')
     }
     else if(confirmpasswordval !== passwordval){
        success=false;
        seterror(confirmpassword,'Password does not match')
     }
     else{
        setsuccess(confirmpassword)
     }
     if(dobval===''){
        success=false;
        seterror(dob,'Date of Birth is required')
     }
     else{
        setsuccess(dob)
     }

     return success;

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
const validatephone=(phonenumber)=>{
    return Number(phonenumber)
    .match(
        /^\d{10}$/
    );

}

// function onSignIn(googleUser) {
//       var profile = googleUser.getBasicProfile();
//       console.log('ID: ' + profile.getId()); // Do something with the user's ID
//       console.log('Name: ' + profile.getName()); // Do something with the user's name
//       console.log('Image URL: ' + profile.getImageUrl()); // Do something with the user's profile image URL
//       console.log('Email: ' + profile.getEmail()); // Do something with the user's email
// }





