import { useEffect, useRef } from 'react';
import './textCarousel.css';

export function TextCarousel({
    texts,
    delay = 2000,
}: {
    texts: string[];
    delay?: number;
}) {
    const slideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const slideContainer = slideRef.current;
        const slides = Array.from(slideContainer?.querySelectorAll('p') || []);
        const slideCount = slides.length;
        let currentIndex = 0;

        const animateSlide = () => {
            slides.forEach((slide) => slide.classList.remove('active'));

            currentIndex = (currentIndex + 1) % slideCount;
            slides[currentIndex].classList.add('active');
        };

        // Immediately display the first slide
        slides[currentIndex].classList.add('active');
        currentIndex++;

        const interval = setInterval(animateSlide, delay);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="textCarousel-wrapper">
            <div className="slide" ref={slideRef}>
                {texts.map((text) => (
                    <p key={text.replace(/\s/g, '')}>{text}</p>
                ))}
            </div>
        </div>
    );
}
