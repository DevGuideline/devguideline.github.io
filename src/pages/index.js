import React from 'react'
import { Helmet } from 'react-helmet'

export default class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Index page title</title>
        </Helmet>
        <div>hello world</div>
        <div>
          this is a pencent
        </div>
      </div>
    )
  }
}
