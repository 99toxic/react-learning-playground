import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter.component';
import ExpensesList from './ExpensesList/Expenses.component';
import ExpensesChart from './ExpensesChart/ExpensesChart.component';

import './Expenses.styles.scss';

const Expenses = props => {
  const [pickedYear, setPickedYear] = useState('All');

  const savePickedYear = selectedYear => {
    setPickedYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return (
      expense.date.getFullYear().toString() === pickedYear ||
      pickedYear === 'All'
    );
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={pickedYear}
          onSavePickedYear={savePickedYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
