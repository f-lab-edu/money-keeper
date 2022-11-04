import { summaryView } from 'views/views';

export default class MainSummary extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.view = summaryView;
    this.view.setShadow(this);

    this.render();
  }

  render() {
    this.view.render();
  }
}

customElements.define('main-summary', MainSummary);
