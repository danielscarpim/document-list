import React, {Component} from 'react';
import List from './List';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      documents: [],
      user: {},
      sorting: null
    }
    this.sortByName = this.sortByName.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
  }

  sortByName() {
    const documents = this.state.documents;

    documents.sort((a, b) => {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return this.state.sorting === 'asc' ? -1 : 1;
      }
      if (nameA > nameB) {
        return this.state.sorting === 'asc' ? 1 : -1;
      }

      return 0;
    });
    this.state.sorting !== 'asc' ? this.setState({ sorting: 'asc' }) : this.setState({ sorting: 'desc' })
    this.setState(documents);
  }

  sortByDate() {
    const documents = this.state.documents;

    documents.sort((a, b) => {
      return this.state.sorting === 'asc' ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date);
    });
    this.state.sorting !== 'asc' ? this.setState({ sorting: 'asc' }) : this.setState({ sorting: 'desc' })
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
              <button onClick={this.sortByDate}>sort by date</button>
              <List documents={this.state.documents} />
            </div>)
  }
}

export default App;
