 const hamburger = document.querySelector("#menu");
 console.log(hamburger);
 
 const navMenu = document.querySelector(".m-nav");
 console.log(navMenu);
 

 hamburger.addEventListener("click",()=>{
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
 });