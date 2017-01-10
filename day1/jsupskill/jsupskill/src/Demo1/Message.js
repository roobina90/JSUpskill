import React from 'react'// masakra bez średników lol

const Message = ({message}) => (<h1>{message}</h1>)

Message.propTypes = {
  message: React.PropTypes.number
}

export default Message

 /*
 React.createClass({
  propTypes: {
    message: React.PropTypes.number.isRequire
  },
  render () {
    return (
      <h1>{ this.props.message }</h1>
    )
  }
})
*/
