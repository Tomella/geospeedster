import config from "./config.js";


let target = document.querySelector("#target");

let root = await fetch("list/3d");
let data = await root.json();

if(data && data.name) {
    switch(data.type) {
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