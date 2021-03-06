import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface ProductCarouselProps {
    images: [string];
}

export const ProductCarousel = ({ images }: ProductCarouselProps) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
        >
            {images.map((image: string, index: number) => (
                <img src={image} key={index} onClick={() => window.open(image, '_blank')} />
            ))}
        </Carousel>
    );
};
