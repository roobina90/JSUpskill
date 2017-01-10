import React from 'react'// masakra bez średników lol
import Message from './Message'

const Button = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func,
    text: React.PropTypes.string
  },
  render () {
    return (<button onClick={this.props.onClick}>{this.props.text}</button>)
  }
})

const MyFirstComponent = React.createClass({
  getInitialState () {
    return {
      value: 0
    }
  },
  onClickUP () {
    this.setState({
      value: this.state.value + 1
    })
  },
  onClickDOWN () {
    this.setState({
      value: this.state.value - 1
    })
  },
  render () {
    return (
      <div>
        <Message message={this.state.value} />
        <button onClick={this.onClickUP} disabled={this.state.value >= 5} >Count up!</button>
        <button onClick={this.onClickDOWN} >Count down!</button>
        <Button onClick={this.onClickUP} text='UP!' />
      </div>
    )
  }
})

export default MyFirstComponent
