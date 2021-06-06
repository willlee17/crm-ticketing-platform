import './App.css';

import EntryPage  from './pages/entry/EntryPage';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './pages/dashboard/Dashboard';
import AddTicketPage from './pages/new-ticket/AddTicketPage';
import TicketList from './pages/ticket-list/TicketList';

function App() {
  return (
    <div className="App">
     {/* <EntryPage /> */}
    <DefaultLayout>
      {/* <Dashboard /> */}
      {/* <AddTicketPage /> */}
      <TicketList />
    </DefaultLayout>
    </div>
  );
}

export default App;
