import { keeperView } from 'views/views';

export default class AppKeeper extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.view = keeperView;
    this.view.setShadow(this);

    this.render();
  }

  // connectedCallback() {
  //   this.view.callback();
  // }

  render() {
    this.view.render();
  }
}

customElements.define('app-keeper', AppKeeper);
