import React, {Component} from 'react';
import actions from '../actions';
import {connect} from 'react-redux';
class App extends Component {
  goPage1 = ()=>{
    this.props.go('/page1');
  }
  render() {
    console.log(this.props.router);
    return (
      <div>
        <button onClick={this.goPage1}>Page1</button>
      </div>
    )
  }
}
export default connect(state=>state,actions)(App);