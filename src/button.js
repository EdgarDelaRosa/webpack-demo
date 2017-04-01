import $ from 'jquery';

const displayButton = () => {
  const button = $('<button></button>', {text: 'Dont click me'});
  const body = $('body');
  body.click(()=>{
    System.import('./some-file');
  });
  button.appendTo(body);
};

export {
  displayButton
};
