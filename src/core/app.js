import { createTemplate } from 'utils/template';

export default class MainApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.template = `
      <app-money></app-money>
      <app-keeper></app-keeper>
    `;
    this.render();
  }

  getTemplate() {
    return this.template;
  }

  render() {
    createTemplate(this);
  }
}

customElements.define('main-app', MainApp);
