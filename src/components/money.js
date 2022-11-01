import { moneyView } from 'views/views';

export default class AppMoney extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.view = moneyView;
    this.view.setShadow(this);

    this.render();
  }

  connectedCallback() {
    this.view.callback();
  }

  render() {
    this.view.render();
  }
}

customElements.define('app-money', AppMoney);
