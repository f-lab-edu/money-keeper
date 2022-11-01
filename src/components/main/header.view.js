import { getHeaderStyle } from 'utils/style';
import { createViewTemplate } from 'utils/template';
import Core from 'views/core';

export default class HeaderView extends Core {
  constructor({ model }) {
    super();
    this.model = model;
    this.model.subscribe(this.update.bind(this));
    this.template = `
      ${getHeaderStyle()}
      <div class="header-wrapper">
        <button class="count-button"></button>
        <span class="count">${this.model.getMoney()}</span>
      </div>
    `;
  }

  update() {
    this.$('.count').innerText = this.model.getMoney();
  }

  handleCount() {
    this.model.setMoney(3);
  }

  callback() {
    this.$('.count-button').addEventListener('click', this.handleCount.bind(this));
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
