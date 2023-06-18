import './App.css';
import { ParticleAnimation } from './components';
import { Greeting, Introduction, SoftwareDevelopment } from './features';

function App() {
    return (
        <div className="App">
            <div className="background-div">
                <ParticleAnimation
                    isRandomColors={false}
                    fillColor="hsl(0, 0%, 0%)"
                    strokeColor="hsl(0, 0%, 25%)"
                />
            </div>
            <div className="content-div">
                <Greeting />
                <img
                    src="/images/portrait.png"
                    alt="Portrait of Me"
                    width="200"
                    height="200"
                />
                <Introduction />
                <SoftwareDevelopment />
            </div>
        </div>
    );
}

export default App;
