import React from 'react'

export default class LastUpdatedTimer extends React.Component {
  state = {
    diff: 0
  }

  componentDidMount = () => {
    this.updateDiff()
    this.interval = setInterval(this.updateDiff, 1000)
  }

  componentWillUnmount = () => {
    clearInterval(this.interval)
  }

  updateDiff = () => {
    this.setState({ diff: Date.now() - this.props.updated })
  }

  render() {
    const { diff } = this.state

    return (
      <div className='last-updated'>
        Last updated: {formatTime(diff)}
      </div>
    )
  }
}

const formatTime = diff => {
  const seconds = diff / 1000
  if (seconds < 60) return `${Math.floor(seconds)}s`
  const minutes = seconds / 60
  if (minutes < 60) return `${Math.floor(minutes)}min`
  return '>1h'
}
