// ****** SELECT ITEMS **********
const form = document.querySelector('.grocery-form');
const alert = document.querySelector('.alert');
const inGrocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.goods-container')
const goods = document.querySelector('.goods-list');
const clearBtn = document.querySelector('.clear-btn');
// edit option
let editFlag = false;
let editElement;
let editID = "";
// ****** EVENT LISTENERS **********
form.addEventListener('submit',addItem);

// ****** FUNCTIONS **********

// add item
function addItem(e) {
    e.preventDefault();
    const iptedValue = inGrocery.value;
    const id = new Date().getTime().toString();
    if (iptedValue !== "" && !editFlag) {
        const formEle = (id,name) => {
            return `
                <article class="goods-item" data-id=${id}>
                    <p class="title">${name}</p>
                    <div class="btn-container">
                        <button class="edit-btn">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="delete-btn">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </article>
                `
        }
        goods.insertAdjacentHTML('afterbegin', formEle(id,iptedValue));

        // ad event listeners to both buttons
        const element = document.querySelector(`[data-id='${id}']`);
        const deleteBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edit-btn');
        deleteBtn.addEventListener('click',deleteItem);
        editBtn.addEventListener('click',editItem);

        addToLocalStorage(id, iptedValue);
        getBackToDefault();
    } else if (iptedValue !== "" && editFlag) {
        editElement.innerHTML = iptedValue;
        editLocalStorage(editID,iptedValue)
        announce('edit')
        getBackToDefault();
    }
}


// ****** LOCAL STORAGE **********
function addToLocalStorage(id,value){
    console.log(id)
    const goods = {id,value};
    console.log(goods )
    let listGoods = getLocalStorage();
    listGoods.push(goods)
    localStorage.setItem('list',JSON.stringify(listGoods));
}

function getLocalStorage(){
    return localStorage.getItem('list')
        ? JSON.parse(localStorage.getItem('list')) : [];
}

function editLocalStorage(id, value){
    let listGoods = getLocalStorage();
    
    listGoods = listGoods.map(goods => {
        if (goods.id === id) {
            goods.value = value
        }
        return goods;
    })
    localStorage.setItem('list', JSON.stringify(listGoods));
}

function removeFromLocalStorage(id){
    let listGoods = getLocalStorage();
    let newList = listGoods.filter(goods => goods.id !== id);
    localStorage.setItem('list', JSON.stringify(newList));
}

function clearLoadStorage(){
    localStorage.removeItem('list');
}
// ****** SETUP ITEMS **********
