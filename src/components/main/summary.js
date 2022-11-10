import Core from 'core/core';
import { getLocaleString } from 'utils/data';
import { getSummaryStyle } from 'utils/style';

export default class MainSummary extends Core {
  render() {
    const { usedBudget } = this.store.getState();
    const isPositiveUsedBudget = usedBudget > 0;
    const usedBudgetView = isPositiveUsedBudget ? getLocaleString(usedBudget) : 0;
    return `
    ${getSummaryStyle()}
    <div class="summary-wrapper">
      <section class="card">
        <div>현재까지</div>
        <div>₩ ${usedBudgetView}</div>
      </section>
      <section class="card">
        <div>어제</div>
        <div>₩ ${usedBudgetView}</div>
      </section>
      <section class="card">
        <div>이번주 현재까지</div>
        <div>₩ ${usedBudgetView}</div>
      </section>
      <section class="card">
        <div>지난주</div>
        <div>₩ ${usedBudgetView}</div>
      </section>
    </div>
    `;
  }
}
