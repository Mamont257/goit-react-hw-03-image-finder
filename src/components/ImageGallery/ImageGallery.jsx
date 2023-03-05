import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { ImageGal } from "./ImageGallery.styled";
import { Loader } from "components/Loader/Loader";
import { Button } from "components/Button/Button";


export class ImageGallery extends Component {
    state = {
        images: [],
        isLoading: false,
        isButton: false,
    }

    async componentDidUpdate(prevProps, prevState) {     
        const { imageName, page } = this.props;

        if (prevProps.imageName !== imageName || prevProps.page !== page) {
            await this.setState({ isLoading: true});
            // setTimeout(() => {
                this.fetchImages(imageName, page, prevState);
            // }, 2000);
            
        }
    }

    async fetchImages(imageName, page, prevState) {
        const BASE_URL = 'https://pixabay.com/api/';
        const KEY = '32844399-402b025363825ff7850242d10';

        await fetch(`${BASE_URL}?key=${KEY}&q=${imageName}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`).then(resp => {
            if (!resp.ok) {
                throw new Error(resp.status);
            }
            return resp.json();
        }).then(images => {
            if (!images.total) {
                this.setState({ images: [], isButton: false})
                return toast.error('Bad recvest')
            }
            this.setState({ images: [...prevState.images, ...images.hits], isButton: true })
        }).finally(
            this.setState({isLoading: false})
        )
    }

    render() {
        const { images, isLoading, isButton } = this.state;
        const { handleClick } = this.props;
        return (
        <div>
            {isLoading && <Loader/>}
            <ImageGal>
                {images.map(image => {
              return <ImageGalleryItem key={image.id} image={image} />;
            })}
            </ImageGal>
            {isButton && <Button nextPage={handleClick} />}
        </div>
        )
    }
}


ImageGallery.propTypes = {
  imageName: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};