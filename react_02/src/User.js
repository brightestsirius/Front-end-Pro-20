export default class User extends React.Component {
    constructor(props) {
      super(props);
  
      setTimeout(() => {
          this.setState((prevState) => ({user: {...prevState.user, name: `Patron`}}))
      }, 1000)
  
      setTimeout(() => {
          this.setState(function(prevState){
              return {
                  user: {...prevState.user, age: 100}
              }
          })
      }, 1000)
  
      setTimeout(() => {
          this.setState(function(prevState){
              return {
                  user: {...prevState.user, city: `Kharkiv`}
              }
          })
      }, 1000)
  
    }
  
    state = Object.assign({}, this.props);
  
    // user = {name: `Oleg`, age: 30, city: `Poltava`}
    // Object.keys(user); // [name, age, city]
  
    render() {
      let {user} = this.state;
  
      return (
        <table className="userTable">
          <thead>
            <tr>
              <th>Option</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(user).map((k, i) => (
              <tr key={i}>
                <td>{k}</td>
                <td>{user[k]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  }