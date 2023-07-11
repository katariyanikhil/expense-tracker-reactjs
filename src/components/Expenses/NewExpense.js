import React, { useState } from "react";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const currentDate = new Date().toLocaleDateString("fr-CA");

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // A alternative way to just only use one useState and passing an object to it.

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });
  //
  // A way to set Title using above object input way
  // setUserInput((prevState) => {
  //   return {
  //     ...prevState,
  //     enteredTitle: event.target.value,
  //   }
  // });

  const addExpense = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      id: Math.random().toString(),
    };
    props.onAddExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <form onSubmit={addExpense}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                required
                value={enteredTitle}
                onChange={(event) => setEnteredTitle(event.target.value)}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                required
                value={enteredAmount}
                min="0.01"
                step="0.01"
                onChange={(event) => setEnteredAmount(event.target.value)}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                required
                value={enteredDate}
                min="2019-01-01"
                max={currentDate}
                onChange={(event) => setEnteredDate(event.target.value)}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={stopEditingHandler}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default NewExpense;
