const wrap = document.querySelector('.wrap');
let checkTimer;

function getDeadline(deadline){
    const [fullDate,fullTime] = deadline.split('-')
    if (fullDate) {
        const [date,month,year] = fullDate.split('/');
        const [hours,minutes] = fullTime.split(':');
        deadline = new Date(year,month-1,date,hours,minutes);

        checkTimer = new Date().getTime() - deadline.getTime();
    }

    return {
        day:days[deadline.getDay()],
        date:deadline.getDate(),
        month:months[deadline.getMonth()],
        year:deadline.getFullYear(),
        hours:deadline.getHours(),
        minustes:deadline.getMinutes()
    }
}


function showProduct (dataProducts) {
    const form = (data)=>{
        const timer = getDeadline(data.deadline);
        return `
            <section class="gift-box" data-id = ${data.id}>
                <img src= ${data.src} alt="" class="gift-img"/>
                <div class="gift-info">
                    <h1 class="title">${data.title}</h1>
                    <h4 class="deadline">giveaway ends on ${timer.day},${timer.date} ${timer.month} ${timer.year} ${timer.hours}:${timer.minustes}</h4>
                    <p class="desc">${data.desc}</p>
                    <div class="countdown">
                        <div class="format">
                            <div><span data-format="days"></span>days</div>
                            <div><span data-format="hours"></span>hours</div>
                            <div><span data-format="mins"></span>mins</div>
                            <div><span data-format="secs"></span>secs</div>
                        </div>
                    </div>
                </div>
            </section>
        `
    }
    // add element to page
    dataProducts.forEach(data => {
        wrap.insertAdjacentHTML('beforeend',form(data))
    });
}


document.addEventListener("DOMContentLoaded",() => {
    showProduct(dataProducts);
    showCountdown()
});
