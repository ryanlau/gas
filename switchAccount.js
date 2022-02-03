let regex;
let idx;
let url = window.location.href

chrome.storage.local.get(["email"], (val) => {
    idx = val["email"];
    regex = new RegExp("\/" + idx + "\/")

    console.log(window.location)

    if (url.includes("/u/") && url.match(regex) == null) {
        newUrl = url.replace(/[0-9]/, idx);
        document.location.href = newUrl;
    }
})
