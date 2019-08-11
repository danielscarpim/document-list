import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    const profile = this.props.user.profile || {};

    return (
      <div className="page-header">
        <nav className="page-header__nav">
          <div className="logo">Logo</div>
          <ul className="page-header__menu">
            <li className="menu__item">Home</li>
            <li className="menu__item menu__item--active">Documents</li>
            <li className="menu__item">Contacts</li>
          </ul>
          <div className="user-info">
            <div className="user-info__picture"></div>
            <div className="user-info__data">
              <div className="user-name">
                <span>{profile.firstName}</span>
                <span>{profile.lastName}</span>
              </div>
              <div className="user-email">{this.props.user.username}</div>
            </div>
          </div>
        </nav>
        <h1 className="page-header__title">Documents</h1>
      </div>
    )
  }
}