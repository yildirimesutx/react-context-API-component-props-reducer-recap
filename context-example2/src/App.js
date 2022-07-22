import { useState, useEffect } from 'react';

import ShowUsers from './pages/ShowUsers';
import UserContextProvider from './context/UserContextProvider';

function App() {
  

  return (
    <>
    <UserContextProvider>
    <ShowUsers  />
    </UserContextProvider>
     
    </>
  );
}
export default App;
