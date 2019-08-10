import React, {Component} from 'react';
import DisplayDate from './DisplayDate';
import { renderToString } from 'react-dom/server'

class DateSelector extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
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

    return (
      <div>
        <span>{this.props.title}</span>
        <select onChange={this.handleChange}>
          <Options dates={this.props.dates}/>
        </select>
      </div>
    )
  }
}


export default DateSelector;