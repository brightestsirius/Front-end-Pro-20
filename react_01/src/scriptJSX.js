const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const x = 100;
const title = `Hello, world!`;
const list = [`cat`, `dog`, `lion`];

const animals = [
    {
        type: `cat`,
        name: `Alisa`,
        age: 7
    },
    {
        type: `dog`,
        name: `Patron`,
        age: 3
    },
    {
        type: `lion`,
        name: `Simba`,
        age: 6
    }
]

const h4Styles = {color: `white`, backgroundColor: `crimson`};

const isTrue = true;

const pClass = `example`;

const anotherPClasses = [`example`];
anotherPClasses.push(isTrue ? `trueClass` : `falseClass`);

root.render(<React.Fragment>
    <h1>{title}</h1>
    <h2>H2 text</h2>
    <h3>{x+100}</h3>

    <ul>
        {list.map((item, index) => <li key={index}>{item}</li>)}
    </ul>

    <table>
        <tbody>
            {list.map((item, index) => <tr key={index}><td>{item}</td></tr>)}
        </tbody>
    </table>

    <table>
        <thead>
            <tr>
                <th>Type</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            {animals.map((item, index) => <tr key={index}>
                {Object.keys(item).map((k,i) => <td key={i}>{item[k]}</td>)}
            </tr>)}
        </tbody>
    </table>

    <h4 style={h4Styles}>Sample text</h4>

    <h5 style={ {color: isTrue ? `green` : `red`} }>Some text</h5>

    <p className="example">Some text</p>

    <p className={`example ${isTrue ? `trueClass` : `falseClass`}`}>Another text</p>
    <p className={anotherPClasses.join(` `)}>Another text</p>

    {isTrue ? <h3>Hello, world!</h3> : null}

    {isTrue && <React.Fragment><h3>Hello, world!</h3><h4>Hello, world!</h4></React.Fragment>}

</React.Fragment>);