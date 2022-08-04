import Header from '../components/header/Header';
import Input from '../components/input/Input';
import PostsList from '../components/post/PostsList';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Input />
      <scroll>
        <PostsList />
      </scroll>
    </div>
  );
}

export default App;
