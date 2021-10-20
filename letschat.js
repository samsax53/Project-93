function rmvAlert() {
    document.getElementById("alertH4").style.display = "none";
}

function addUserName() {
    userName = document.getElementById("userNameInput").value;
    if(userName == ""){
        document.getElementById("alertH4").style.display = "inline-block";
        setTimeout(rmvAlert, 2000)
    } else {
        localStorage.setItem("lcUserName", userName);
        document.getElementById("userNameInput").value = "";
        window.location = "alert.html";
    }
}