import React from 'react'
import { connect } from 'react-redux'
import ReduxBlockUi from 'react-block-ui/redux'
import 'react-block-ui/style.css'
import * as actions from '../../actions'

const Qrcode =({onSave}) => {
  let nameInput

  return (
    <div className="animated fadeIn">
      <form onSubmit={ e => {
        e.preventDefault()
        if (!nameInput.value.trim()) {
          return
        }
        onSave(nameInput.value)
      }}>
      <ReduxBlockUi tag="div" block="QRCODE_ADD" unblock={["QRCODE_ADD_SUCCESS", /fail/i]}>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <strong>新建二维码</strong>
            </div>
            <div className="card-block">
              <div className="row">

                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="name">名称</label>
                    <input type="text" className="form-control" id="name" 
                      placeholder="便于识别二维码的拥有人或摆放场合"
                      ref={node => {
                        nameInput = node
                      }}
                      />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="ccnumber">获取网址</label>
                    <input type="text" className="form-control" id="qrcode_url" placeholder="自动生成，不可修改" disabled
                      value=""/>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-footer">
              <button type="submit" className="btn btn-sm btn-primary" ><i className="fa fa-dot-circle-o"></i> 保存</button>
              <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> 重填</button>
            </div>
          </div>
        </div>
      </div>
      </ReduxBlockUi>
      </form>
    </div>
  )
}


// 由于store中的状态数据太多，一般不要直接全部暴露给一个组件，所以写一个mapStateToProps的方法
// 来挑选当前组件应该感兴趣的状态。
const mapStateToProps = (state/*, props*/) => {
  return {
    item: state.item
  }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
  onSave: (name) => {
    actions.addQrcodeCreator({name: name})(dispatch)
  }
})

// 为组件提供事件处理方法
// const onAdd = name => (dispatch, getState) => {
//     console.log('点击了保存...', getState)
//     // dispatch()
//   }


//connect用于连接react组件与redux的store中的状态
// 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Qrcode);
