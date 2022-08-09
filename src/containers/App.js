
import './App.css';
import Header from '../components/header/Header';
import PostsList from '../components/post/PostsList';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import { Component } from 'react';
import array from './posts';

class App extends Component {
  constructor() {
    super()

    this.state = {
      posts: array,
      buttonPopUp: false
    }
  }

  setButtonPopUp = () => {
    this.setState({
      posts: array,
      buttonPopUp: true
    })
  }

  categorise = event => {
    let name = event.target.name;
    if (name === 'All')
      this.setState({
        posts: array,
        buttonPopUp: false
      })
    else
      this.setState({
        posts: array.filter(element => element.category === name),
        buttonPopUp: true
      })
  }

  render() {
    return (
      <div>
        <Header buttonPopUp={this.state.buttonPopUp} onCatClick={this.categorise} />
        <Scroll>
          <ErrorBoundry>
            <PostsList posts={this.state.posts} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}
export default App;
