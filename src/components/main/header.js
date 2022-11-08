import TimeIcon from 'components/icon/time';
import WalletIcon from 'components/icon/wallet';
import Core from 'core/core';
import { getLocaleString } from 'utils/data';
import { getHeaderStyle } from 'utils/style';

export default class MainHeader extends Core {
  initTags() {
    this.defineTag(WalletIcon, 'wallet-icon');
    this.defineTag(TimeIcon, 'time-icon');
  }

  render() {
    const { remainingBudget, usedBudget } = this.store.getState();
    const remainingBudgetPercent = Math.floor((usedBudget / remainingBudget) * 100);
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
