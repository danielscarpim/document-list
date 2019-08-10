import React, {Component} from 'react';
import DisplayDate from './DisplayDate';

class List extends Component {

  render() {
    const documents = this.props.documents.map((document, index) => {

      if (new Date(document.date) < new Date(this.props.dateRange.startDate)) {
        return null;
      }

      if (new Date(document.date) > new Date(this.props.dateRange.endDate)) {
        return null;
      }

      return (
        <li className="document-list__item" key={index}>
          {document.name} - <DisplayDate date={document.date}/>
        </li>
      )
    });

    return (<ul className="document-list">
              {documents}
            </ul>)
  }
}

export default List;