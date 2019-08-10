import React, {Component} from 'react';
import DisplayDate from './DisplayDate';

class List extends Component {

  render() {
    const documents = this.props.documents.map((document, index) => {
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