import Core from 'core/core';
import { getSummaryStyle } from 'utils/style';

export default class MainSummary extends Core {
  render() {
    const { count } = this.store.getState();
    return `
    ${getSummaryStyle()}
    <div class="summary-wrapper">
      <button class="count-button"></button>
      <span class="count">${count}</span>
    </div>
    `;
  }
}
