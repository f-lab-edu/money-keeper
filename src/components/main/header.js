import Core from 'core/core';
// import { budget } from 'store/budget';
import { getLocaleString } from 'utils/data';
import { getHeaderStyle } from 'utils/style';

export default class MainHeader extends Core {
  // handleCounter() {
  //   const { remainingBudget } = this.store.getState();
  //   this.store.dispatch(budget(remainingBudget + 1));
  // }

  // connectedCallback() {
  // this.$('.count-button').addEventListener('click', this.handleCounter.bind(this));
  // }

  render() {
    const { remainingBudget, usedBudget } = this.store.getState();
    const remainingBudgetPercent = 100 - (remainingBudget * usedBudget) / 100;
    return `
    ${getHeaderStyle()}
    <div class="header-wrapper">
      <div class="budget-wrapper">
        <section class="remain-budget-percent">${remainingBudgetPercent}%</section>
        <section class="remain-budget">₩ ${getLocaleString(remainingBudget)} 남음</section>
        <div class="use-wrapper">
          <span class="use-budget">₩ ${getLocaleString(usedBudget)}</span>
          <span class="remain-day">일</span>
        </div>
      </div>
    </div>
  `;
  }
}
