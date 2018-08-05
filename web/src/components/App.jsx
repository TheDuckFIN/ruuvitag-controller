import React from 'react'
import axios from 'axios'
import ErrorDialog from './ErrorDialog'
import Tag from './Tag'

export default class App extends React.Component {
  state = {
    tags: {},
    error: {
      status: false,
      info: null
    }
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
        this.setState({ tags: data, error: { status: false, info: null } })
      })
      .catch(error => this.setState({ error: { status: true, info: error } }))
  }

  render() {
    const { tags, error } = this.state

    return (
      <main>
        {error.status && <ErrorDialog error={error} />}
        <header>
          <h1>Ruuvitag info</h1>
        </header>
        {Object.keys(tags).map(tagId => <Tag key={tagId} id={tagId} tagData={tags[tagId]} />)}
      </main>
    )
  }
}
