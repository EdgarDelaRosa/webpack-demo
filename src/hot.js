import $ from 'jquery';

let adder = 24;

if (module.hot) {
  const data = module.hot.data || {};
  if (data.adder) {
    adder = data.adder + adder;
  }

  module.hot.dispose(data => {
    data.adder = adder;
  });

  module.hot.accept();
}

$('p').text(adder);
