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
  }



  // async componentDidMount() {
  //   this.setState({ isLoading: true });

  //   try {
  //     const response = await axios.get("/search?query=react");
  //     this.setState({ articles: response.data.hits });
  //   } catch (error) {
  //     this.setState({ error });
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // }

  handleSubmit = (imageName) => {
    // this.setState({isLoading: true})
    // console.log(imageName);

    this.setState({imageName})

  }


  render() {
    const { articles, isLoading, error } = this.state;

    return (
      <div>
        <Searchbar search={this.handleSubmit} />
        <ToastContainer autoClose={2000} />
        <ImageGallery imageName={this.state.imageName} />


        {/* {error && <p>Whoops, something went wrong: {error.message}</p>} */}
        {/* {isLoading && <p>Loading...</p>} */}
        {/* {articles.length > 0 && <ArticleList articles={articles} />} */}
      </div>
    )
  }
}



// export const App = () => {
//   return (
//     <div>
//       React homework template
//     </div>
//   );
// };
