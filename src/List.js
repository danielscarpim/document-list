import React, {Component} from 'react';
import DisplayDate from './DisplayDate';

class List extends Component {

  render() {
    // filtering is handled on the list itself.
    // This is a bad approach, as the list still receives items that may not be displayed
    // Proper filtering should be done on the backend or on the parent component
    const documents = this.props.documents.map((document, index) => {

      if (new Date(document.date) < new Date(this.props.dateRange.startDate)) {
        return null;
      }

      if (new Date(document.date) > new Date(this.props.dateRange.endDate)) {
        return null;
      }

      return (
        <li className="document-list__item" key={index}>
          <div className="item__column item__column--name">{document.name}</div>
          <div className="item__column item__column--date"><DisplayDate date={document.date} /></div>
        </li>
      )
    });

    return (<ul className="document-list">
              {documents}
            </ul>)
  }
}

export default List;