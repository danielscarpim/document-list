import React, {Component} from 'react';
import List from './List';
import DateSelector from './DateSelector';
import './App.css';
import ColumnSortButton from './ColumnSortButton';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.url = window.location.href;
    this.state = {
      // This variable is not used. It would be updated after fetch is finished,
      // but on this demo it would not even be noticeable
      loading: true,
      documents: [],
      user: {},
      sorting: {
        byDate: null,
        byName: null
      },
      dateRange: {
        startDate: null,
        endDate: null
      }
    }
    // This is not part of the state as it's never supposed to be updated
    // is just used on the DateSelector component
    this.dates = [];

    this.sortByName = this.sortByName.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
    this.filterByDate = this.filterByDate.bind(this);
  }

  // Lots of repeated code on both sortBy functions. This could definitely be optimized
  sortByName() {
    const documents = this.state.documents;

    documents.sort((a, b) => {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return this.state.sorting.byName === 'asc' ? -1 : 1;
      }
      if (nameA > nameB) {
        return this.state.sorting.byName === 'asc' ? 1 : -1;
      }

      return 0;
    });
    this.state.sorting.byName !== 'asc' 
      ? this.setState({ sorting: { byName: 'asc', byDate: null }}) 
      : this.setState({ sorting: { byName:'desc', byDate: null }})
    
    this.setState(documents);
  }

  sortByDate() {
    const documents = this.state.documents;

    documents.sort((a, b) => {
      return this.state.sorting.byDate === 'asc' 
        ? new Date(a.date) - new Date(b.date) 
        : new Date(b.date) - new Date(a.date);
    });
    this.state.sorting.byDate !== 'asc' 
      ? this.setState({ sorting: { byDate: 'asc', byName: null } }) 
      : this.setState({ sorting: { byDate: 'desc', byName: null } })
    
    this.setState({documents});
  }

  // This just filters the current state. On a real application this would probably
  // trigger another fetch with filtering parameters
  filterByDate(selectedDates) {
    this.setState({ dateRange: selectedDates })
  }

  // Fetching all data in the main component.
  // A better approach would be to fetch the data on the component that needed it.
  componentWillMount() {
    // Fetching as from the local environment to avoid CORS erros
    fetch(`${this.url}data/documents`)
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

    fetch(`${this.url}data/info`)
      .then(results => results.json())
      .then((data) => {
        this.setState({user: data.body.User});
      })
  }

  render() {
    return (
      <div className="App">
        <Header user={this.state.user}/>
        <div className="document-list__filter">
          <div className="filter__title">Filter</div>
          <div className="filter__input">
            <DateSelector dates={this.dates} dateRange={this.state.dateRange} filterByDate={this.filterByDate} title="Start Date" name="startDate" />
            <DateSelector dates={this.dates} dateRange={this.state.dateRange} filterByDate={this.filterByDate} title="End Date" name="endDate" />
          </div>
        </div>
        <div className="document-list__header">
          <div className="item__column item__column--name">
            <ColumnSortButton onClick={this.sortByName} sortOrder={this.state.sorting.byName} title="Name"/>
          </div>
          <div className="item__column item__column--date">
            <ColumnSortButton onClick={this.sortByDate} sortOrder={this.state.sorting.byDate} title="Date"/>
          </div>
        </div>
        <List documents={this.state.documents} dateRange={this.state.dateRange}/>
      </div>
    )}
}

export default App;
