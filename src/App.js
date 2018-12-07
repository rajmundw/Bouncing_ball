import React, { Component } from 'react';
import './css/App.css';
import './css/css/bootstrap.css'
class App extends Component {
  state={
      ballClass:'ball',
      buttonText:'Bounce the ball',
      title:"Press to bounce",
      animationStatus:'running',
      innerWidth:window.innerWidth
  }

  componentDidMount(){
  // checking page width to proper rwd implementation
      window.addEventListener('resize',()=>{
          //setting state to get to know that component should upadate
          this.setState({
              innerWidth:window.innerWidth
          })
      })
  }

    shouldComponentUpdate(nextProps,nextState){
      // cases when componen should update(breakpoint beetween tablet and laptop, animation status on tablet layout when rendering two buttons)
        if((this.state.innerWidth<=768 && nextState.innerWidth>768)  ||
            (this.state.innerWidth>768 && nextState.innerWidth<=768) ||
        (this.state.animationStatus!==nextState.animationStatus && window.innerWidth<=768)){
            return true
        }
        else {
            return false
        }
    }
    componentDidUpdate(){
      // changing inner text because condition changing is on click so manual
      if(document.querySelectorAll('button').length===2){
          document.querySelectorAll('button')[0].innerText="Bounce the ball"
      }else if(document.querySelectorAll('button').length===1 && this.state.animationStatus==='paused'){
          document.querySelectorAll('button')[0].innerText="Bounce the ball / Reset bouncing"
          document.querySelectorAll('button')[0].setAttribute('title', "Press to continue/Double click to reset")
      }
}
//function to move ball and stop ball, it work on click in button
  moveBallHandler=()=>{
      //initial status
    if(this.state.ballClass==="ball"){
      this.setState({
          ballClass:'bouncing',
          buttonText:'Stop Bounce',
          title:"Click to stop"
      },() => {
          // adding animation
          document.querySelector('.ball-container').children[0].classList=(`${this.state.ballClass}`)
          document.querySelector('button').innerText=(`${this.state.buttonText}`)
          document.querySelector('button').setAttribute('title',`${this.state.title}`)
      })
    }else {
        //paused animation
        if(this.state.animationStatus==='paused'){
            this.setState({
                buttonText:'Stop Bounce',
                title:"Click to stop",
                animationStatus:"running"
            },() => {
                //adding movement
                document.querySelector('button').innerText=(`${this.state.buttonText}`)
                document.querySelector('button').setAttribute('title',`${this.state.title}`)
                document.querySelector('.ball-container').children[0].style.animationPlayState = `${this.state.animationStatus}`
            })
        }else {
            // laptop layout, moving animation
            if (window.innerWidth > 768) {
                this.setState({
                    buttonText: 'Bounce the ball / Reset bouncing',
                    title: "Press to continue/Double click to reset",
                    animationStatus: 'paused',
                }, () => {
                    // pausing animation
                    document.querySelector('button').innerText = (`${this.state.buttonText}`)
                    document.querySelector('button').setAttribute('title', `${this.state.title}`)
                    document.querySelector('.ball-container').children[0].style.animationPlayState = `${this.state.animationStatus}`
                })
            }else{
                //tablet layout, moving animation
                this.setState({
                    buttonText: 'Bounce the ball',
                    title: "Press to continue",
                    animationStatus: 'paused',
                }, () => {
                    //pausing animation
                    document.querySelector('button').innerText = (`${this.state.buttonText}`)
                    document.querySelector('button').setAttribute('title', `${this.state.title}`)
                    document.querySelector('.ball-container').children[0].style.animationPlayState = `${this.state.animationStatus}`
                })
            }
        }
    }
  }
    moveBallHandler2=()=> {
      //reset animation, coming back to initial position
        if (this.state.animationStatus === "paused") {
            this.setState({
                ballClass: 'ball',
                buttonText: 'Bounce the ball',
                title: "Press to bounce",
                animationStatus:"running"
            }, () => {
                document.querySelector('.ball-container').children[0].classList = (`${this.state.ballClass}`)
                document.querySelector('button').innerText = (`${this.state.buttonText}`)
                document.querySelector('button').setAttribute('title', `${this.state.title}`)
                document.querySelector('.ball-container').children[0].style.animationPlayState = `${this.state.animationStatus}`
            })
        }
    }

  render() {
      // rendeing laptop layout
      if (window.innerWidth > 768) {
          return (
              <div className="App">
                  <div className="ball-container">
                      <div className="ball">
                      </div>
                  </div>
                  <div className="text-container">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et sem
                          ex. Sed venenatis congue blandit. Cras tempor porttitor nisi a luctus. Vivamus
                          sit amet magna ut est viverra luctus quis vel erat. Duis nec aliquet magna.
                          Mauris vehicula placerat nulla quis scelerisque. Etiam quis erat lacus. Ut eros
                          dolor, varius congue ante nec, dignissim placerat enim. Aliquam sit amet eros at
                          nisl ultricies iaculis ut in nibh.</p>
                      <button title={this.state.title} onDoubleClick={this.moveBallHandler2}
                              onClick={this.moveBallHandler} type="button" id="bounce">{this.state.buttonText}</button>
                  </div>
              </div>
          );
      }else{
          //rendering tablet layout with two buttons
          if (this.state.animationStatus === "paused") {
              return (
                  <div className="App">
                      <div className="ball-container">
                          <div className="ball">
                          </div>
                      </div>
                      <div className="text-container">
                          <p className="order-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et sem
                              ex. Sed venenatis congue blandit. Cras tempor porttitor nisi a luctus. Vivamus
                              sit amet magna ut est viverra luctus quis vel erat. Duis nec aliquet magna.
                              Mauris vehicula placerat nulla quis scelerisque. Etiam quis erat lacus. Ut eros
                              dolor, varius congue ante nec, dignissim placerat enim. Aliquam sit amet eros at
                              nisl ultricies iaculis ut in nibh.</p>
                          <div className=" order-1 buttons-container">
                              <button style={{marginRight: '10px'}} title={this.state.title} onClick={this.moveBallHandler} type="button"
                                      id="bounce">{this.state.buttonText}</button>
                              <button title={this.state.title} onClick={this.moveBallHandler2} type="button"
                                      id="bounce">Reset</button>
                          </div>
                      </div>
                  </div>
              );
          } else {
              //rendering tablet layout with one button
              return (
                  <div className="App">
                      <div className="ball-container">
                          <div className="ball">
                          </div>
                      </div>
                      <div className="text-container">
                          <p className="order-2 order-sm-1 order-md-1 order-lg-1 order-xl-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et sem
                              ex. Sed venenatis congue blandit. Cras tempor porttitor nisi a luctus. Vivamus
                              sit amet magna ut est viverra luctus quis vel erat. Duis nec aliquet magna.
                              Mauris vehicula placerat nulla quis scelerisque. Etiam quis erat lacus. Ut eros
                              dolor, varius congue ante nec, dignissim placerat enim. Aliquam sit amet eros at
                              nisl ultricies iaculis ut in nibh.</p>
                          <button className="order-1 order-sm-2 order-md-2 order-lg-2 order-xl-2" title={this.state.title} onClick={this.moveBallHandler} type="button"
                                  id="bounce">{this.state.buttonText}</button>
                      </div>
                  </div>
              );
          }
      }
  }
}

export default App;
