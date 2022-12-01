var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_React$Component) {
  _inherits(User, _React$Component);

  function User(props) {
    _classCallCheck(this, User);

    var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, props));

    _this.state = Object.assign({}, _this.props);


    setTimeout(function () {
      _this.setState(function (prevState) {
        return { user: Object.assign({}, prevState.user, { name: "Patron" }) };
      });
    }, 1000);

    setTimeout(function () {
      _this.setState(function (prevState) {
        return {
          user: Object.assign({}, prevState.user, { age: 100 })
        };
      });
    }, 1000);

    setTimeout(function () {
      _this.setState(function (prevState) {
        return {
          user: Object.assign({}, prevState.user, { city: "Kharkiv" })
        };
      });
    }, 1000);

    return _this;
  }

  _createClass(User, [{
    key: "render",


    // user = {name: `Oleg`, age: 30, city: `Poltava`}
    // Object.keys(user); // [name, age, city]

    value: function render() {
      var user = this.state.user;


      return React.createElement(
        "table",
        { className: "userTable" },
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "th",
              null,
              "Option"
            ),
            React.createElement(
              "th",
              null,
              "Value"
            )
          )
        ),
        React.createElement(
          "tbody",
          null,
          Object.keys(user).map(function (k, i) {
            return React.createElement(
              "tr",
              { key: i },
              React.createElement(
                "td",
                null,
                k
              ),
              React.createElement(
                "td",
                null,
                user[k]
              )
            );
          })
        )
      );
    }
  }]);

  return User;
}(React.Component);

export default User;