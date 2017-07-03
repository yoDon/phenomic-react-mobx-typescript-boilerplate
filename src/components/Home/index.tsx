import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactRouter from 'react-router'
import * as H from 'history'
import TimerButton from '../../components/TimerButton'

interface RouterProvidedProps {
  children:React.ReactElement<any>,
  location:H.Location,
  router:H.History,
  route:ReactRouter.PlainRoute,
  routes:ReactRouter.PlainRoute[],
  params:any,
  routeParams:any
}

class Home extends React.Component<RouterProvidedProps, {}> {

  render() {
    return (
      <div>
        <TimerButton/>
      </div>
    )
  }

}

export default Home