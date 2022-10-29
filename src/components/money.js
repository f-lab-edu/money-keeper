import createTemplate from 'utils/template';

export default class AppMoney extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.template = '<slot name="money"></slot>';
    this.render();
  }

  getTemplate() {
    return this.template;
  }

  render() {
    createTemplate(this);
  }
}

customElements.define('app-money', AppMoney);
