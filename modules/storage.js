

// Function to set cookie
function setCookie(cookieName, cookieValue, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setDate(date.getDate() + days); // Add days to the current date
        expires = "; expires=" + date.toUTCString(); // Convert the date to UTC string format
    }
    document.cookie = cookieName + "=" + (cookieValue || "") + expires + "; path=/";
}


// Function to get cookie value by name
function getCookie(cookieName) {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

function setinlocalstorage(key, value){
    localStorage.setItem(key, value);
}

function getlocalstorage(value){
    localStorage.getItem(value);

}




export{setCookie,getCookie,setinlocalstorage, getlocalstorage};
