import React, { Component } from "react";
import { toast } from 'react-toastify';


export class Searchbar extends Component {
    state = {
        imageName: "",
    }

    handleSearchImg = e => {
        this.setState({ imageName: e.target.value.toLowerCase() }); 
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.imageName.trim() !== '') {
            toast('🦄 Wow greats!');
            this.props.search(this.state.imageName)
        }

        this.setState({ imageName: "" })
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
                        name="imageName"
                        value={this.state.imageName}
                        // placeholder="Search images and photos"
                        onChange={this.handleSearchImg}
                    />
                </form>
            </header>
        )
    }
}