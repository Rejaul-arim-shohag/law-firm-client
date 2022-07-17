import React from 'react';
import ReactSlick from './ReactSlick';

import './productDetails.scss';
import watchImg355 from '../ProductDetails/3.jpg';
import watchImg481 from '../ProductDetails/3.jpg';
import watchImg584 from '../ProductDetails/3.jpg';
import watchImg687 from '../ProductDetails/3.jpg';
import watchImg770 from '../ProductDetails/3.jpg';
import watchImg861 from '../ProductDetails/3.jpg';
import watchImg955 from '../ProductDetails/3.jpg';
import watchImg1033 from '../ProductDetails/3.jpg';
import watchImg1112 from '../ProductDetails/3.jpg';
import watchImg1192 from '../ProductDetails/3.jpg';
import watchImg1200 from '../ProductDetails/3.jpg';
import ReactImageMagnify from 'react-image-magnify';
export default function ProductDetails() {
    function srcSet() {
        return [
            `${watchImg355} 355w`,
            `${watchImg481} 481w`,
            `${watchImg584} 584w`,
            `${watchImg687} 687w`,
            `${watchImg770} 770w`,
            `${watchImg861} 861w`,
            `${watchImg955} 955w`,
            `${watchImg1033} 1033w`,
            `${watchImg1112} 1112w`,
            `${watchImg1192} 1192w`,
            `${watchImg1200} 1200w`,
        ].join(', ');
    }
    return (
        <div className="fluid">
            <div className="fluid__image-container">
                <ReactImageMagnify {...{
                    smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        isFluidWidth: true,
                        src: watchImg1200,
                        srcSet: srcSet,
                        sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                    },
                    largeImage: {
                        src: watchImg1200,
                        width: 1200,
                        height: 1800
                    },
                    enlargedImageContainerDimensions: {
                        width: '200%',
                        height: '100%'
                    }
                }} />
            </div>
            <div className="fluid__instructions">
               

            </div>
            <div style={{ height: '500px' }} />
        </div>
    );
}