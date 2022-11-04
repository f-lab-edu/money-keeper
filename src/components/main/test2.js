import Core from 'core/core';

export default class MainTest2 extends Core {
  onclick() {
    const currentClickCount = this.getState('clickCount') || 0;
    this.setState('clickCount', currentClickCount + 1);
  }

  connectedCallback() {
    this.shadowRoot.querySelector('button').addEventListener('click', this.onclick);
  }

  render() {
    const count = this.getState('clickCount') || 0;
    return `Current click count: ${count} <button>Increase!</button>`;
  }
}

customElements.define('main-test2', MainTest2);
