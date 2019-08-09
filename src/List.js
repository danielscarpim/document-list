import React, {Component} from 'react';

class List extends Component {

  displayDate(date) {
    const d = new Date(date);
    return `${('0' + d.getDate()).slice(-2)}-${('0' + d.getDate()).slice(-2)}-${d.getFullYear()}`;
  }

  render() {
    const documents = this.props.documents.map((document, index) => {
      const displayDate = this.displayDate(document.date);

      return (
        <li className="document-list__item" key={index}>
          {document.name}
          {displayDate}
        </li>
      )
    });

    return (<ul className="document-list">
              {documents}
            </ul>)
  }
}

export default List;