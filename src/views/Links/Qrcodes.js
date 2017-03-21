import React, { Component } from 'react';
import { Link } from 'react-router';

class Qrcodes extends Component {
  handleAdd() {
    console.log('clicked add');
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-align-justify"></i> 全部二维码
              </div>
              <div className="card-block">
                <div className="btn-toolbar">
                <Link to="/links/qrcode">
                <button type="button" className="btn btn-primary fa fa-plus">新建二维码</button>
                </Link>
              </div>
              <table className="table table-bordered table-striped table-condensed">
                <thead>
                  <tr>
                    <th>名称</th>
                    <th>创建日期</th>
                    <th>最近扫描</th>
                    <th>二维码</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Vishnu Serghei</td>
                    <td>2012/01/01</td>
                    <td>Member</td>
                    <td>
                      <span className="badge badge-success">Active</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Zbyněk Phoibos</td>
                    <td>2012/02/01</td>
                    <td>Staff</td>
                    <td>
                      <span className="badge badge-danger">Banned</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Einar Randall</td>
                    <td>2012/02/01</td>
                    <td>Admin</td>
                    <td>
                      <span className="badge badge-default">Inactive</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Félix Troels</td>
                    <td>2012/03/01</td>
                    <td>Member</td>
                    <td>
                      <span className="badge badge-warning">Pending</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Aulus Agmundr</td>
                    <td>2012/01/21</td>
                    <td>Staff</td>
                    <td>
                      <span className="badge badge-success">Active</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <nav>
                <ul className="pagination">
                  <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                  <li className="page-item active">
                    <a className="page-link" href="#">1</a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">4</a></li>
                  <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
              </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Qrcodes;
