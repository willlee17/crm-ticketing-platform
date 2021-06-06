import './App.css';

import EntryPage  from './pages/entry/EntryPage';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
     {/* <EntryPage /> */}
    <DefaultLayout>
      <Dashboard />
    </DefaultLayout>
    </div>
  );
}

export default App;
