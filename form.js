function run(){
    let name = document.querySelector("#name").value;
    let age = document.querySelector("#age").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    if(name === "")
    {
        window.alert("please enter your name");
        return false;
    }
    if(age === "")
        {
            window.alert("please enter your age");
            return false;
        }
    if(email === "")
    {
        window.alert("please enter your email");
        return false;
    }
    if(password === "")
        {
            window.alert("please enter your password");
            return false;
        }
    
    return false;
}