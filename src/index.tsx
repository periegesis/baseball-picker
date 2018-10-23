import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './reducers';
import { TeamPickerContainer } from './containers/TeamPicker';

ReactDOM.render(
  <Provider store={store}>
    <TeamPickerContainer />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
