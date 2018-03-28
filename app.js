/* ejercicio de foto
import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component {
  render(){
    return(<div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO2ewS0xpcxeIeqCgJ4DZdyJzs31Ub3M3sEQ3NX-373zKi6g_x" />
        <p>Abigail</p>
        <p>25 años</p>
      </div>
    )
  }i
}

ReactDOM.render(<App />, document.getElementById("container-react"))

/////////////////////

class App extends React.Component {
  constructor() {
    super(),
      this.state({time:Date.now() }),
    }

    ComponentDidMoont(){
      setInterval()=> {
        this.setState({time:Date.now()});
      },1000);
    }
  }
}

render() {
  console.log("se pinta el reloj");
  return (<div>
      <p>la hora actual es:</p>
      <p>{ComponentDidMoont}</p>
    </div>)
}

ReactDOM.render(<App />, document.getElementById("container-react"))
*/
