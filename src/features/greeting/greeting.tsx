import { TextCarousel } from '../../components';
import './greeting.css';

export function Greeting() {
    // useEffect(() => {
    //     if (typeImA) {
    //         const imATyped = new Typed(imARef.current, {
    //             strings: [
    //                 "<h2>I'm a full-stack software developer.</h2>",
    //                 "<h2>I'm a hobbyist photographer.</h2>",
    //                 "<h2>I'm a music enthusiast.</h2>",
    //             ],
    //             startDelay: 10,
    //             typeSpeed: 50,
    //             showCursor: true,
    //             loop: true,
    //             backDelay: 200,
    //             backSpeed: 50,
    //             smartBackspace: true,
    //         });

    //         return () => {
    //             imATyped.destroy();
    //         };
    //     }
    // }, [typeImA]);

    const texts = [
        'a full-stack software developer.',
        'a hobbyist photographer.',
        'a music enthusiast.',
    ];

    return (
        <div className="greeting">
            <h3>Hello, World!</h3>
            <br />
            <h1>
                I'm <span>Iestin</span>,
            </h1>
            <br />
            <h2>
                <TextCarousel texts={texts} />
            </h2>
        </div>
    );
}
