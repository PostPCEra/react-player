// import React, { Component } from 'react'
import React, {useState, useEffect} from 'react';


/*
class App2 extends Component {
    render() {
      return <h1>Hello, 333 22222222222222222222222222 {this.props.name}</h1>;
    }
  }

  function App2(props) {
    const showMessage = () => {
      alert('Followed ' + props.user);
    };
  
    const handleClick = () => {
      setTimeout(showMessage, 3000);
    };
  
    return (
      <button onClick={handleClick}>Follow</button>
    );
  }

  */

// SR Note: above 2 are working, even this useState/useEffect is working
//  so problem is some where  'in the deep code '  with RTableApp.js
// 
  function App2() {
    const [message, setMessage] = useState()
    
    // Changing the title every time the message changes is a side-effect,
    // so it needs to go in `useEffect`
    useEffect(() => {
      document.title = message
    }, [message])
  
    return <input type="text" value="test val..." onChange={e => setMessage(e.target.value)} />
  }
  
  
  export default App2
