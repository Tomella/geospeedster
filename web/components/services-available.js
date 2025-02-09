const template = document.createElement('template');

template.innerHTML = `
<div></div>
`;

const itemTemplate = document.createElement('template');
itemTemplate.innerHTML = `
    <style>
        span {
            padding-left: 20px;
        }
    </style>
    <span><a href="#"></a></span>
`;

customElements.define('services-available', class AvailableElement extends HTMLElement {
    $(selector) {
        return this.shadowRoot && this.shadowRoot.querySelector(selector)
    }

    constructor() {
        super();
        const root = this.attachShadow({ mode: 'open' });
        root.appendChild(template.content.cloneNode(true));

    }

    set data(data) {
        this._data = data;
        let target = this.$("div");
        if (!data || !data.length) {
            target.innerHTML = "No data is currently avaialable";
            return;
        }

        data.forEach(item => {
            let el = document.createElement('services-available-item');
            target.appendChild(el);
            el.setAttribute("name", item.name);
            el.setAttribute("display", item.display);

            el.addEventListener("servicesclick", (ev) => {
                this.dispatchEvent(new CustomEvent("servicesclick", {detail: ev.detail}));
            });
        });
    }
});


customElements.define('services-available-item', class AvailableItemElement extends HTMLElement {
    static get observedAttributes() { return ['name', 'display']; }

    $(selector) {
        return this.shadowRoot && this.shadowRoot.querySelector(selector)
    }

    constructor() {
        super();
        const root = this.attachShadow({ mode: 'open' });
        root.appendChild(itemTemplate.content.cloneNode(true));

        let a = this.$('a');
        a.addEventListener("click", (ev) => {

            this.dispatchEvent(new CustomEvent("servicesclick", {
                bubbles: true,
                detail: {name: this.getAttribute("name"), display: this.getAttribute("display")}
            }));
        });
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        let a = this.$("a");
        switch (attr) {
            case "name": a.setAttribute('href', "#" + newValue);
                break;
            case "display": a.innerHTML = newValue;
                break;
        }
    }
});
