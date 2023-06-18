import { useRef, useEffect, ReactNode } from 'react';

type ParticleAnimationProps = {
    isRandomColors?: boolean;
    fillColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    sizeMultiplier?: number;
};

export function ParticleAnimation({
    isRandomColors = true,
    fillColor = 'hsl(0, 0%, 100%)',
    strokeColor = 'hsl(0, 0%, 100%)',
    strokeWidth = 1,
    sizeMultiplier = 25,
}: ParticleAnimationProps): ReactNode {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const resizeHandler = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeHandler);

        resizeHandler();

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];

        class Particle {
            x: number;
            y: number;
            size: number;
            fillColor: string;
            strokeColor: string;
            strokeWidth: number;
            speed: number;
            angle: number;

            constructor() {
                this.x = canvas ? canvas.width * Math.random() : 1;
                this.y = canvas ? canvas.height * Math.random() : 1;
                this.size = Math.random() * sizeMultiplier + 1;
                this.fillColor = isRandomColors
                    ? `hsl(${Math.random() * 360}, 100%, 50%)`
                    : fillColor;
                this.strokeColor = strokeColor;
                this.strokeWidth = strokeWidth;
                this.speed = Math.random();
                this.angle = Math.random() * 360;
            }

            update() {
                if (!canvas) return;
                const radians = (this.angle * Math.PI) / 180;
                this.x += this.speed * Math.sin(radians);
                this.y += this.speed * Math.cos(radians);
                if (this.x < 0 || this.x > canvas.width) {
                    this.angle = -this.angle;
                }
                if (this.y < 0 || this.y > canvas.height) {
                    this.angle = 180 - this.angle;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.fillColor;
                ctx.fill();
                ctx.strokeStyle = this.strokeColor;
                ctx.lineWidth = this.strokeWidth;
                ctx.stroke();
            }
        }

        function loop() {
            if (!ctx) return;
            if (!canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });
            particles = particles.filter((particle) => particle.size > 0.5);
            while (particles.length < 50) {
                particles.push(new Particle());
            }
            requestAnimationFrame(loop);
        }

        const animationId = requestAnimationFrame(loop);
        return () => {
            window.removeEventListener('resize', resizeHandler);
            cancelAnimationFrame(animationId);
        };
    }, [isRandomColors, fillColor, strokeColor, strokeWidth, sizeMultiplier]);

    return <canvas ref={canvasRef} />;
}
