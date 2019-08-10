import React, {Component} from 'react';
import DisplayDate from './DisplayDate';
import { renderToString } from 'react-dom/server'

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
      <div>
        <span>{this.props.title}</span>
        <select onChange={this.onSelectChange} value={selectedOption}>
          <Options dates={this.props.dates}/>
        </select>
      </div>
    )
  }
}


export default DateSelector;