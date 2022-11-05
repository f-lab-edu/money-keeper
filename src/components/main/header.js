import Core from 'core/core';
// import { budget } from 'store/budget';
import { getHeaderStyle } from 'utils/style';
import { getLocaleString } from 'utils/utils';

export default class MainHeader extends Core {
  // handleCounter() {
  //   const { remainBudget } = this.store.getState();
  //   this.store.dispatch(budget(remainBudget + 1));
  // }

  // connectedCallback() {
  // this.$('.count-button').addEventListener('click', this.handleCounter.bind(this));
  // }

  render() {
    const { remainBudget, useBudget } = this.store.getState();
    const remainBudgetPercent = 100 - (remainBudget * useBudget) / 100;
    return `
    ${getHeaderStyle()}
    <div class="header-wrapper">
      <div class="budget-wrapper">
        <section class="remain-budget-percent">${remainBudgetPercent}%</section>
        <section class="remain-budget">₩ ${getLocaleString(remainBudget)} 남음</section>
        <div class="use-wrapper">
          <span class="use-budget">₩ ${getLocaleString(useBudget)}</span>
          <span class="remain-day">일</span>
        </div>
      </div>
    </div>
  `;
  }
}
