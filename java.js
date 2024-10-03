function data(){
    let selectedname = document.querySelector('#name');
    let name = selectedname.value;
    let selectedage = document.querySelector('#age');
    let age = selectedage.value;
    let selectedemail = document.querySelector('#email');
    let email = selectedemail.value;
    let selectedmobile = document.querySelector('#mobile');
    let mobile = selectedmobile.value;
    let selectedpassword = document.querySelector('#password');
    let password = selectedpassword.value;
    let selectedcpassword = document.querySelector('#cpassword');
    let cpassword = selectedcpassword.value;
    console.log(mobile);
    console.log(name);
    console.log(age);
    console.log(email);
    console.log(password);
    console.log(cpassword);
    if(name === ""){
        document.querySelector('#errorname').innerHTML = "please enter your name";
        let selectname = document.querySelector('#name');
        selectname.style.borderColor = "red";
        selectname.style.outlineColor = "red";

        return false;
    }
    if(age === ""){
        document.querySelector('#errorage').innerHTML = "please enter your age";
        let selectage = document.querySelector('#age');
        selectage.style.borderColor = "red";
        selectage.style.outlineColor = "red";
        return false;

    }

    if(email === ""){
        document.querySelector('#erroremail').innerHTML = "please enter your email id";
        let selectemail = document.querySelector('#email');
        selectage.style.borderColor = "red";
        selectage.style.outlineColor = "red";
        return false;

    }

    else if(!(email.includes('@')  && email.includes(".com"))){
        document.querySelector('#erroremail').innerHTML = "please enter your email";
        let selectname = document.querySelector('#email');
        selectname.style.borderColor = "red";
        selectname.style.outlineColor = "red";
        return false;
    }

    else if(mobile.length !== 10){
        document.querySelector('#errormobile').innerHTML = "mobile number should be 10 digit";
        let selectname = document.querySelector('#mobile');
        selectname.style.borderColor = "red";
        selectname.style.outlineColor = "red";
        return false;

    }

    else if(isNaN(mobile)){
        document.querySelector('#errormobile').innerHTML = "mobile number should be number only";
        let selectname = document.querySelector('#mobile');
        selectname.style.borderColor = "red";
        selectname.style.outlineColor = "red";
        return false;
    }

        else if(password === ""){
            document.querySelector('#errorpassword').innerHTML = "please enter your password";
            let selectname = document.querySelector('#password');
            selectname.style.borderColor = "red";
            selectname.style.outlineColor = "red";
            return false;
        }
    
    else if(!
        (
            password.match(/[1234567890]/)
            &&
            password.match(/[!@#$%^&*()_+]/)
            &&
            password.match(/[qwertyuiopasdfghjklzxcvbnm]/)
            &&
            password.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/)
        )
    ){
        document.querySelector('#password').innerHTML = "password should be strong";
        let selectname = document.querySelector('#password');
            selectname.style.borderColor = "red";
            selectname.style.outlineColor = "red";
            return false;

    }

    else if (password !== cpassword){
        window.alert("password and confirm password are not matched");
        document.querySelector('#cpassword').value = "";
        document.querySelector('#password').value = "";
        document.querySelector('#password').focus();
        return false;

    }

function s(arg){
    console.log(arg);
    let selectedinput = document.querySelector(`#${arg}`);
    console.log(selectedinput);
    selectedinput.style.borderColor = "black";
    selectedinput.style.outlineColor = "black";

    let selectederrordiv = document.querySelector(`error${arg}`);
    selectederrordiv.innerHTML = "";
}
}