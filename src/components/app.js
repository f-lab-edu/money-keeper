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
    this.defineTag(FloatingButton, 'floating-button');
  }

  render() {
    return `
    ${getAppStyle()}
    <div class="main-wrapper">
      <div class="mobile-view">
        <main-header></main-header>
        <main-summary></main-summary>
        <floating-button></floating-button>
      </div>
    </div>
  `;
  }
}

customElements.define('main-app', MainApp);
