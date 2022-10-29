export default class KeeperView {
  constructor({ model }) {
    this.model = model;
    this.slot = `
      <div slot="keeper">
        keeper ${this.model.getMoney()}
      </div>
    `;
  }

  getSlot() {
    return this.slot;
  }
}
