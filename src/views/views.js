import HeaderView from 'components/main/header.view';
import SummaryView from 'components/main/summary.view';
import MoneyModel from 'models/money.model';

const moneyModel = new MoneyModel();
export const headerView = new HeaderView({ model: moneyModel });
export const summaryView = new SummaryView({ model: moneyModel });
