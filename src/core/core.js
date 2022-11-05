import withProps from 'lib/withProps';

export default class Core extends HTMLElement {
  constructor(arg) {
    super();
    this.component = this.attachShadow({ mode: 'open' });
    const { store } = arg ?? {};
    this.store = store;
    this.initTags();

    if (this.onclick) {
      this.onclick = this.onclick.bind(this);
    }

    this.doRender();
    this.subscribe();
  }

  $(query) {
    return this.shadowRoot.querySelector(query);
  }

  $$(query) {
    return this.shadowRoot.querySelectorAll(query);
  }

  initTags() {}

  defineTag(component, tagName, payload = {}) {
    if (!this.isDefinedTag(tagName)) {
      customElements.define(tagName, withProps(component, payload));
    }
  }

  isDefinedTag(tagName) {
    return customElements.get(tagName);
  }

  connectedCallback() {}

  disconnectedCallback() {
    if (this.store) {
      this.unsubscribe();
    }
  }

  subscribe() {
    if (this.store) {
      this.unsubscribe = this.store.subscribe(this.update.bind(this));
    }
  }

  update() {
    this.doRender();
    this.connectedCallback();
  }

  doRender() {
    this.component.innerHTML = this.render();
  }
}
