import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './reducers';
import { TeamPickerContainer } from './containers/TeamPicker';
import { GameAttributesPickerContainer } from './containers/GameAttributesPicker';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <TeamPickerContainer />
      <GameAttributesPickerContainer />
    </div>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
