import createTemplate from 'utils/template';

export default class AppKeeper extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.template = '<slot name="keeper"></slot>';
    this.render();
  }

  getTemplate() {
    return this.template;
  }

  render() {
    createTemplate(this);
  }
}

customElements.define('app-keeper', AppKeeper);
