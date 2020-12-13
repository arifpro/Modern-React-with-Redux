import React from 'react';

const ImageList = ({ images }) => {
    console.log(images)
    return (
        <div>
            {
                images.map(image => (
                    <img key={image.id} src={image.urls.regular} alt={image.alt_description} />
                ))
            }
        </div>
    )
}

export default ImageList;
