import React from 'react'
import ReactDOM from 'react-dom'

const App = () => <div>Hello world!</div>

ReactDOM.render(<App />, document.getElementById('root'))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}
