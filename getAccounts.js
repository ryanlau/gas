emailDivs = document.getElementsByClassName("wLBAL")

let emails = [];


for (let emailDiv of emailDivs) {
    emails.push(emailDiv.innerHTML)
}

console.log(emails)

chrome.storage.local.set({"emails": emails}, () => {
    console.log("saved")
})
