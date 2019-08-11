import React, {Component} from 'react';

export default class ColumnSortButton extends Component {
  render() {
    return (
      <button className="button" onClick={ this.props.onClick } >
        <span>{this.props.title}</span>
        <div className="sort-order"></div>
      </button>
    )
  }
}
