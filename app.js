
// $(document).ready(function () {
//     $("#link").click(function (e) {
//         e.preventDefault();
          
//         window.location.href 
//             = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
//     });
// });

(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode1");
    })
   
    
})();




