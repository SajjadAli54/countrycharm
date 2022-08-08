
import './App.css';
import Header from '../components/header/Header';
import Scroll from '../components/Scroll'
import PostsList from '../components/post/PostsList';
import ErrorBoundry from '../components/ErrorBoundry'
import { Component } from 'react';

import arr from './posts'

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
        <Scroll>
          <ErrorBoundry>
            <PostsList array={this.state.array} />
          </ErrorBoundry>
        </Scroll>
      </div >
    );
  }
}
export default App;
