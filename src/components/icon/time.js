import Icon from 'core/icon';
import { getResetStyle } from 'utils/style';

export default class TimeIcon extends Icon {
  render() {
    const w = this.w || 10;
    const h = this.h || 10;
    const fill = this.fill || 'black';
    return `
    ${getResetStyle()}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width=${w} height=${h} fill=${fill}>
      <path d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
    </svg>
  `;
  }
}