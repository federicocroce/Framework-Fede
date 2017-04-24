import React from 'react';
import {render} from 'react-dom';
import App from '../app/appTable.js';

require('./style/app.scss');

render(<App />, document.getElementById('app'));
