import React from 'react'

export default class ErrorDialog extends React.Component {
  state = {
    expanded: false
  }

  toggleExpand = () => {
    this.setState(prevState => ({ expanded: !prevState.expanded }))
  }

  render() {
    const { error: { info } } = this.props
    const { expanded } = this.state

    return (
      <div className='error'>
        <p>
          <b>Error!</b> Could not fetch tag data from backend
        </p>
        <p>
          <button className='text-button' onClick={this.toggleExpand}>Show additional details</button>
        </p>
        {expanded && <p>{JSON.stringify(info)}</p>}
      </div>
    )
  }
}
