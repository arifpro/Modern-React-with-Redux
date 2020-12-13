import React from 'react';
import ImageCard from './ImageCard';

// styles
import useStyles from './stylesImageList';

const ImageList = ({ images }) => {
    const styles = useStyles();
    
    return (
        <div className={styles.imageList}>
            {
                images.map(({ id, urls, alt_description }) => (
                    // <img
                    //     className={styles.image}
                    //     key={id}
                    //     src={urls.regular}
                    //     alt={alt_description}
                    // />
                    <ImageCard
                        key={id}
                        urls={urls.regular}
                        alt_description={alt_description}
                    />
                ))
            }
        </div>
    )
}

export default ImageList;
