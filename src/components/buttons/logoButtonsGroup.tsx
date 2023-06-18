import './logoButtonsGroup.css';

export interface ButtonObject {
    id: string;
    src: string;
    alt: string;
}

export function LogoButtonsGroup({
    buttons,
    activeButtonId,
    onChange,
}: {
    buttons: ButtonObject[];
    activeButtonId: any;
    onChange: (buttonId: any) => void;
}) {
    const handleClick = (button: ButtonObject) => {
        onChange(button.id);
    };

    return (
        <>
            {buttons.map((button) => (
                <button
                    key={button.id}
                    className={activeButtonId === button.id ? 'active' : ''}
                    onClick={() => handleClick(button)}
                >
                    <img src={button.src} alt={button.alt} />
                    <p>{button.alt}</p>
                </button>
            ))}
        </>
    );
}
