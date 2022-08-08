
import './App.css';
import Header from '../components/header/Header';
import PostsList from '../components/post/PostsList';
import { Component } from 'react';

import arr from './posts'
import { array } from 'prop-types';

class App extends Component {
  constructor() {
    super()

    this.state = {
      array: arr
    }

  }

  clickHandle = event => {
    let name = event.target.name;
    if (name === 'All') {
      this.setState({
        array: arr
      })
    }
    else {
      this.setState({
        array: arr.filter(x => x.category === name)
      })
    }
  }

  render() {
    return (
      <div>
        <Header handler={this.clickHandle} />
        <PostsList array={this.state.array} />
      </div >
    );
  }
}
export default App;
