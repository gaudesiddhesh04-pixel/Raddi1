// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {

        const targetId = this.getAttribute("href");

        if(targetId.startsWith("#")){
            e.preventDefault();
            const target = document.querySelector(targetId);
            if(target){
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }

    });
});


// OPEN SELL POPUP
function openForm(){
document.getElementById("sellPopup").style.display="flex";
}

// CLOSE SELL POPUP
function closeForm(){
document.getElementById("sellPopup").style.display="none";
}

// SHOW LOGIN POPUP
function showLoginPopup(){
document.getElementById("loginPopup").style.display="flex";
}

// CLOSE LOGIN POPUP
function closeLoginPopup(){
document.getElementById("loginPopup").style.display="none";
}