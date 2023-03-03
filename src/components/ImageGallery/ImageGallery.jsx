import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import React, {Component} from "react";



export class ImageGallery extends Component {
    state = {
        images: null,
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.imageName !== this.props.imageName) {
            console.log("erbsrhnsr");
            this.fetchImages();
        }
    }


    async fetchImages(page = 1) {
        const BASE_URL = 'https://pixabay.com/api/';
        const KEY = '32844399-402b025363825ff7850242d10';


        return fetch(`${BASE_URL}?key=${KEY}&q=${this.state.images}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`).then(resp => {
            if (!resp.ok) {
                throw new Error(resp.status);
            }
            return resp.json();
        }).then(images => {
            console.log(images);
            this.setState({images})
        })
}




    render() {
        return (
            <ul>
                {this.state.images && <ImageGalleryItem image={this.state.images} />}
            </ul>
        )
    }
}