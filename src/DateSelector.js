import React, {Component} from 'react';

class DateSelector extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      startDate: props.documents[0],
      endDate: props.documents[this.props.documents.length]
    }
  }

  displayDate(date) {
    const d = new Date(date);
    return `${('0' + d.getDate()).slice(-2)}-${('0' + d.getMonth()).slice(-2)}-${d.getFullYear()}`;
  }

  handleChange(event) {
    const selectedDates = {
      endDate: this.props.documents[0].date,
      startDate: this.props.documents[this.props.documents.length - 1].date
    }
    
    selectedDates[this.props.name] = event.target.value;
    console.log('selectedDates: ', selectedDates);
  }
  
  render() {
    const dates = this.props.documents.map((document) => document.date)

    const Options = (props) => {
      return props.dates.map((date, index) => {
        const displayDate = this.displayDate(date);

        return (
          <option key={index} value={date}>
            {displayDate}
          </option>
        )
      })
    }

    return (
      <div>
        <span>{this.props.title}</span>
        <select onChange={this.handleChange}>
          <Options dates={dates}/>
        </select>
      </div>
    )
  }
}


export default DateSelector;