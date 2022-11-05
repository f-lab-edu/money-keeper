import Core from 'core/core';
import { budget } from 'store/budget';
import { getHeaderStyle } from 'utils/style';

export default class MainHeader extends Core {
  handleCounter() {
    const { count } = this.store.getState();
    // this.store.dispatch('count', count + 1);
    this.store.dispatch(budget(count + 1));
  }

  connectedCallback() {
    this.$('.count-button').addEventListener('click', this.handleCounter.bind(this));
  }

  render() {
    const { count } = this.store.getState();
    return `
    ${getHeaderStyle()}
    <div class="header-wrapper">
      <button class="count-button"></button>
      <span class="count">${count}</span>
    </div>
  `;
  }
}
