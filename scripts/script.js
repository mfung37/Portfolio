const darkThemeFile = "css/dark-theme.css";
const lightThemeFile = "css/light-theme.css";
const aiDefault = "css/ai-default.css";
const aiOther = "css/ai-other.css";

function toggleStyle(){
    let theme = document.getElementById("main-theme");
    let filename = theme.getAttribute("href");

    if(filename == darkThemeFile || filename == aiDefault){
        if(filename == darkThemeFile)
            filename = lightThemeFile;
        else
            filename = aiOther;
    } else if(filename == lightThemeFile){
        filename = darkThemeFile;
    } else {
        filename = aiDefault;
    }

    theme.setAttribute("href", filename);

    if(filename == darkThemeFile || filename == aiDefault)
        localStorage.setItem("theme", "default");
    else
        localStorage.setItem("theme", "other");

    console.log(filename);
}

// actions to do on startup of the page
window.onload = function(){
    let themeState = localStorage.getItem("theme");

    if(themeState != null){
        let theme = document.getElementById("main-theme");
        let filename = theme.getAttribute("href");

        if(filename == darkThemeFile || filename == lightThemeFile){
            if(themeState == "default"){
                theme.setAttribute("href", darkThemeFile);
            } else {
                theme.setAttribute("href", lightThemeFile);
            }
        } else {
            if(themeState == "default"){
                theme.setAttribute("href", aiDefault);
            } else {
                theme.setAttribute("href", aiOther);
            }
        }
    }
}
