import {sayHi} from './messages';
import {displaySloth} from './imageDisplay';
import {displayButton} from './button';
import './hot';

sayHi();

displaySloth();
displayButton();

if (module.hot) {
  module.hot.accept('./hot');
}
