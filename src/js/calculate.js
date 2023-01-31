function calculate(){
    let total;
    let price = document.getElementById('price').value;
    let quantity = document.getElementById('quantity').value;
    total = price * quantity;
    document.getElementById('total').value = total;
    return false;
}
function initSuccess(){
    let theCalForm = document.getElementById('theCalForm');
    theCalForm.onsubmit = calculate;
}
window.onload = initSuccess;