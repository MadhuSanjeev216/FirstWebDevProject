function submitForm(){
    console.log('inside the submit form');
    let firstName = document.getElementById('firstName');
    console.log('the value inside firstName: '+firstName)
    if(firstName.value.length == 0){
        alert('Please enter a first name');
        return false;
    }else{
        window.location.href="success.html";
        return false;
    }
}
function init(){
    let theForm = document.getElementById('theForm');
    theForm.onsubmit = submitForm;
}
window.onload = init;