const set = document.querySelector(".container");
if (set){
    
    const buttons = document.querySelectorAll(".bars");
    buttons.forEach(button => {
        button.addEventListener('click', ()=>{
            set.classList.toggle("active");
        });
    });
    
}