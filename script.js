const menuBtn = document.querySelector('.hamburger-lines');
const menu = document.querySelector('.menu2');
const line1 = document.getElementById('line1')
const line2 = document.getElementById('line2')
const line3 = document.getElementById('line3')


menuBtn.addEventListener('click', function(){
    if(menu.classList.contains('transform-menu2')){
        menu.classList.remove('transform-menu2')
        line1.classList.remove('transform-line1')
        line2.classList.remove('transform-line2')
        line3.classList.remove('transform-line3')        
    }else{
        menu.classList.add('transform-menu2')
        line1.classList.add('transform-line1')
        line2.classList.add('transform-line2')
        line3.classList.add('transform-line3')
    }
})   
const navbar = document.querySelector('#header')

window.addEventListener('scroll', function(){
    const scrollHeight = this.window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
   if(scrollHeight > navHeight){
     navbar.classList.add('fixed-nav')
   }else{
     navbar.classList.remove('fixed-nav')
   }
 
   console.log(navbar.getBoundingClientRect())
 })
 
 
