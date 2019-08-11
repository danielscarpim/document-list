import React, {Component} from 'react';

export default class ColumnSortButton extends Component {
  render() {
    const sortOrder = this.props.sortOrder || 'none';

    return (
      <button className="button" onClick={ this.props.onClick } >
        <span className="button__text">{this.props.title}</span>
        <div className={`sort-order sort-order--${sortOrder}`}></div>
      </button>
    )
  }
}
