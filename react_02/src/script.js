import User from './User.js'

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);

const animalsList = [`cat`, `dog`, `lion`];

// const List = ({list, color, bg}) => {
//     // console.log(props); // {list: [...], color: `orange`}

//     return <ul style={{color, backgroundColor: bg}}>
//         {list.map((item, index) => <li key={index}>{item}</li>)}
//     </ul>
// }

class List extends React.Component {
  constructor(props) {
    super(props);

    setTimeout(() => {
      this.setState({
        list: this.state.list.concat([`tiger`]),
      });
    }, 1000);

    setTimeout(() => {
      this.setState(
        {
          color: `pink`,
        },
        () => {
          console.log(this.state.color);
        }
      );
    }, 2000);

    setTimeout(() => {
      let firstPart = this.state.list.slice(0, 2);
      let secondPart = this.state.list.slice(2);

      // this.state.list.splice(2, 0, `Anton`);

      this.setState({
        bg: `black`,
        color: `white`,
        list: [`PATRON`, ...firstPart, `Anton`, ...secondPart, `parrot`],
      });
    }, 3000);

    setTimeout(() => {
      this.setState({
        list: this.state.list.slice(0, -1),
      });
    }, 4000);
  }

  state = {
    list: this.props.list,
    color: this.props.color,
    bg: this.props.bg,
  };

  render() {
    let { list, color, bg } = this.state;

    return (
      <ul style={{ color: color, backgroundColor: bg }}>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
}

class Friends extends React.Component {
  constructor(props) {
    super(props);

    const removeItem = setInterval(() => {
      console.log(`in interval`);

      this.setState(
        {
          list: this.state.list.slice(0, -1),
        },
        () => {
          if (
            this.state.list.length === Math.round(this.props.list.length / 2)
          ) {
            console.log(`Half!`);
            this.setState({
              bg: `red`,
              half: true,
            });
          }

          if (!this.state.list.length) {
            clearInterval(removeItem);
            this.setState({
              half: false,
            });
          }
        }
      );
    }, 1000);
  }

  state = {
    list: this.props.list,
    bg: `transparent`,
    half: false,
  };

  render() {
    const { list, bg, half } = this.state;

    return (
      <React.Fragment>
        {list.length ? (
          <ul style={{ background: bg }}>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : undefined}

        {half && <h3>Half!!!</h3>}
      </React.Fragment>
    );
  }
}

class ListExample extends React.Component {
  constructor(props) {
    super(props);

    this.state.bg = `black`;
  }

  state = Object.assign({}, this.props);

  render() {
    let { list = [], color, bg } = this.state;

    return list.length ? (
      <ul style={{ color, backgroundColor: bg }}>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : undefined;
  }
}

const App = () => {
  return (
    <React.Fragment>
      {/* <List list={animalsList} color={`orange`} bg={`green`} /> */}
      {/* <Friends list={[`Oleg`, `Taras`, `Lesya`, `Jack`, `Patron`]} /> */}
      {/* <ListExample list={[10, 20, 30, 40]} color={`orange`} />
      <ListExample list={[100, 200, 300, 400]} color={`crimson`} />
      <ListExample /> */}
      <User user={{ name: `Oleg`, age: 30, city: `Poltava` }} />
    </React.Fragment>
  );
};

root.render(<App />);
