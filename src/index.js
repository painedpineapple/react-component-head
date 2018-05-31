import React from 'react'
import { render } from 'react-dom'

const styles = {
  fontFamily: 'sans-serif',
}

const App = () => (
  <div style={styles}>
    <p>
      We're not really using the {'<Head>'} component here, but the following is
      how you'd use it in a react-static config:
    </p>
    <pre>
      <code>
        {`import React, { Component } from 'react'
import Head from './Head'

export default {
  ...
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <Meta>
              <link
                href="https://fonts.googleapis.com/css?family=Poppins:300,300i,500,700|Source+Code+Pro:400,700"
                rel="stylesheet"
              />
            </Meta>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
`}
      </code>
    </pre>
  </div>
)

render(<App />, document.getElementById('root'))
