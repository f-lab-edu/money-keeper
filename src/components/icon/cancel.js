import Icon from 'core/icon';
import { getResetStyle } from 'utils/style';

export default class CancelIcon extends Icon {
  render() {
    const w = this.w || 10;
    const h = this.h || 10;
    const fill = this.fill || 'black';
    return `
    ${getResetStyle()}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width=${w} height=${h} fill=${fill}><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
  `;
  }
}