export default class Store {
  // constructor({ state = {}, reducer }) {
  //   this.state = state;
  //   this.reducer = reducer;
  //   this.observers = new Set();
  // }
  constructor({ state = {} }) {
    this.state = state;
    this.observers = new Set();
  }

  subscribe(observer) {
    this.observers.add(observer);
    return this.unsubscribe.bind(this, observer);
  }

  unsubscribe(observer) {
    this.observers.delete(observer);
  }

  clearAllObservers() {
    this.observers.clear();
  }

  notify() {
    this.observers.forEach((observer) => observer());
  }

  // dispatch(action) {
  //   this.state = this.reducer(this.state, action);
  //   this.notify();
  // }

  dispatch(name, payload) {
    this.state = { ...this.state, count: payload };
    this.notify();
  }

  getState() {
    return this.state;
  }
}
