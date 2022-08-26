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
  constructor() {
    super();

    this.allPosts = array;
    this.count = 0;

    this.populate();

    this.state = {
      posts: this.allPosts,
      showSearch: false,
      showAddPost: false,
      currentPage: 1,
      pageSize: 9,
    };
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

  setShowSearch = () => {
    this.settingUpState(this.state.posts, !this.state.showSearch, false);
  };

  setAddPost = () => {
    this.settingUpState(this.state.posts, false, !this.state.showAddPost);
  };

  categorise = (event) => {
    let name = event.target.name,
      content;
    if (name === "All") content = this.allPosts;
    else content = this.allPosts.filter((element) => element.category === name);

    this.settingUpState(content, false, false);
  };

  searchButtonClick = (obj) => {
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

    this.settingUpState(arr, false, false);
  };

  addButtonClick = (obj) => {
    obj.id = 101 + this.count;
    this.allPosts = [obj, ...this.allPosts];
    this.settingUpState(this.allPosts, false, false);

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
          setShowSearch={this.setShowSearch}
          setAddPost={this.setAddPost}
          onCatClick={this.categorise}
        />
        <AddPost
          trigger={this.state.showAddPost}
          addButtonClick={this.addButtonClick}
        />
        <SearchPost
          trigger={this.state.showSearch}
          onSearchClick={this.searchButtonClick}
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

  settingUpState = (posts, showSearch, showAddPost) => {
    this.setState({
      posts: posts,
      showSearch: showSearch,
      showAddPost: showAddPost,
    });
  };
}

export default App;
