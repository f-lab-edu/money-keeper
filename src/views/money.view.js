export default class MoneyView {
  constructor({ model }) {
    this.model = model;
    this.slot = `
      <div slot="money">
        money ${this.model.getMoney()}
      </div>
    `;
  }

  getSlot() {
    return this.slot;
  }
}
