import './App.css';
import { ParticleAnimation } from './components';
import { Greeting, Introduction, SoftwareDevelopment } from './features';

function App() {
    return (
        <div className="App">
            <div className="background-div">
                <ParticleAnimation
                    fillColor="hsla(0, 0%, 0%, 0)"
                    strokeColor="hsla(0, 0%, 100%, 0.25)"
                    sizeMultiplier={50}
                />
            </div>
            <div className="content-div">
                <Greeting />
                <img
                    className="rounded-portrait"
                    src="/images/portrait.png"
                    alt="Portrait of Me"
                />
                <Introduction />
                <SoftwareDevelopment />
            </div>
        </div>
    );
}

export default App;
