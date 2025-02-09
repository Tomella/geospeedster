import config from "./config.js";

let target = document.querySelector("#target");

var loadDetails = async (name, display) => {
    
    target.innerHTML = "Fetching data...";
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
}

let root = await fetch("available");
let data = await root.json();
let selector = document.querySelector("services-available");
selector.data = data;

selector.addEventListener('servicesclick', ev => {    
    loadDetails(ev.detail.name, ev.detail.display);
});
