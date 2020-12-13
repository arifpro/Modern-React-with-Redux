import React from 'react';

const ImageList = ({ images }) => {
    console.log(images)
    return (
        <div>
            {
                images.map(({ id, urls, alt_description }) => (
                    <img
                        key={id}
                        src={urls.regular}
                        alt={alt_description}
                    />
                ))
            }
        </div>
    )
}

export default ImageList;
