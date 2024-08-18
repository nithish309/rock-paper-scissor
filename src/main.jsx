import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ChancePage from './ChancePage';
import Gameplay from './Gameplay';
import { TransferValue } from './TransferContext';

const routing = createBrowserRouter([
  { path: '/', 
    element: <ChancePage /> 
  },
  { path: '/gameplay', 
    element: <Gameplay />
  },
]);

const Root = () => {
  const [val, setVal] = useState('');

  return (
    <TransferValue.Provider value={{ val, setVal }}>
      <RouterProvider router={routing} />
    </TransferValue.Provider>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
