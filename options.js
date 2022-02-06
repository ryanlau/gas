enabled_sites = chrome.storage.local.get("sites", (sites) => {
    sites.sites.forEach((site) => {
        console.log(site);
        document.getElementById(site).checked = true;
    })
})

eles = document.querySelectorAll("input[type='checkbox']")

eles.forEach(ele => {
    ele.addEventListener('change', () => {
        enabled_sites = []

        document.querySelectorAll("input[type='checkbox']").forEach(ele => {
            if (ele.checked) {
                enabled_sites.push(ele.id)
            }
        })

        chrome.storage.local.set({ "sites": enabled_sites })
    })
})
