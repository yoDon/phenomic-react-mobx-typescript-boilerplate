import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { createApp, renderApp } from '@phenomic/preset-react-app/lib/client'
import { useStrict } from 'mobx'
import Html from './src/components/Html'
import Home from './src/components/Home'
import BlogPostContainer from './src/components/BlogPostContainer'

useStrict(true);

const routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/blog/*" component={BlogPostContainer} />
  </Router>
);

export default createApp(routes, Html);

if (module.hot) {
  module.hot.accept(() => renderApp(routes))
}