import PlusIcon from 'components/icon/plus';
import Core from 'core/core';
import { getFloatingButtonStyle } from 'utils/style';

export default class FloatingButton extends Core {
  initTags() {
    this.defineTag(PlusIcon, 'plus-icon');
  }

  render() {
    return `
    ${getFloatingButtonStyle()}
    <div class="button-wrapper">
      <plus-icon w="20" h="20" fill="white"></plus-icon>
    </div>
  `;
  }
}
