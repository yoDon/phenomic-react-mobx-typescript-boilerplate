import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { observer } from 'mobx-react'
import appState from '../../stores/AppState'

@observer
class TimerView extends React.Component<{}, {}> {

    render() {
        return (
            <div>
                <button onClick={this.onReset}>
                    Seconds passed: {appState.timer}
                </button>
            </div>
        )
     }

     onReset = () => {
         appState.resetTimer()
     }

}

export default TimerView