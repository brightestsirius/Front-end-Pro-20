var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domContainer = document.querySelector("#root");
var root = ReactDOM.createRoot(domContainer);

var list = ["cat", "dog", "lion"];

// function List({ arr = [], color }) {
//   const ulStyles = {
//     color: color,
//   };

//   return arr.length ? (
//     <ul style={ulStyles}>
//       {arr.map((item, index) => (
//         <ListItem key={index} item={item} />
//       ))}
//     </ul>
//   ) : null;
// }

// function ListItem({item}){
//     return <li>{item} <DeleteBtn text={item} /></li>
// }

// function DeleteBtn({text}){
//     return <button>Delete {text}</button>
// }

var List = function (_React$Component) {
    _inherits(List, _React$Component);

    function List() {
        _classCallCheck(this, List);

        return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
    }

    _createClass(List, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                _props$arr = _props.arr,
                arr = _props$arr === undefined ? [] : _props$arr,
                color = _props.color;

            var ulStyles = { color: color };

            return React.createElement(
                "ul",
                { style: ulStyles },
                arr.map(function (item, index) {
                    return React.createElement(ListItem, { key: index, item: item });
                })
            );
        }
    }]);

    return List;
}(React.Component);

var ListItem = function (_React$Component2) {
    _inherits(ListItem, _React$Component2);

    function ListItem() {
        _classCallCheck(this, ListItem);

        return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
    }

    _createClass(ListItem, [{
        key: "render",
        value: function render() {
            var item = this.props.item;

            return React.createElement(
                "li",
                null,
                item,
                " ",
                React.createElement(BtnDelete, { text: item })
            );
        }
    }]);

    return ListItem;
}(React.Component);

var BtnDelete = function (_React$Component3) {
    _inherits(BtnDelete, _React$Component3);

    function BtnDelete() {
        _classCallCheck(this, BtnDelete);

        return _possibleConstructorReturn(this, (BtnDelete.__proto__ || Object.getPrototypeOf(BtnDelete)).apply(this, arguments));
    }

    _createClass(BtnDelete, [{
        key: "render",
        value: function render() {
            var text = this.props.text;

            return React.createElement(
                "button",
                null,
                "Delete ",
                text
            );
        }
    }]);

    return BtnDelete;
}(React.Component);

var App = React.createElement(
    React.Fragment,
    null,
    React.createElement(List, { arr: list, color: "red" }),
    React.createElement(List, { arr: [10, 20, 30, "Oleg"] }),
    React.createElement(List, null)
);

root.render(App);