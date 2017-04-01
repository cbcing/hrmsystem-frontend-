import React, { Component,PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as actions from '../../actions'

class Qrcodes extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    onLoad: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.onLoad(0)
  }

  render() {
    const { items } = this.props
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
                <button type="button" className="btn btn-primary fa fa-plus"> 新建二维码</button>
                </Link>
              </div>
              <table className="table table-bordered table-striped table-condensed">
                <thead>
                  <tr>
                    <th>场景编号</th>
                    <th>名称</th>
                    <th>创建日期</th>
                    <th>关注次数</th>
                    <th>扫描次数</th>
                    <th>二维码</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, i) =>
                    <tr key={i}>
                      <td>{item.scene}</td>
                      <td>{item.name}</td>
                      <td>{item.createDate}</td>
                      <td>{item.subCount}</td>
                      <td>{item.scanCount}</td>
                      <td>
                        <Link to={"/links/qrcode/"+item.id} >
                          <button type="button" className="btn btn-secondary fa fa-info"> 查看</button>
                        </Link>
                      </td>
                    </tr>
                  )}
                  
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

// 由于store中的状态数据太多，一般不要直接全部暴露给一个组件，所以写一个mapStateToProps的方法
// 来挑选当前组件应该感兴趣的状态。
const mapStateToProps = (state/*, props*/) => {
  //qrcodes这个reducer返回的数据被放在qrcodes这个key下
  const { qrcodes } = state

  return {
    items: qrcodes.items || []
  }
}
// 为组件提供事件处理方法
const mapDispatchToProps = (dispatch, ownProps) => ({
  onLoad: (limit) => {
    actions.fetchQrcodesCreator(limit)(dispatch)
  }
})

//connect用于连接react组件与redux的store中的状态
// 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Qrcodes);
