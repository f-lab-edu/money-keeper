import KeeperView from 'components/keeper.view';
import MoneyView from 'components/money.view';
import MoneyModel from 'models/money.model';

const moneyModel = new MoneyModel();
export const moneyView = new MoneyView({ model: moneyModel });
export const keeperView = new KeeperView({ model: moneyModel });
