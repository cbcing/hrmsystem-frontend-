import React, {Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ReduxBlockUi from 'react-block-ui/redux'
import { Link } from 'react-router'
import 'react-block-ui/style.css'
import { Button, ButtonToolbar,FormGroup,ControlLabel,FormControl,Image } from 'react-bootstrap'
import {loadQrcodesCreator, addQrcodeCreator} from '../../actions'

class QrcodeEdit extends Component {
  static propTypes = {
    item: PropTypes.object,
    addQrcodeCreator: PropTypes.func.isRequired,
    loadQrcodesCreator: PropTypes.func.isRequired
  }

  componentDidMount() {
    const {params} = this.props
    this.props.loadQrcodesCreator(params.id)
  }

  handleSubmit = e => {
    e.preventDefault()
    if (!this.nameInput.value.trim()) {
      return
    }
    this.props.addQrcodeCreator(this.nameInput.value)
  }

  render() {
    const { item } = this.props
    console.log('render item', item)
    const myprops = item.name ? {
      value: item.name,
      src: "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=" + item.ticket
    } : {}
    return (
      <div className="animated fadeIn">
        <form onSubmit={this.handleSubmit}>
        <ReduxBlockUi tag="div" block="QRCODE_ADD" unblock={["QRCODE_ADD_SUCCESS", /fail/i]}>
          
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <strong>Edit二维码</strong>
              </div>
              <div className="card-block">
                <FormGroup controlId="saveQrcodeForm">
                  <div className="row">

                    <div className="col-sm-12">
                      <div className="form-group">
                        <label htmlFor="name">名称</label>
                        <input type="text" className="form-control" id="name" 
                          placeholder="便于识别二维码的拥有人或摆放场合" defaultValue="test" {...myprops}
                          ref={node => { this.nameInput = node }} />
                      </div>
                    </div>
                  </div>
                  <ControlLabel>二维码</ControlLabel>
                  <Image src='/img/logo3.jpg' {...myprops} rounded />
                  
                  <ControlLabel>URL</ControlLabel>
                  <FormControl type="text" disabled="true" value={item.url}>
                  </FormControl>

                  <ControlLabel>Ticket {item.scene}</ControlLabel>
                  <FormControl type="text" disabled="true" value={item.ticket}>
                  </FormControl>
                </FormGroup>
              </div>

              <div className="card-footer">
                <ButtonToolbar>

                  <Link to="/links/qrcodes">
                    <Button bsStyle="warning">返回</Button>
                  </Link>
                </ButtonToolbar>
              </div>
            </div>
          </div>
        </div>
        </ReduxBlockUi>
        </form>
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
    item: qrcodes.item ? qrcodes.item : {}
  }
}

//connect用于连接react组件与redux的store中的状态
export default connect(
  mapStateToProps,
  {addQrcodeCreator, loadQrcodesCreator}
)(QrcodeEdit);
