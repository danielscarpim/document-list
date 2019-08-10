import {Component} from 'react';

export default class DisplayDate extends Component {  
  render() {
    const d = new Date(this.props.date);
    return `${('0' + d.getDate()).slice(-2)}-${('0' + d.getMonth()).slice(-2)}-${d.getFullYear()}`;
  }
}