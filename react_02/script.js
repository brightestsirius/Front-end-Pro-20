var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import User from './User.js';

var domContainer = document.querySelector("#root");
var root = ReactDOM.createRoot(domContainer);

var animalsList = ["cat", "dog", "lion"];

// const List = ({list, color, bg}) => {
//     // console.log(props); // {list: [...], color: `orange`}

//     return <ul style={{color, backgroundColor: bg}}>
//         {list.map((item, index) => <li key={index}>{item}</li>)}
//     </ul>
// }

var List = function (_React$Component) {
  _inherits(List, _React$Component);

  function List(props) {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

    _this.state = {
      list: _this.props.list,
      color: _this.props.color,
      bg: _this.props.bg
    };


    setTimeout(function () {
      _this.setState({
        list: _this.state.list.concat(["tiger"])
      });
    }, 1000);

    setTimeout(function () {
      _this.setState({
        color: "pink"
      }, function () {
        console.log(_this.state.color);
      });
    }, 2000);

    setTimeout(function () {
      var firstPart = _this.state.list.slice(0, 2);
      var secondPart = _this.state.list.slice(2);

      // this.state.list.splice(2, 0, `Anton`);

      _this.setState({
        bg: "black",
        color: "white",
        list: ["PATRON"].concat(_toConsumableArray(firstPart), ["Anton"], _toConsumableArray(secondPart), ["parrot"])
      });
    }, 3000);

    setTimeout(function () {
      _this.setState({
        list: _this.state.list.slice(0, -1)
      });
    }, 4000);
    return _this;
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      var _state = this.state,
          list = _state.list,
          color = _state.color,
          bg = _state.bg;


      return React.createElement(
        "ul",
        { style: { color: color, backgroundColor: bg } },
        list.map(function (item, index) {
          return React.createElement(
            "li",
            { key: index },
            item
          );
        })
      );
    }
  }]);

  return List;
}(React.Component);

var Friends = function (_React$Component2) {
  _inherits(Friends, _React$Component2);

  function Friends(props) {
    _classCallCheck(this, Friends);

    var _this2 = _possibleConstructorReturn(this, (Friends.__proto__ || Object.getPrototypeOf(Friends)).call(this, props));

    _this2.state = {
      list: _this2.props.list,
      bg: "transparent",
      half: false
    };


    var removeItem = setInterval(function () {
      console.log("in interval");

      _this2.setState({
        list: _this2.state.list.slice(0, -1)
      }, function () {
        if (_this2.state.list.length === Math.round(_this2.props.list.length / 2)) {
          console.log("Half!");
          _this2.setState({
            bg: "red",
            half: true
          });
        }

        if (!_this2.state.list.length) {
          clearInterval(removeItem);
          _this2.setState({
            half: false
          });
        }
      });
    }, 1000);
    return _this2;
  }

  _createClass(Friends, [{
    key: "render",
    value: function render() {
      var _state2 = this.state,
          list = _state2.list,
          bg = _state2.bg,
          half = _state2.half;


      return React.createElement(
        React.Fragment,
        null,
        list.length ? React.createElement(
          "ul",
          { style: { background: bg } },
          list.map(function (item, index) {
            return React.createElement(
              "li",
              { key: index },
              item
            );
          })
        ) : undefined,
        half && React.createElement(
          "h3",
          null,
          "Half!!!"
        )
      );
    }
  }]);

  return Friends;
}(React.Component);

var ListExample = function (_React$Component3) {
  _inherits(ListExample, _React$Component3);

  function ListExample(props) {
    _classCallCheck(this, ListExample);

    var _this3 = _possibleConstructorReturn(this, (ListExample.__proto__ || Object.getPrototypeOf(ListExample)).call(this, props));

    _this3.state = Object.assign({}, _this3.props);


    _this3.state.bg = "black";
    return _this3;
  }

  _createClass(ListExample, [{
    key: "render",
    value: function render() {
      var _state3 = this.state,
          _state3$list = _state3.list,
          list = _state3$list === undefined ? [] : _state3$list,
          color = _state3.color,
          bg = _state3.bg;


      return list.length ? React.createElement(
        "ul",
        { style: { color: color, backgroundColor: bg } },
        list.map(function (item, index) {
          return React.createElement(
            "li",
            { key: index },
            item
          );
        })
      ) : undefined;
    }
  }]);

  return ListExample;
}(React.Component);

var App = function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(User, { user: { name: "Oleg", age: 30, city: "Poltava" } })
  );
};

root.render(React.createElement(App, null));