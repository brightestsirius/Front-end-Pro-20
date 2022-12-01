var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var App = React.createElement(
  'div',
  null,
  'Hello, world'
);

root.render(App);