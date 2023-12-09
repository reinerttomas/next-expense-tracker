import { Expense } from '@/types/Expense'
import { Pencil, Trash, TrendingDown, TrendingUp } from 'lucide-react'
import { FC } from 'react'

type ExpenseProps = {
  expense: Expense
}

const Exspense: FC<ExpenseProps> = ({ expense }) => {
  return (
    <div className="flex items-center">
      {expense.amount.isPositive() ? <TrendingUp /> : <TrendingDown />}
      <div className="ml-6 space-y-1">
        <p className="text-sm font-medium">
          {expense.amount.isNegative() && '-'}${expense.amount.abs().toFixed(2)}
        </p>
        <p className="text-sm text-neutral">{expense.title}</p>
      </div>
      <div className="ml-auto">
        <div className="flex gap-4">
          <Pencil className="text-primary" cursor="pointer" size={20} />
          <Trash className="text-error" cursor="pointer" size={20} />
        </div>
      </div>
    </div>
  )
}

export default Exspense
