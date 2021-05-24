import React, { useState, useEffect } from "react"
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import API from '../../utils/API';

function CarouselBooks() {
    const [books] = useState([])
    const [nyBooks, setNyBooks] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === books.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? books.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    useEffect(() => {
        trendingBooks()
    }, [])

    function trendingBooks() {
        API.trendingBooks().then(data => { return data }).then(res => setNyBooks(
            res.data.results.books
        )).catch(err => console.log(err))
    }

    const slides = nyBooks.map((book) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={book.rank}
            >

                <img src={book.book_image} alt={book.altText} />

                <CarouselCaption captionText={book.caption} captionHeader={book.caption}>

                </CarouselCaption>

            </CarouselItem>
        );
    });
    return (
        <div>
            {!nyBooks.length ? (
                <h2>No Trending Books available at this moment </h2>
            ) : <div className="trendingbooks">
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                    >
                        <CarouselIndicators items={books} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                </div>} </div>
             
        
    )
            }

export default CarouselBooks;