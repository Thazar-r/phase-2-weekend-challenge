import React from 'react';

function TransactionForm({ onAdd, newTransaction, setNewTransaction }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = { ...newTransaction, id: Date.now() };
    onAdd(transaction);
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
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
