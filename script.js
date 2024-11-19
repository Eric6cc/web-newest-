const sidebar = document.querySelector(".sidebar");
const button_dropdown = document.querySelector(".fa-bars");
button_dropdown.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
}); 