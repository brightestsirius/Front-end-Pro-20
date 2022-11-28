var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var x = 100;
var title = "Hello, world!";
var list = ["cat", "dog", "lion"];

var animals = [{
    type: "cat",
    name: "Alisa",
    age: 7
}, {
    type: "dog",
    name: "Patron",
    age: 3
}, {
    type: "lion",
    name: "Simba",
    age: 6
}];

var h4Styles = { color: "white", backgroundColor: "crimson" };

var isTrue = true;

var pClass = "example";

var anotherPClasses = ["example"];
anotherPClasses.push(isTrue ? "trueClass" : "falseClass");

root.render(React.createElement(
    React.Fragment,
    null,
    React.createElement(
        "h1",
        null,
        title
    ),
    React.createElement(
        "h2",
        null,
        "H2 text"
    ),
    React.createElement(
        "h3",
        null,
        x + 100
    ),
    React.createElement(
        "ul",
        null,
        list.map(function (item, index) {
            return React.createElement(
                "li",
                { key: index },
                item
            );
        })
    ),
    React.createElement(
        "table",
        null,
        React.createElement(
            "tbody",
            null,
            list.map(function (item, index) {
                return React.createElement(
                    "tr",
                    { key: index },
                    React.createElement(
                        "td",
                        null,
                        item
                    )
                );
            })
        )
    ),
    React.createElement(
        "table",
        null,
        React.createElement(
            "thead",
            null,
            React.createElement(
                "tr",
                null,
                React.createElement(
                    "th",
                    null,
                    "Type"
                ),
                React.createElement(
                    "th",
                    null,
                    "Name"
                ),
                React.createElement(
                    "th",
                    null,
                    "Age"
                )
            )
        ),
        React.createElement(
            "tbody",
            null,
            animals.map(function (item, index) {
                return React.createElement(
                    "tr",
                    { key: index },
                    Object.keys(item).map(function (k, i) {
                        return React.createElement(
                            "td",
                            { key: i },
                            item[k]
                        );
                    })
                );
            })
        )
    ),
    React.createElement(
        "h4",
        { style: h4Styles },
        "Sample text"
    ),
    React.createElement(
        "h5",
        { style: { color: isTrue ? "green" : "red" } },
        "Some text"
    ),
    React.createElement(
        "p",
        { className: "example" },
        "Some text"
    ),
    React.createElement(
        "p",
        { className: "example " + (isTrue ? "trueClass" : "falseClass") },
        "Another text"
    ),
    React.createElement(
        "p",
        { className: anotherPClasses.join(" ") },
        "Another text"
    ),
    isTrue ? React.createElement(
        "h3",
        null,
        "Hello, world!"
    ) : null,
    isTrue && React.createElement(
        React.Fragment,
        null,
        React.createElement(
            "h3",
            null,
            "Hello, world!"
        ),
        React.createElement(
            "h4",
            null,
            "Hello, world!"
        )
    )
));