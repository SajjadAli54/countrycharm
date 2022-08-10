
import './App.css';
import Header from '../components/header/Header';
import PostsList from '../components/post/PostsList';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import { Component } from 'react';
import array from './posts';
import SearchPost from '../components/post/SearchPost';
import AddPost from '../components/post/AddPost'

class App extends Component {
  constructor() {
    super()

    this.state = {
      posts: array,
      showSearch: false,
      showAddPost: false
    }
  }

  setShowSearch = () => {
    this.settingUpState(this.state.posts, !this.state.showSearch, false)
  }

  setAddPost = () => {
    this.settingUpState(this.state.posts, false, !this.state.showAddPost)
  }

  categorise = event => {
    let name = event.target.name, content;
    if (name === 'All')
      content = array
    else
      content = array.filter(element => element.category === name)

    this.settingUpState(content, false, false)
  }

  render() {
    return (
      <div>
        <Header setShowSearch={this.setShowSearch} setAddPost={this.setAddPost} onCatClick={this.categorise} />
        <AddPost trigger={this.state.showAddPost} />
        <SearchPost trigger={this.state.showSearch} />
        <Scroll>
          <ErrorBoundry>
            <PostsList posts={this.state.posts} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }

  settingUpState = (posts, showSearch, showAddPost) => {
    this.setState({
      posts: posts,
      showSearch: showSearch,
      showAddPost: showAddPost
    })
  }
}
export default App;
