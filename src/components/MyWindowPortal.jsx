import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class MyWindowPortal extends React.Component {
  constructor(props) {
    super(props);
    // Step 1: create a container <div>
    this.containeEl = document.createElement('div');
    this.containeEl.style.fontFamily = "Helvetica"
    // this.containeEl.style.pointerEvents = "none"

    if(this.props.text){
        this.containeEl.style.fontSize = "2rem"
    } else {
        this.containeEl.style.fontSize = "6rem"
        this.containeEl.style.color= "rgb(0, 0, 255)"
    }
   
    this.externalWindow = null;
    this.state = {
        left: this.props.left, 
        top: this.props.top,
        width: this.props.width,
        height: this.props.height}
        }


  

  render() {
    // Step 2: append props.children to the container <div> that isn't mounted yet
    return ReactDOM.createPortal(this.props.children, this.containeEl);
  }

  componentDidMount() {
    // Step 3: open a new browser window and store a reference to it
    this.externalWindow = window.open('', '', `width=${this.state.width}},height=${this.state.height},left=${this.state.left},top=${this.state.top}`);

    // Step 4: append the container <div> (that has props.chi.dren append to it) to 
    // the body of the new MyWindowPortal
    this.externalWindow.document.body.appendChild(this.containeEl);
  }

  componentWillUnmount() {
    // Step 5: This will fire when this.state.showWindowPortal in the parent componentDidMount
    // become false. So we tidy up by closing the window
    this.externalWindow.close();
  }
}