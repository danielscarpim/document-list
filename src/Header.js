import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="page-header">
        <nav className="page-header__nav">
          <ul className="page-header__menu">
            <li className="menu__item">Home</li>
            <li className="menu__item menu__item--active">Documents</li>
            <li className="menu__item">Contacts</li>
          </ul>
          <div className="user-info"></div>
        </nav>
        <h1 className="page-header__title">Documents</h1>
      </div>
    )
  }
}