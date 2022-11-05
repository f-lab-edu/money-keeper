import Core from 'core/core';
import { getSummaryStyle } from 'utils/style';
import { getLocaleString } from 'utils/utils';

export default class MainSummary extends Core {
  render() {
    const { useBudget } = this.store.getState();
    return `
    ${getSummaryStyle()}
    <div class="summary-wrapper">
      <section class="card">
        <div>오늘 현재까지</div>
        <div>₩ ${getLocaleString(useBudget)}</div>
      </section>
      <section class="card">
        <div>어제</div>
        <div>₩ ${getLocaleString(useBudget)}</div>
      </section>
      <section class="card">
        <div>이번주 현재까지</div>
        <div>₩ ${getLocaleString(useBudget)}</div>
      </section>
      <section class="card">
        <div>지난주</div>
        <div>₩ ${getLocaleString(useBudget)}</div>
      </section>
    </div>
    `;
  }
}
