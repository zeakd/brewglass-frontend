import React from 'react'

class Sidebar extends React.Component {
  render () {
    return (
      <div className='Sidebar'>
        <button onClick={this.props.onClose}>close</button>
      </div>
    )
  }
}

export default Sidebar;
