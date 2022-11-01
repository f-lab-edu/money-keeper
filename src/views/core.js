export default class Core {
  $(query) {
    return this.shadow.shadowRoot.querySelector(query);
  }

  $$(query) {
    return this.shadow.shadowRoot.querySelectorAll(query);
  }
}
