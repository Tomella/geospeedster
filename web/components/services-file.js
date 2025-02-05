const template = document.createElement('template');

template.innerHTML = `
<div>File</div>
`;

customElements.define('services-file', class FileElement extends HTMLElement {
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
            case "name": this.$("div").innerHTML = newValue;
                break;
        }
    }
});