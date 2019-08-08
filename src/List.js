import {Component} from 'react';

class List extends Component {
  constructor() {
    super();
    this.state = {
      documents: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/documents')
      .then(results => {
        return results.json();
      }).then((data) => {
        console.log('data: ', data);
      })

    fetch('http://localhost:3000/data/info')
      .then(results => {
        return results.json();
      }).then((data) => {
        console.log('data: ', data);
      })
  }

  render() {
    return 'test'
  }
}

export default List;