import React from 'react';
import Reactdom from 'react-dom';
import './Tab.css'


class Tab extends React.Component {
  constructor(props) {
    super(props)

    //设置状态 数据
    this.state = {
      c1: "content active",
      c2: "content"
    }
    this.clickEvent = this.clickEvent.bind(this)
  }
  clickEvent(e) {
    console.log('调用了clickEvent');
    console.log(e.target.dataset.index);
    let index = e.target.dataset.index;
    console.log(this);

    if (index=="1") {
      this.setState({
        c1: 'content active',
        c2: 'content'
      })
    } else {
      this.setState({
        c1: 'content ',
        c2: 'content active'
      })
    }
  }
  render() {
    return (
      <div>
        <button data-index="1" onClick={this.clickEvent}>内容1</button>
        <button data-index="2" onClick={this.clickEvent}>内容2</button>
        <div className={this.state.c1}>
          <h2>我是内容1</h2>
        </div>
        <div className={this.state.c2}>
          <h2>我是内容2</h2>
        </div>
      </div>
    )
  }
}


Reactdom.render(
  <Tab />,
  document.querySelector('#root')
)