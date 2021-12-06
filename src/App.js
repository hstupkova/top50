import { Route, Routes, Navigate } from 'react-router-dom';

import Layout from "./components/layout/Layout";
import Readers from './pages/Readers';
import Comparison from './pages/Comparison';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate replace to='/users' />} />
        <Route path='/readers' element={<Readers />} />
        <Route path='/comparison' element={<Comparison />} />
      </Routes>
    </Layout>
  );
}

export default App;
