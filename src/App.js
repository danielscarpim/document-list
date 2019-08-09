import React, {Component} from 'react';
import List from './List';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      documents: [],
      user: {}
    }
    this.sortByName = this.sortByName.bind(this);
  }

  sortByName() {
    const documents = this.state.documents;

    documents.sort((a, b) => {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });

    this.setState(documents);
  }

  componentWillMount() {
    fetch('http://localhost:3000/data/documents')
      .then(results => results.json())
      .then((data) => {
        this.setState({documents: data.documents});
      })

    fetch('http://localhost:3000/data/info')
      .then(results => results.json())
      .then((data) => {
        this.setState({user: data.body.user});
      })
  }

  render() {
    return (<div className="App">
              <button onClick={this.sortByName}>sort by name</button>
              <List documents={this.state.documents} />
            </div>)
  }
}

export default App;
