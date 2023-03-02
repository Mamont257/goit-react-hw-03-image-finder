import React, {Component} from "react";
import { Searchbar } from "./Searchbar/Searchbar";






export class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,

    image: "",
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

  handleSubmit = (e) => {
    // e.preventDefault();

    // this.setState({isLoading: true})
    console.log(e);

  }




  render() {
    const { articles, isLoading, error } = this.state;

    return (
      <div>
        <Searchbar search={this.handleSubmit} />


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
