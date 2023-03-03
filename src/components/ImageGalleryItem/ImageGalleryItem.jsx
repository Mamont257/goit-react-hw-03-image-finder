import React, { Component } from "react";


export class ImageGalleryItem extends Component {
    // state = {
    //     image: null,
    // }

    // componentDidUpdate(prevProps, prevState) {

    //     if (prevProps.image !== this.props.image) {
    //         console.log("erbsrhnsr");

    //         let imagesArr = this.props.image.hits;

    //         this.setState({image: imagesArr})
    //     }
    // }


//     async fetchImages(page = 1) {
//     const BASE_URL = 'https://pixabay.com/api/';
//     const KEY = '32844399-402b025363825ff7850242d10';


//         return fetch(`${BASE_URL}?key=${KEY}&q=${this.state.images}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`).then(resp => {
//         if (!resp.ok) {
//             throw new Error(resp.status);
//         }
//         return resp.json();
//     }).then(data => {
//         if (!data.total) {
//             throw new Error(data.total);
//         }
//         console.log(data);
//         return data;
//     })
// }








    render() {
        // console.log(this.state);
        return (
            <div>
            {this.props.images.hits.map(({ id, webformatURL, tags }) => (
                <li key={id}>
                    <img src={webformatURL} alt={tags} />
                </li>
            ))}
            </div>
            )
    }
}