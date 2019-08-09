import React, {Component} from 'react';

class List extends Component {
  render() {
    const documents = this.props.documents.map((document, index) =>
      <li className="document-list__item" key={index}>
        {document.name}
        {document.date}
      </li>
    );

    return (<ul className="document-list">
              {documents}
            </ul>)
  }
}

export default List;