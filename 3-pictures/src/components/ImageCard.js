import React, { useEffect, useRef, useState } from 'react';

const ImageCard = ({ style, urls, alt_description }) => {
    const imageRef = useRef();
    const [spans, setSpans] = useState(0);

    useEffect(() => {
        imageRef.current.addEventListener('load', () => {
            const height = imageRef.current.clientHeight;
            setSpans(Math.ceil(height / 10))
        });
    }, []);

    return (
        <div style={{ gridRowEnd: `span ${spans}`}}>
            <img
                className={style}
                ref={imageRef}
                src={urls}
                alt={alt_description}
            />
        </div>
    );
};

export default ImageCard;
