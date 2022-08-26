import "./App.css";
import Header from "../components/header/Header";
import PostsList from "../components/post/PostsList";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import { Component } from "react";
import array from "./posts";
import SearchPost from "./SearchPost";
import AddPost from "./AddPost";
import Pagination from "../components/pagination";
import { paginate } from "../data/paginate";

class App extends Component {
  state = {
    posts: [],
    showSearch: false,
    showAddPost: false,
    currentPage: 1,
    pageSize: 9,
  };

  componentDidMount() {
    this.allPosts = array;
    this.populate();

    this.setState({
      posts: this.allPosts,
      showSearch: false,
      showAddPost: false,
      currentPage: 1,
      pageSize: 9,
    });
  }

  populate = () => {
    this.count = localStorage.getItem("count");
    if (!this.count) {
      this.count = 0;
      return;
    }

    for (let i = 1; i <= +this.count; i++) {
      let obj = JSON.parse(localStorage.getItem(i));
      this.allPosts = [obj, ...this.allPosts];
    }
  };

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
    let name = event.target.name,
      content;
    if (name === "All") content = this.allPosts;
    else content = this.allPosts.filter((element) => element.category === name);

    this.setState({
      posts: content,
    });
  };

  handleSearch = (obj) => {
    let arr;
    if (obj.category === "All") {
      arr = this.allPosts.filter(
        (x) => x.country === obj.country && x.city === obj.city
      );
    } else {
      arr = this.allPosts.filter(
        (x) =>
          x.category === obj.category &&
          x.country === obj.country &&
          x.city === obj.city
      );
    }

    this.setState({
      posts: arr,
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
