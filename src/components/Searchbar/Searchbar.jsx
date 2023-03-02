import React, {Component} from "react";


export class Searchbar extends Component {
    state = {
        searchImage: "",
    }

    handleSearchImg = e => {
        this.setState({ searchImage: e.target.value.toLowerCase() });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.search(this.state.searchImage)
        this.setState({searchImage: ""})
    }



    render() {
        return (
            <header>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">
                        <span>Search</span>
                    </button>

                    <input
                        type="text"
                        name="image"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleSearchImg}
                    />
                </form>
            </header>
        )
    }
}