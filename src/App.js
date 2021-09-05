import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';
import NavBar from './components/NavBar';

const HomePage = React.lazy(() => import('./pages/HomePage'));

function App() {
    return (
        <Suspense fallback={<div />}>
            <GlobalStyle />
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" component={HomePage} />
                </Switch>
            </Router>
        </Suspense>
    );
}

export default App;
