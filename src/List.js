import React, {Component} from 'react';

class List extends Component {
  render() {
    const documents = this.props.documents.map((document) =>
      <li key={document.name + document.date}>
        {document.name}
        {document.date}
      </li>
    );

    return (<ul>
              {documents}
            </ul>)
  }
}

export default List;