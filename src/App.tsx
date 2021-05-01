import React from 'react';
import './App.scss';
import Invoices from 'pages/Invoices';
import Layout from 'components/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Invoices />
      </Layout>

    </div>
  );
}

export default App;
