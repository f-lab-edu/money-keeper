import 'reset.css';
import 'components/app';

class App {
  constructor($target) {
    this.$target = $target;
    this.$target.innerHTML = '<style>#app {height:100%}</style><main-app></main-app>';
  }
}

new App(document.querySelector('#app'));
