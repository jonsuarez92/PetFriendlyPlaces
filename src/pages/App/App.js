import './App.css';
import { useState } from 'react';
import Area from '../Area/Area';
import AuthPage from '../AuthPage/AuthPage';
import { Routes, Route } from 'react-router-dom'
function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
      {
        user ?
          <>
            <Routes>
              <Route path='/Area' element={<Area />} />
            </Routes>
          </> :
          <AuthPage />

      }
    </main>
  );
}

export default App;
