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
                <Introduction />
                <SoftwareDevelopment />
            </div>
        </div>
    );
}

export default App;
