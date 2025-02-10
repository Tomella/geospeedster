import config from "./config.js";

let lastShown = null;
let target = document.querySelector("#target");
let selector = document.querySelector("services-available");

var loadDetails = async (name, display) => {
    // Are we already showing this one?
    if(lastShown == name) {
        return; 
    }

    target.innerHTML = "<span class='message'>Fetching data...</span>";
    
    selector.setAttribute("active", name);

    let root = await fetch("list/" + name);
    let data = await root.json();

    target.innerHTML = "";
    if (data && data.name) {
        switch (data.type) {
            case config.SERVICE_TYPE_DIRECTORY:
                let source = document.createElement("services-directory");
                target.appendChild(source);
                source.setAttribute("name", data.name + " (" + data.size + ")");
                source.children = data.children;
            case config.SERVICE_TYPE_FILE:
        }
    } else {
        target.innerHTML = "No data fetched";
        target.classList.add("error")
    }
    lastShown = name;
}

let root = await fetch("available");
let data = await root.json();
selector.data = data;

// It's possible we already have a hash
let hash = location.hash.substring(1);
if(hash) {
    let match = data.find(item => item.name == hash);
    if(match) {
        loadDetails(match.name, match.display);
    }
}

selector.addEventListener('servicesclick', ev => {    
    let name = ev.detail.name;
    let title = ev.detail.display;
    document.title = title;
    loadDetails(name, title);
});
