import Observable from 'core/observable';

export default class MoneyModel extends Observable {
  constructor() {
    super();
    this.money = 0;
  }

  getMoney() {
    return this.money;
  }

  setMoney(money) {
    this.money = money;
    this.notify(this.money);
  }
}
