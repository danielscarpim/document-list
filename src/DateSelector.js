import React, {Component} from 'react';
import DisplayDate from './DisplayDate';
import { renderToString } from 'react-dom/server'

// This component is just a select field with all the dates in the documents,
// this is just to make it easier to see the filter updating the data.
// On a real application a proper date picker would be used, and any date could be selected.

class DateSelector extends Component {
  constructor(props) {
    super(props);
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  onSelectChange(event) {
    const selectedDates = this.props.dateRange;
    
    selectedDates[this.props.name] = event.target.value;

    this.props.filterByDate(selectedDates);
  }
  
  render() {
    const Options = (props) => {
      return props.dates.map((date, index) => {
        return (
          <option key={index} value={date}>
            {renderToString(<DisplayDate date={date} />)}
          </option>
        )
      })
    }

    const selectedOption = this.props.dateRange[this.props.name] || '';

    return (
      <div className="date-select">
        <label className="label" htmlFor={this.props.name}>{this.props.title}</label>
        <select id={this.props.name} onChange={this.onSelectChange} value={selectedOption}>
          <Options dates={this.props.dates}/>
        </select>
      </div>
    )
  }
}


export default DateSelector;