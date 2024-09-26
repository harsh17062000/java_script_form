function data(){
    let selectedname = document.querySelector('#name');
    let name = selectedname.value;
    let selectedage = document.querySelector('#age');
    let age = selectedage.value;
    console.log(name);
    console.log(age);
    if(name === ""){
        window.alert("please enter your name");
        return false;
    }
    if(age === ""){
        window.alert("please enter your age")
    }
    return false;
}