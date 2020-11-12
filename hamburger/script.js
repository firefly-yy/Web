const btn = document.getElementById('btn')
const nav = document.getElementById('nav')

btn.addEventListener('click' , () => {
    //将id='nav'变为'nav.active'
    nav.classList.toggle('active') 
})