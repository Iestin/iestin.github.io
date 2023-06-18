import { ReactNode } from 'react';
import './gradientText.css';

type Props = {
    children: string | ReactNode;
};

export function GradientText({ children }: Props) {
    return <span className="gradient-text">{children}</span>;
}
