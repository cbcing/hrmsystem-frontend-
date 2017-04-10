import React, { Component } from 'react';
import { Link } from 'react-router'

class Sidebar extends Component {

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  render() {
    return (

      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <Link to={'/dashboard'} className="nav-link" activeClassName="active"><i className="icon-speedometer"></i> 首页 <span className="badge badge-info">NEW</span></Link>
            </li>
            <li className="nav-title">
              微信管理
            </li>
            <li className={this.activeRoute("/qrcodes")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-puzzle"></i> 推广</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/links/qrcodes'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i> 全部二维码</Link>
                </li>
              </ul>
            </li>
            <li className={this.activeRoute("/components")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-puzzle"></i> 用户</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/users/detail'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i> 用户详情</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/components/social-buttons'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i> Social Buttons</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
