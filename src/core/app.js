import createTemplate from 'utils/template';
import moneyView, { keeperView } from 'views/views';

export default class MainApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.template = `
      <app-money>
        ${moneyView.getSlot()}
      </app-money>
      <app-keeper>
        ${keeperView.getSlot()}
      </app-keeper>
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
