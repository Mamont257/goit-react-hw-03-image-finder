import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import React, { Component } from "react";
import { toast } from 'react-toastify';
import { ImageGal } from "./ImageGallery.styled";
import { Dna } from  'react-loader-spinner'



export class ImageGallery extends Component {
    state = {
        images: null,

        isLoading: false,
    }

    componentDidUpdate(prevProps, prevState) {
        
        if (prevProps.imageName !== this.props.imageName) {
            this.setState({ isLoading: true });
            // setTimeout(() => {
                this.fetchImages();
            // }, 2000);
            
        }
    }


    async fetchImages(page = 1) {
        const BASE_URL = 'https://pixabay.com/api/';
        const KEY = '32844399-402b025363825ff7850242d10';


        fetch(`${BASE_URL}?key=${KEY}&q=${this.props.imageName}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`).then(resp => {
            if (!resp.ok) {
                throw new Error(resp.status);
            }
            return resp.json();
        }).then(images => {
            if (!images.total) {
                toast.error('Bad recwest')
            }
            // console.log(images);
            this.setState({ images: images.hits })
        }).finally(
            this.setState({isLoading: false})
        )
    }
    

    render() {
        const { images, isLoading } = this.state;
        return (
        <div>
            {isLoading && <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                    wrapperStyle={{
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}
                wrapperClass="dna-wrapper"
            />}
            <ImageGal>
                {images && <ImageGalleryItem image={images} />}
            </ImageGal>
        </div>
        )
    }
}