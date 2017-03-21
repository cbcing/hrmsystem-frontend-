import React, { Component } from 'react';

class Qrcode extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="animated fadeIn">
        <form onSubmit={this.handleSubmit}>
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
                        value={this.state.value}  onChange={this.handleChange} 
                        placeholder="便于识别二维码的拥有人或摆放场合" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="ccnumber">获取网址</label>
                      <input type="text" className="form-control" id="qrcode_url" placeholder="自动生成，不可修改" disabled/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-footer">
                <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> 新建</button>
                <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> 重填</button>
              </div>
            </div>
          </div>
        </div>
        </form>
      </div>
    )
  }
}

export default Qrcode;
