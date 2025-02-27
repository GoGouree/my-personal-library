import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Widget from './components/Widget';
import SubPage from './components/SubPage';
import './styles/App.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <h1>My React App</h1>
                <Widget />
                <Switch>
                    <Route path="/subpage" component={SubPage} />
                    {/* Add more routes as needed */}
                </Switch>
            </div>
        </Router>
    );
};

export default App;