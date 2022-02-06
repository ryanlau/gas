emailDivs = document.getElementsByClassName("wLBAL")

let emails = [];


for (let emailDiv of emailDivs) {
    emails.push(emailDiv.innerHTML)
}

chrome.storage.local.set({"emails": emails}, () => {
    console.log("saved")
})

window.close();
