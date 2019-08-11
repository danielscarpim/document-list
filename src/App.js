import React, {Component} from 'react';
import List from './List';
import DateSelector from './DateSelector';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      documents: [],
      user: {},
      sorting: null,
      dateRange: {
        startDate: null,
        endDate: null
      }
    }
    this.dates = [];
    this.sortByName = this.sortByName.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
    this.filterByDate = this.filterByDate.bind(this);
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
      return this.state.sorting === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
    });
    this.state.sorting !== 'asc' ? this.setState({ sorting: 'asc' }) : this.setState({ sorting: 'desc' })
    this.setState({documents});
  }

  componentWillMount() {
    fetch('http://localhost:3000/data/documents')
      .then(results => results.json())
      .then((data) => {
        this.setState({documents: data.documents});
        this.sortByDate();
        this.dates = this.state.documents.map((document) => document.date);
        const defaultDates = {
          endDate: this.dates[0],
          startDate: this.dates[this.dates.length - 1]
        }
        this.setState({dateRange: defaultDates})
      })

    fetch('http://localhost:3000/data/info')
      .then(results => results.json())
      .then((data) => {
        this.setState({user: data.body.user});
      })
  }

  filterByDate(selectedDates) {
    this.setState({dateRange: selectedDates})
  }

  render() {
    return (
      <div className="App">
        <div className="document-list__filter">
          <div className="filter__title">Filter</div>
          <div className="filter__input">
            <DateSelector dates={this.dates} dateRange={this.state.dateRange} filterByDate={this.filterByDate} title="Start Date" name="startDate" />
            <DateSelector dates={this.dates} dateRange={this.state.dateRange} filterByDate={this.filterByDate} title="End Date" name="endDate" />
          </div>
        </div>
        <div className="document-list__header">
          <div className="item__column item__column--name">
            <button className="button" onClick={this.sortByName}>Name</button>
          </div>
          <div className="item__column item__column--date">
            <button className="button" onClick={this.sortByDate}>Date</button>
          </div>
        </div>
        <List documents={this.state.documents} dateRange={this.state.dateRange}/>
      </div>
    )}
}

export default App;
