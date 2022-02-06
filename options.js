enabled_sites = chrome.storage.local.get("sites", (sites) => {
  sites.sites.forEach((site) => {
    document.getElementById(site).checked = true;
  });
});

settings = chrome.storage.local.get("settings", (settings) => {
  settings.settings.forEach((setting) => {
    document.getElementById(setting).checked = true;
  });
});

eles = Array.from(document.querySelectorAll("input[type='checkbox']"));
settingEles = eles.slice(0, 1);
siteEles = eles.slice(1);

settingEles.forEach((ele) => {
  ele.addEventListener("change", () => {
    settings = [];

    Array.from(document.querySelectorAll("input[type='checkbox']"))
      .slice(0, 1)
      .forEach((ele) => {
        if (ele.checked) {
          settings.push(ele.id);
        }
      });

    chrome.storage.local.set({ settings: settings });
  });
});

siteEles.forEach((ele) => {
  ele.addEventListener("change", () => {
    enabled_sites = [];

    Array.from(document.querySelectorAll("input[type='checkbox']"))
      .slice(1)
      .forEach((ele) => {
        if (ele.checked) {
          enabled_sites.push(ele.id);
        }
      });

    chrome.storage.local.set({ sites: enabled_sites });
  });
});
