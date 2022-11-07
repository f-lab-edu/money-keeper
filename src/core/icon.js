import Core from 'core/core';

export default class Icon extends Core {
  static get observedAttributes() {
    return ['w', 'h', 'fill'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'w') {
      this.w = newValue;
      this.update();
    }
    if (name === 'h') {
      this.h = newValue;
      this.update();
    }
    if (name === 'fill') {
      this.fill = newValue;
      this.update();
    }
  }
}
