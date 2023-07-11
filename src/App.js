import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense";
import { INITIAL_EXPENSES } from "./components/data/dummyExpenses";

const App = () => {
  const [expenses, setUserExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseDataHandler = (expense) => {
    setUserExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseDataHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
