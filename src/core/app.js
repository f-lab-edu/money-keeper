import { getAppStyle } from 'utils/style';
import { createTemplate } from 'utils/template';

export default class MainApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.template = `
      ${getAppStyle()}
      <div class="main-wrapper">
        <div class="mobile-view">
          <main-header></main-header>
          <main-summary></main-summary>
        </div>
      </div>
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
