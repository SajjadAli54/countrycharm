
import './App.css';
import Header from '../components/header/Header';
import PostsList from '../components/post/PostsList';
import { Component } from 'react';

import arr from './posts'

class App extends Component {
  constructor() {
    super()

    this.state = {
      array: arr
    }

  }

  render() {
    return (
      <div>
        <Header />
        <PostsList array={this.state.array} />
      </div >
    );
  }
}
export default App;
