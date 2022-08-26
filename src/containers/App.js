import "./App.css";
import Header from "../components/header/Header";
import PostsList from "../components/post/PostsList";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import { Component } from "react";
import SearchPost from "./SearchPost";
import AddPost from "./AddPost";
import Pagination from "../components/pagination";
import { paginate } from "../data/paginate";
import { getFiltered, populate, getDeepFiltered } from "./../data/posts";

class App extends Component {
  state = {
    posts: [],
    showSearch: false,
    showAddPost: false,
    currentPage: 1,
    pageSize: 9,
  };

  componentDidMount() {
    const { allPosts, count } = populate();
    this.allPosts = allPosts;
    this.count = count;

    this.setState({
      posts: this.allPosts,
      showSearch: false,
      showAddPost: false,
      currentPage: 1,
      pageSize: 9,
    });
  }

  handleShowSearch = () => {
    this.setState({
      showSearch: !this.state.showSearch,
      showAddPost: false,
    });
  };

  handleAddPost = () => {
    this.setState({
      showSearch: false,
      showAddPost: !this.state.showAddPost,
    });
  };

  handleOnItemSelect = (event) => {
    this.setState({
      posts: getFiltered(event.target.name),
      currentPage: 1,
    });
  };

  handleSearch = (obj) => {
    this.setState({
      posts: getDeepFiltered(obj),
      currentPage: 1,
      showSearch: false,
    });
  };

  handleAdd = (obj) => {
    obj.id = 101 + this.count;
    this.allPosts = [obj, ...this.allPosts];
    this.setState({ posts: this.allPosts });

    localStorage.setItem("count", ++this.count);
    localStorage.setItem(this.count, JSON.stringify(obj));
  };

  handlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  render() {
    const { posts, currentPage, pageSize } = this.state;
    const paginated = paginate(posts, currentPage, pageSize);
    return (
      <div>
        <Header
          setShowSearch={this.handleShowSearch}
          setAddPost={this.handleAddPost}
          onCatClick={this.handleOnItemSelect}
        />
        <AddPost
          trigger={this.state.showAddPost}
          addButtonClick={this.handleAdd}
        />
        <SearchPost
          trigger={this.state.showSearch}
          onSearchClick={this.handleSearch}
        />
        <Scroll>
          <ErrorBoundry>
            <Pagination
              itemsCount={posts.length}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
            />
            <PostsList posts={paginated} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
