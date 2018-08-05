import React from 'react'
import axios from 'axios'

export default class App extends React.Component {
  state = {
    tags: {},
    error: false
  }

  componentDidMount = () => {
    this.fetchTags()
    this.tagUpdateTimer = setInterval(this.fetchTags, 5000)
  }

  componentWillUnmount = () => {
    clearInterval(this.tagUpdateTimer)
  }

  fetchTags = () => {
    const url = process.env.API_URL || '/api'
    return axios.get(url + '/tags')
      .then(result => {
        const { data } = result
        this.setState({ tags: data, error: false })
      })
      .catch(() => this.setState({ error: true }))
  }

  render() {
    return (
      <div className='test'>Test</div>
    )
  }
}
