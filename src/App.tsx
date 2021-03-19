import React from 'react';
import logo from './logo.svg';
import './App.css';

//code week 7
//interface IData {
//  id: string;
//  name: string;
//  email: string;
//}

//interface IAppState {
//  showTable: boolean;
// }

// interface IAppProps {
//  data: IData[]
//}

//class App extends React.Component<IAppProps, IAppState> {
//  constructor(props: IAppProps) {
//    super(props);
//    this.state = {
//      showTable: true,
//    }
//  }
//  componentDidMount() {
//    alert("did mount App component !")
//  }
//  componentWillUnmount() {
//    alert("unmounting App component !")
//  }
//  componentDidUpdate() {
//    alert("did update called !")
//  }
//  public toggleShowTable = () => {
//    const { showTable } = this.state;
//    this.setState({showTable: !showTable});
//  }
//  public renderRow = () => {
//    return this.props.data.map((item) => {
//      return (
//        <tr>
//          <td>{item.id}</td>
//          <td>{item.name}</td>
//          <td>{item.email}</td>
//        </tr>
//      )
//    })
//  }
//  public renderTable = () => {
//    if (this.state.showTable) {
//      return (
//        <table className="table">
//          <thead>
//              <tr>
//              <td>id</td>
//              <td>name</td>
//              <td>email</td>
//            </tr>
//          </thead>
//          <tbody>
//            {this.renderRow()}
//          </tbody>
//        </table>
//      )
//    }
//  }
//  public render() {
//    return (
//      <div className="App">
//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          {this.renderTable()}
//          <button onClick={this.toggleShowTable}>test</button>
//        </header>
//      </div>
//    )
//  }
//}

//code week8
interface IAppState {
  fullname: string;
  age: string;
}
class App extends React.Component<{}, IAppState> {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      age: '',
    }
  }
  handleBtnClick = () => {
    alert(`${this.state.fullname} ${this.state.age}`)
  }
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    const { value } = event.target;
    const newState = { ...this.state };
    newState[name] = value;
    this.setState(newState);
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <form>
            <p>Full Name : </p>
            <input
              type='text'
              name='fullname'
              onChange={this.handleChange}
            />
            <p>Age : </p>
            <input
              type='text'
              name='age'
              onChange={this.handleChange}
            />
          </form>
          <button onClick={this.handleBtnClick}>save</button>
        </header>
      </div>
    )
  }
}

export default App;