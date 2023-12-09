import ExpenseList from '@/components/ExpenseList'
import { Coins, TrendingDown, TrendingUp } from 'lucide-react'
import prisma from '@/lib/prisma'

export default async function Home() {
  const expenses = await prisma.expense.findMany()

  return (
    <div>
      <div className="mx-auto w-full max-w-4xl p-8 pt-0">
        <div className="mb-8 grid grid-cols-2 gap-6">
          <div className="card col-span-2 shadow">
            <div className="card-body">
              <h3 className="font-semibold tracking-tight">Your Balance</h3>
              <div className="text-2xl font-bold">$45,231.89</div>
            </div>
          </div>
          <div className="card shadow">
            <div className="card-body">
              <div className="flex flex-row justify-between space-y-0">
                <h3 className="font-semibold tracking-tight">Income</h3>
                <TrendingUp />
              </div>
              <div className="text-2xl font-bold">$45,231.89</div>
            </div>
          </div>
          <div className="card shadow">
            <div className="card-body">
              <div className="flex flex-row justify-between space-y-0">
                <h3 className="font-semibold tracking-tight">Expense</h3>
                <TrendingDown />
              </div>
              <div className="text-2xl font-bold">$45,231.89</div>
            </div>
          </div>
        </div>

        <div className="card mb-8 shadow">
          <div className="card-body">
            <div className="space-y-4">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Amount</span>
                </div>
                <input
                  type="text"
                  placeholder="Amount"
                  className="input input-bordered"
                />
                <div className="label">
                  <span className="label-text-alt">Bottom Left label</span>
                </div>
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Title</span>
                </div>
                <input
                  type="text"
                  placeholder="Describe your expense..."
                  className="input input-bordered"
                />
                <div className="label">
                  <span className="label-text-alt">Bottom Left label</span>
                </div>
              </label>
              <button className="btn btn-primary btn-block">
                <Coins />
                Add Expense
              </button>
            </div>
          </div>
        </div>

        <ExpenseList expenses={expenses} />
      </div>
    </div>
  )
}
