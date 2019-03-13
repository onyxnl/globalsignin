import React, { Component } from 'react';

class Category extends Component {
  constructor(props){
    super(props);
    this.state={
      Categories :["New","Hot","Rising","Controversial","Top"],
      TimeRange : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
      Category : '',
      TRange :'',
      isChange : false
    }
  }
  

  render() {
    const {Category,TRange,TimeRange} = this.state;
    return (
      <div className="container">
        <form className="form">
          <div className="row">
            <div className="col-md-4">
                <div className="form-group">
                  <label>Category</label>
                  <select className="form-control" value={this.state.Category} onChange={(event)=>{this.setState({Category:event.target.value})}}>
                      <option value="o">Select Category</option>
                      {this.state.Categories.map((cat,index)=>(
                         <option key={index} value={cat}>{cat}</option>
                      ))}
                  </select>
                </div>
            </div>
            <div className="col-md-4">
                <div className="form-group">
              <label>Time (hr)</label>
              <select className="form-control" defaultValue={TimeRange.slice(-1)[0]} onChange={(event)=>{this.setState({TRange: event.target.value})}}>
                {this.state.TimeRange.map((trange,index)=>(
                         <option key={index} value={trange} >{trange} : 00</option>
                ))}
              </select>
            </div>
            </div>
        </div>
        <div className="col-md-12 text-left">
                <b>{(Category !== "" || TRange !== "") && <span>{Category} Category and {TRange !== "" ? TRange : TimeRange.slice(-1)[0]  } hour(s)</span>}</b>
        </div>
        </form>

      </div>
    );
  }

}

export default Category;
