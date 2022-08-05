import './App.css';
import { Component } from 'react';
import Header from '../components/header/Header';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
