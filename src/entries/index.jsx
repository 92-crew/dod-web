import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/css/common';

import App from '@entries/App';

ReactDom.render(<App />, document.querySelector('#root'));
