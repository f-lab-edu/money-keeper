import Core from 'core/core';
import { getSummaryStyle } from 'utils/style';

export default class MainSummary extends Core {
  render() {
    const { remainBudget } = this.store.getState();
    return `
    ${getSummaryStyle()}
    <div class="summary-wrapper">
      <button class="count-button"></button>
      <span class="count">${remainBudget}</span>
    </div>
    `;
  }
}
