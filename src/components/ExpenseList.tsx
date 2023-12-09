import { Expense } from '@/types/Expense'
import { FC } from 'react'
import Exspense from './Exspense'

type ExpenseListProps = {
  expenses: Expense[]
}

const ExpenseList: FC<ExpenseListProps> = ({ expenses }) => {
  return (
    <div className="col-span-3 grid">
      <div className="card shadow">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="font-semibold tracking-tight">History</h3>
        </div>
        <div className="p-6 pt-0">
          <div className="space-y-8">
            {expenses.map((expense) => (
              <Exspense key={expense.id} expense={expense} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpenseList
