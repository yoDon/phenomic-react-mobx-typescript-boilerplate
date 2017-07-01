import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Head from 'react-helmet'
import DevTools from 'mobx-react-devtools';

class Html extends React.Component<{body: any, state:any, script:any}, {}> {

  render() {
    const helmet = Head.renderStatic();
    return (
      <html { ...helmet.htmlAttributes.toComponent() } >
        <head>
          {helmet.base.toComponent()}
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
          {helmet.style.toComponent()}
          {helmet.script.toComponent()}
          {helmet.noscript.toComponent()}
        </head>
        <body { ...helmet.bodyAttributes.toComponent() } >
          { /* Include MobX dev tools in dev builds */ }
          { module.hot ? <DevTools /> : "" }
          { /* phenomic html output, phenomic state as json, phenomic js bundle */}
          { this.props.body }
          { this.props.state }
          { this.props.script }
        </body>
      </html>
    )
  }

}

export default Html