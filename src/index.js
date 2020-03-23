import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import RichText from './pages/RichText';

ReactDOM.render(<RichText />, document.getElementById('root'));

serviceWorker.unregister();
