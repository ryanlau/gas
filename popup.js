let selectMenu = document.getElementById("select-menu");

chrome.storage.local.get(["emails"], (val) => {
  let emails = val["emails"];
  emails.forEach((email, idx) => {
    let opt = document.createElement("option");
    opt.value = idx;
    opt.innerHTML = email;
    selectMenu.add(opt);
  });
});

chrome.storage.local.get(["email"], (val) => {
  let idx = val["email"];
  selectMenu.value = idx;
});

selectMenu.addEventListener("change", () => {
  chrome.storage.local.set({ email: selectMenu.value });

  chrome.storage.local.get("settings", (res) => {
    let settings = res.settings;

    if (settings.indexOf("auto-reload") > -1) {
      chrome.storage.local.get("sites", (res) => {
        let sites = res.sites;

        chrome.tabs.query({}, (tabs) => {
          tabs.forEach((tab) => {
            let url = tab.url;
            let id = tab.id;
            sites.forEach((site) => {
              if (url.includes(site + ".google.com")) {
                chrome.storage.local.get("email", (val) => {
                  emailIdx = val["email"];
                  regex = new RegExp("/" + emailIdx + "/");
                  if (url.includes("/u/") && url.match(regex) == null) {
                    newUrl = url.replace(/[0-9]/, emailIdx);
                    chrome.tabs.update(id, { url: newUrl });
                  }
                });
              }
            });
          });
        });
      });
    }
  });
});

document.querySelector("#options-button").addEventListener("click", () => {
  chrome.runtime.openOptionsPage();
});
