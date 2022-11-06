import TimeIcon from 'components/icon/time';
import WalletIcon from 'components/icon/wallet';
import Core from 'core/core';
// import { budget } from 'store/budget';
import { getLocaleString } from 'utils/data';
import { getHeaderStyle } from 'utils/style';

export default class MainHeader extends Core {
  initTags() {
    this.defineTag(WalletIcon, 'wallet-icon');
    this.defineTag(TimeIcon, 'time-icon');
  }
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
        <section class="remainingbudget-percent">${remainingBudgetPercent}%</section>
        <section class="remainingbudget">₩ ${getLocaleString(remainingBudget)} 남음</section>
        <div class="used-wrapper">
          <div>
            <button>
              <wallet-icon w="15" h="15" fill="white"></wallet-icon>
            </button>
            <span class="used-budget">₩ ${getLocaleString(usedBudget)}</span>
          </div>
          <div>
            <button>
              <time-icon w="15" h="15" fill="white"></time-icon>
            </button>
            <span class="remainingday">0 일</span>
          </div>
        </div>
      </div>
    </div>
  `;
  }
}
