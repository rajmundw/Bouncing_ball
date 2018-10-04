import React, { Component } from 'react';
import './css/App.css';
class App extends Component {
  state={
      ballClass:'ball',
      buttonText:'Bounce the ball'
  }

  moveBallHandler=()=>{
    if(this.state.ballClass==="ball"){
      this.setState({
          ballClass:'bouncing',
          buttonText:'Stop Bounce'
      })
    }else
      this.setState({
          ballClass:'ball',
          buttonText:'Bounce the ball'
      })
  }

  render() {
    return (
      <div className="App">
          <div className="ball-container">
              <div className={this.state.ballClass}>
              </div>
          </div>
          <div className="text-container">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et sem
                  ex. Sed venenatis congue blandit. Cras tempor porttitor nisi a luctus. Vivamus
                  sit amet magna ut est viverra luctus quis vel erat. Duis nec aliquet magna.
                  Mauris vehicula placerat nulla quis scelerisque. Etiam quis erat lacus. Ut eros
                  dolor, varius congue ante nec, dignissim placerat enim. Aliquam sit amet eros at
                  nisl ultricies iaculis ut in nibh.</p>
              <button onClick={this.moveBallHandler} type="button" id="bounce">{this.state.buttonText}</button>
          </div>
      </div>
    );
  }
}

export default App;
