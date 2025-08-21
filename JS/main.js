const chart = document.getElementById('chart').getContext('2d');

const Xvalues=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct']
// create a new chart instance

new Chart("chart",{
    type:'bar',
    data:{
        labels: Xvalues,

        datasets: [
            {
                label: 'BTC',
                data: [29374, 33537, 49631, 59828, 36604, 3357, 39974, 48874, 4855, 61004],
                backgroundColor: 'red',
                borderWidth:2
            },
            {
                label: 'ETH',
                data: [31500, 41000, 88800, 26000, 46000, 3357, 5000, 3000, 25000, 49000],
                backgroundColor: 'blue',
                borderWidth:2
            }
        ]
    },
    options:{
        responsive:true,
        title:{
            display:true,
            text:"BTC & ETH Price Variations",
            fontSize:'18',
            fontFamily:'Poppins'
        }
    }
})


const menu=document.getElementById('menu-btn');
const aside=document.querySelector('aside');
const close=document.getElementById('close-btn');

menu.addEventListener("click",()=>{
    aside.classList.add("view")
})

close.addEventListener("click",()=>{
    aside.classList.remove('view')
})


// CHANGE THEME

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.querySelector('body').classList.toggle('dark-theme');
    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
})