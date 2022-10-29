import MoneyModel from 'models/money.model';
import KeeperView from 'views/keeper.view';
import MoneyView from 'views/money.view';

const moneyModel = new MoneyModel();
const moneyView = new MoneyView({ model: moneyModel });
export default moneyView;
export const keeperView = new KeeperView({ model: moneyModel });
