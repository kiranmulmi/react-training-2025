import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import '@ant-design/v5-patch-for-react-19';
import { unstableSetRender } from 'antd';
import App from './App';

unstableSetRender((node, container) => {
  container._reactRoot ||= createRoot(container);
  const root = container._reactRoot;
  root.render(node);
  return async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    root.unmount();
  };
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

