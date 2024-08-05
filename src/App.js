import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';
import './styles/App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newTransaction, setNewTransaction] = useState({
    description: '',
    amount: '',
    category: ''
  });

  useEffect(() => {
    // Fetch transactions data from the server
    fetch('http://localhost:8001/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching transactions:', error));
  }, []);

  const addTransaction = (transaction) => {
    // Add transaction to the local state
    setTransactions([...transactions, transaction]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <TransactionForm 
        onAdd={addTransaction} 
        newTransaction={newTransaction} 
        setNewTransaction={setNewTransaction} 
      />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;
