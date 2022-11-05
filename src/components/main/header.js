import { headerView } from 'views/views';

export default class MainHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.view = headerView;
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

customElements.define('main-header', MainHeader);
