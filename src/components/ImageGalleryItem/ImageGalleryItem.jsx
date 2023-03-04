import React from "react";
import { ImageGalItem, ImageGalItemImage } from "./ImageGalleryItem.styled";


export const ImageGalleryItem = ({image}) => {

        return (
            <div>
                {image.map(({ id, webformatURL, tags }) => (
                <ImageGalItem key={id}>
                    <ImageGalItemImage src={webformatURL} alt={tags} width='400px' />
                </ImageGalItem>
            ))}
            </div>
            )
}