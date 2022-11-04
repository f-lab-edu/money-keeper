import { createViewTemplate } from 'utils/template';
import Core from 'views/core';

export default class SummaryView extends Core {
  constructor({ model }) {
    super();
    this.model = model;
    model.subscribe(this.update.bind(this));
    this.template = `
    <div slot="keeper">
      <span class="count">${this.model.getMoney()}</span>
    </div>
    `;
  }

  update() {
    this.$('.count').innerText = this.model.getMoney();
  }

  setShadow(self) {
    this.shadow = self;
  }

  getTemplate() {
    return this.template;
  }

  render() {
    createViewTemplate(this, this.shadow);
  }
}
