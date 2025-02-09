const template = document.createElement('template');

template.innerHTML = `
<style>
    .kids {
         margin-left: 30px;
    } 
    
    .directory {
        margin-left: 30px;
    }
    span {
        position:relative;
        top:-5px;
        font-size: 120%;
        font-weight: bold;
    }
</style>
<div class="directory">
    <svg    
        xmlns="http://www.w3.org/2000/svg" 
        height="24px" 
        viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z">
    </svg>
    <span></span>
    <div class="kids"></div>
</div>
`;

customElements.define('services-directory', class DirectoryElement extends HTMLElement {
    static get observedAttributes() { return ['name']; }

    $(selector) {
        return this.shadowRoot && this.shadowRoot.querySelector(selector)
    }

    constructor() {
        super();
        const root = this.attachShadow({ mode: 'open' });
        root.appendChild(template.content.cloneNode(true));
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        switch (attr) {
            case "name": this.$("span").innerHTML = newValue;
                break;
        }
    }

    set children(list) {
        if (list && list.length) {
            list.forEach(item => {
                let source = null;
                switch (item.type) {
                    case "directory":
                        let target = this.$("div");
                        source = document.createElement("services-directory");
                        target.appendChild(source);
                        source.setAttribute("name", item.name + " (" + item.size + ")");
                        source.children = item.children;
                        break;
                    case "file":
                        let kids = this.$(".kids");
                        source = document.createElement("services-file");
                        kids.appendChild(source);
                        source.setAttribute("name", item.name);
                        source.setAttribute("title", item.size);
                        break;
                }
            })
        }
    }
});