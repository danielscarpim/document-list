import {Component} from 'react';

class List extends Component {
  constructor() {
    super();
    this.state = {
      documents: []
    }
  }

  componentDidMount() {
    fetch('../data/documents')
      .then(results => {
        console.log(results);
      })

    fetch('../data/info')
      .then(results => {
        console.log(results);
      })
  }

  render() {
    return 'test'
  }
}

export default List;