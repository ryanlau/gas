let selectMenu = document.getElementById("select-menu")
console.log(selectMenu)

chrome.storage.local.get(["emails"], (val) => {
    let emails = val["emails"];
    emails.forEach((email, idx) => {
        let opt = document.createElement("option");
        opt.value = idx;
        opt.innerHTML = email;
        selectMenu.add(opt);
    })
})

chrome.storage.local.get(["email"], (val) => {
    let idx = val["email"];
    selectMenu.value = idx;
})


selectMenu.addEventListener("change", () => {
    chrome.storage.local.set({"email": selectMenu.value}, () => {
        console.log("saved")
    })
})
