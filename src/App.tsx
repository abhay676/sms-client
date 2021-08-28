import React from 'react';
import Router from './router/Router';
import Toast from './shared/Toast/Toast';
function App() {
  return (
    <React.Fragment>
      <Router />
      <Toast />
    </React.Fragment>
  );
}

export default App;
