import Core from 'core/core';
import { budget } from 'store/budget';
import { getHeaderStyle } from 'utils/style';

export default class MainHeader extends Core {
  handleCounter() {
    const { remainBudget } = this.store.getState();
    this.store.dispatch(budget(remainBudget + 1));
  }

  connectedCallback() {
    this.$('.count-button').addEventListener('click', this.handleCounter.bind(this));
  }

  render() {
    const { remainBudget } = this.store.getState();
    return `
    ${getHeaderStyle()}
    <div class="header-wrapper">
      <button class="count-button"></button>
      <span class="count">${remainBudget}</span>
    </div>
  `;
  }
}
