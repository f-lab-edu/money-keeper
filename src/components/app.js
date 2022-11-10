import MainCalculator from 'components/calulator/calculator';
import FloatingButton from 'components/calulator/floatingButton';
import MainHeader from 'components/main/header';
import MainSummary from 'components/main/summary';
import Core from 'core/core';
import store from 'store/budget';
import { getAppStyle } from 'utils/style';

export default class MainApp extends Core {
  initTags() {
    this.defineTag(MainHeader, 'main-header', { store });
    this.defineTag(MainSummary, 'main-summary', { store });
    this.defineTag(MainCalculator, 'main-calculator', { store });
    this.defineTag(FloatingButton, 'floating-button');
  }

  goToCalculator() {
    this.$('.calculator-wrapper').style.display = 'block';
  }

  connectedCallback() {
    this.$('.floating-button').addEventListener('click', this.goToCalculator.bind(this));
  }

  render() {
    return `
    ${getAppStyle()}
    <div class="app-wrapper">
      <div class="mobile-view">
        <div class="calculator-wrapper">
          <main-calculator></main-calculator>
        </div>
        <div class="main-wrapper">
          <main-header></main-header>
          <main-summary></main-summary>
          <floating-button class="floating-button"></floating-button>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('main-app', MainApp);
