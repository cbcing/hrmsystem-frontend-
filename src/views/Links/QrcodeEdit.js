import React, {Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ReduxBlockUi from 'react-block-ui/redux'
import { Link } from 'react-router'
import 'react-block-ui/style.css'
import {loadQrcodeCreator, updateQrcodeCreator,updateQrcodeRequestCreator } from '../../actions'
import { Row, Col, Card, CardBlock, Form, FormGroup, Label, Input, Button } from 'reactstrap'

class QrcodeEdit extends Component {
  static propTypes = {
    item: PropTypes.object,
    loadQrcodeCreator: PropTypes.func.isRequired,
    updateQrcodeCreator: PropTypes.func.isRequired,
    updateQrcodeRequestCreator: PropTypes.func.isRequired
  }

  constructor(props, ctx) {
    super(props, ctx)
    this.state = {
      name: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const {params} = this.props
    this.props.loadQrcodeCreator(params.id)
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('submit item', this.props.item)
    if (!this.props.item || !this.props.item.name) {
      alert('name is required.')
      return
    }
    this.props.updateQrcodeRequestCreator(this.props.item)
  }

  handleNameChange = e => {
    this.props.updateQrcodeCreator(e.target.value)
  }

  render() {
    const { item } = this.props
    if (!item) {
      return (
        <h3>Loading...</h3>
      )
    }
    const myprops =  {
      src: "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=" + item.ticket
    }
    return (
        <Card>
          <CardBlock>
            <Form  onSubmit={this.handleSubmit}>
            <ReduxBlockUi tag="div" block="QRCODE_ADD" unblock={["QRCODE_ADD_SUCCESS", /fail/i]}>
              <Row>
                <Col xs="12" md="2">
                  <Row className="justify-content-center">
                    <Col xs="6" md="12">
                      <img src="/img/logo3.png"  {...myprops} className="img-fluid mx-auto d-block" alt="er wei ma"/>
                    </Col>
                  </Row>
                </Col>
                <Col xs="12" md="10">
                  <Row>
                    <Col xs="5">
                        <Label>场景编号: {item.scene}</Label>
                    </Col>
                    <Col xs="7">
                        <Label>关注/总扫码数:{item.scanCount}/{item.subCount}</Label>
                    </Col>
                    <Col xs="12">
                      <FormGroup row>
                        <Label for="name" sm={2} xl={1}>名称:</Label>
                        <Col sm={10} xl={11}>
                          <input type="text" className="form-control" id="name" 
                            placeholder="便于识别二维码的拥有人或摆放场合" 
                            value={item.name}
                            onChange={e => this.handleNameChange(e)}/>
                        </Col>
                      </FormGroup>
                    </Col>
                    <Col xs="12">
                      <FormGroup row>
                        <Label for="url" sm={2} xl={1}>URL:</Label>
                        <Col sm={10} xl={11}>
                          <Input id="url" name="url" disabled value={item.url}/>
                        </Col>
                      </FormGroup>
                    </Col>
                    <Col xs="12">
                      <FormGroup row>
                        <Label for="ticket" sm={2} xl={1}>Ticket:</Label>
                        <Col sm={10} xl={11}>
                          <Input id="ticket" name="ticket" disabled  value={item.ticket}/>
                        </Col>
                      </FormGroup>
                    </Col>
                    <Col xs={12}>
                      <Button color="primary" type="submit">保存修改</Button>
                      <Button color="secondary" tag={Link} to="/links/qrcodes">返回</Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </ReduxBlockUi>
            </Form>
          </CardBlock>
          
        </Card>
    ) 
  }
}


// 由于store中的状态数据太多，一般不要直接全部暴露给一个组件，所以写一个mapStateToProps的方法
// 来挑选当前组件应该感兴趣的状态。
const mapStateToProps = (state/*, props*/) => {
  //qrcodes这个reducer返回的数据被放在qrcodes这个key下
  const { qrcodes } = state
  return {
    item: qrcodes.item
  }
}

//connect用于连接react组件与redux的store中的状态
export default connect(
  mapStateToProps,
  {loadQrcodeCreator, updateQrcodeCreator, updateQrcodeRequestCreator}
)(QrcodeEdit);
