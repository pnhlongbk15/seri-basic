function countdown(Timer){
    let numDays = Math.floor(Timer / oneDay);
    let numHours = Math.floor((Timer % oneDay) /oneHours);
    let numMinustes = Math.floor((Timer % oneHours) /oneMinustes);
    let numSecs = Math.floor((Timer % oneMinustes) /1000)

    return [numDays,numHours,numMinustes,numSecs];
}
function check(deadline){
    const [fullDate,fullTime] = deadline.split('-');
    const [date,month,year] = fullDate.split('/');
    const [hours,minutes] = fullTime.split(':');
    deadline = new Date(year,month-1,date,hours,minutes);

    checkTimer = deadline.getTime() - new Date().getTime() ;
    return checkTimer
}

function showCountdown(){
    const eleTime = document.querySelectorAll('.gift-box');
    [...eleTime].forEach(ele =>{
        dataProducts.forEach(data =>{
            if (data.id == ele.dataset.id){
                const timeShow = ele.querySelectorAll('.format > div > span');
                let checkTimer = check(data.deadline);
                let count = countdown(checkTimer);
                if (checkTimer <= 0){
                    const text = ele.querySelector('.deadline');
                    text.innerHTML = 'sorry, this giveaway has expired!'
                    text.classList.add('expired')
                }else {
                    timeShow.forEach((item,index) => {
                        item.innerHTML = count[index];
                    })
                }
            }
        })
    })
}

setInterval(showCountdown,1000)

let d = 2
let b = 2
let c = 3
const a = [{a:1,b:2}]
console.log(d)
console.log(a)
console.log(a.includes(d))
const timeShow = document.querySelectorAll('.format > div > span')
console.log(timeShow)