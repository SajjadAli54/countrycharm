import Header from '../components/header/Header';
import Input from '../components/input/Input';
import PostsList from '../components/post/PostsList';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Input />
        <scroll>
          <ErrorBoundry>
            <PostsList />
          </ErrorBoundry>
        </scroll>
      </div>
    );
  }
}

export default App;
