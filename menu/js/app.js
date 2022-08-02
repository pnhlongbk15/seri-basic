// get element
const secDish = document.querySelector('.section-dish');
const buttons = document.querySelectorAll('.filter-btn');

const form = (id,img,title,price,desc)=>{
    return `
        <article class="dish" data-id=${id}>
            <img src=${img} alt=${title} class="dish-figure">
            <div class="dish-info">
                <div class="header">
                    <h4>${title}</h4>
                    <h4>${price}</h4>
                </div>
                <div class="description">${desc}</div>
            </div>
        </article>
    `
}

// inital page
function addFoods(menu){
    secDish.innerHTML = '';
    menu.forEach(item => {
        secDish.insertAdjacentHTML('beforeend',form(item.id,item.img,item.title,item.price,item.desc));
    })
}
document.addEventListener('DOMContentLoaded', addFoods(menu));

// setting button
[...buttons].forEach(button => {

    button.addEventListener('click', ()=>{
        if (button.dataset.sign === "all") {
            addFoods(menu);
        } else {
            let filter = menu.filter(item => item.category === button.dataset.sign)
            addFoods(filter);
        }  
    })
})

