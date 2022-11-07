import CancelIcon from 'components/icon/cancel';
import DeleteLeftIcon from 'components/icon/deleteLeft';
import Core from 'core/core';
import { income, expense, inOutType } from 'store/budget';
import { getLocaleString } from 'utils/data';
import { getCalculatorStyle } from 'utils/style';

export default class MainCalculator extends Core {
  initTags() {
    this.defineTag(CancelIcon, 'cancel-icon');
    this.defineTag(DeleteLeftIcon, 'delete-left-icon');
  }

  handleDigit(event) {
    const digit = event.target.textContent;

    const { calculatorType, incomeBudget, expenseBudget } = this.store.getState();
    switch (calculatorType) {
      case 'income': {
        if (!incomeBudget) return this.store.dispatch(income(digit));
        return this.store.dispatch(income(incomeBudget.concat(digit)));
      }
      case 'expense': {
        if (!expenseBudget) return this.store.dispatch(expense(digit));
        return this.store.dispatch(expense(expenseBudget.concat(digit)));
      }
      default:
        return new Error('error');
    }
  }

  handleType(event) {
    const { classList } = event.target;

    if (classList.contains('income-button')) return this.store.dispatch(inOutType('income'));
    if (classList.contains('expense-button')) return this.store.dispatch(inOutType('expense'));
    return this.store.dispatch(inOutType('expense'));
  }

  connectedCallback() {
    this.$('.calculator-input').addEventListener('click', this.handleDigit.bind(this));
    this.$('.inout-button-wrapper').addEventListener('click', this.handleType.bind(this));
  }

  render() {
    const { calculatorType, expenseBudget, incomeBudget } = this.store.getState();
    const isExpense = calculatorType === 'expense';
    const calculatorView = getLocaleString(Number(isExpense ? expenseBudget : incomeBudget));
    return `
    ${getCalculatorStyle()}
    <div class="calculator-wrapper">
      <header class="calculator-header ${isExpense ? 'expense-background' : 'income-background'}">
        <div>
          <button>
            <cancel-icon w="20" h="20" fill="white"></cancel-icon>
          </button>
          <div class="inout-button-wrapper">
            <button class="expense-button ${isExpense ? 'selected' : ''}">지출</button>
            <button class="income-button ${!isExpense ? 'selected' : ''}">수입</button>
          </div>
        </div>
        <div class="inout-view-wrapper">
          ${isExpense ? `- ${calculatorView}` : calculatorView}
        </div>
        <div class="add-button-wrapper">
          <button class="add-button">추가하기</button>
        </div>
      </header>
      <section class="calculator-input">
        <span class="digit-wrapper">
          <button class="digit 1">1</button>
        </span>
        <span class="digit-wrapper">
          <button class="digit 2">2</button>
        </span>
        <span class="digit-wrapper">
          <button class="digit 3">3</button>
        </span>
        <span class="digit-wrapper">
          <button class="digit 4">4</button>
        </span>
        <span class="digit-wrapper">
          <button class="digit 5">5</button>
        </span>
        <span class="digit-wrapper">
          <button class="digit 6">6</button>
        </span>
        <span class="digit-wrapper">
          <button class="digit 7">7</button>
        </span>
        <span class="digit-wrapper">
          <button class="digit 8">8</button>
        </span>
        <span class="digit-wrapper">
          <button class="digit 9">9</button>
        </span>
        <span class="digit-wrapper">
          <button class="digit 10"></button>
        </span>
        <span class="digit-wrapper">
          <button class="digit 11">0</button>
        </span>
        <span class="digit-wrapper">
          <button class="digit 12">
            <delete-left-icon></delete-left-icon>
          </button>
        </span>
      </section>
    </div>
  `;
  }
}
