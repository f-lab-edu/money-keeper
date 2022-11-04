import 'reset.css';
import 'components/app';

class App {
  constructor($target) {
    this.$target = $target;
    this.$target.innerHTML = '<main-app></main-app>';
  }
}

new App(document.querySelector('#app'));
