import React, {Component} from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from "./ImageGallery/ImageGallery";



export class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,

    imageName: "",
    page: 1,
  }

  handleSubmit = (imageName) => {
    this.setState({imageName})
  }

  handleClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { imageName, page } = this.state;

    return (
      <div>
        <Searchbar onSearch={this.handleSubmit} />
        <ToastContainer autoClose={2000} />
        <ImageGallery
          imageName={imageName}
          page={page}
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}