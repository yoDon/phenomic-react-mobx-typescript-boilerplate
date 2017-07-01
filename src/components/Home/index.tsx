import * as React from "react"
import * as ReactDOM from "react-dom"
import TimerButton from '../../components/TimerButton'

class Home extends React.Component<{}, {}> {

  render() {
    return (
      <div>
        <TimerButton/>
      </div>
    );
  }

}

export default Home;