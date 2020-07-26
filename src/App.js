import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Header, Container } from './components'
const App = () => {
    return (
        <Router>
            <section className="topSection">
                <Header />
            </section>
            <section id="secondSection" className="secondSection">
                <Container />
            </section>
        </Router>
    );
}

export default App;
