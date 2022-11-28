const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);

const list = [`cat`, `dog`, `lion`];

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

class List extends React.Component{
    render(){
        const {arr=[], color} = this.props;
        const ulStyles = {color: color};

        return <ul style={ulStyles}>
            {arr.map((item, index) => <ListItem key={index} item={item} />)}
        </ul>
    }
}

class ListItem extends React.Component{
    render(){
        const {item} = this.props;
        return <li>{item} <BtnDelete text={item} /></li>
    }
}

class BtnDelete extends React.Component{
    render(){
        const {text} = this.props;
        return <button>Delete {text}</button>
    }
}

const App = (
  <React.Fragment>
    <List arr={list} color="red" />
    <List arr={[10, 20, 30, `Oleg`]} />
    <List />
  </React.Fragment>
);

root.render(App);
