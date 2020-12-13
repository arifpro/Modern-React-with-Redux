import React, { useEffect, useRef } from 'react';

const ImageCard = ({ id, urls, alt_description }) => {
    const imageRef = useRef();

    useEffect(() => {
        imageRef.current.addEventListener('load', setSpans);
    }, []);

    const setSpans = () => {
        console.log(imageRef.current.clientHeight);
    };

    return (
        <div>
            <img ref={imageRef} src={urls} alt={alt_description} />
        </div>
    );
};

export default ImageCard;
