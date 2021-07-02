import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import 'tachyons';
// Since we're not using export default on robots, we need to destructure the constant

ReactDOM.render(<App />, document.getElementById('root'));
