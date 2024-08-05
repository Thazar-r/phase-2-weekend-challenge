import React from 'react';

const TransactionForm = ({ onAdd, newTransaction, setNewTransaction }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTransaction.description && newTransaction.amount && newTransaction.category && newTransaction.date) {
      onAdd(newTransaction);
      setNewTransaction({ description: '', amount: '', category: '', date: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="description" 
        value={newTransaction.description} 
        onChange={handleChange} 
        placeholder="Description" 
      />
      <input 
        type="number" 
        name="amount" 
        value={newTransaction.amount} 
        onChange={handleChange} 
        placeholder="Amount" 
      />
      <input 
        type="text" 
        name="category" 
        value={newTransaction.category} 
        onChange={handleChange} 
        placeholder="Category" 
      />
      <input 
        type="date" 
        name="date" 
        value={newTransaction.date} 
        onChange={handleChange} 
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
