function getBackToDefault(){
    inGrocery.value = '';
    submitBtn.textContent = 'submit';
    editFlag = false;
}
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    goods.removeChild(element)
}
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    inGrocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit"
}

/* alert */
function announce(mess){
    const notification = [
        { 'mess':'add','content':'item added to the list'},
        { 'mess':'edit','content':'item edited'},
        { 'mess':'remove','content':'item removed'},
        { 'mess':'clear', 'content':'list cleared'}
    ]
    let content = notification.filter(notify => notify.mess == mess);
    alert.innerHTML = content[0].content;
    alert.style.visibility = 'visible';
    console.log(content[0].content)
    console.log(alert)

    setTimeout(()=>{
        alert.innerHTML = '';
        alert.style.visibility = 'hidden';
    },3000)
}