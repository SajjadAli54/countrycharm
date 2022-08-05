import './App.css';
import Header from '../components/header/Header';

class App extends Compomemt {
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
