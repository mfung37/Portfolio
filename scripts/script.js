const darkThemeFile = "css/dark-theme.css";
const lightThemeFile = "css/light-theme.css";

function toggleStyle(){
    let theme = document.getElementById("main-theme");
    let filename = theme.getAttribute("href");

    if(filename == darkThemeFile){
        filename = lightThemeFile;
    } else {
        filename = darkThemeFile;
    }

    theme.setAttribute("href", filename);

    localStorage.setItem("theme", filename);

    console.log(filename);
}

// actions to do on startup of the page
window.onload = function(){
    let filename = localStorage.getItem("theme");

    if(filename != null){
        let theme = document.getElementById("main-theme");
        theme.setAttribute("href", filename);
    }
}
