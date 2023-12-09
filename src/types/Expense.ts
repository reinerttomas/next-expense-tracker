import { Prisma } from '@prisma/client'

export type Expense = {
  id: string
  title: string
  amount: Prisma.Decimal
  createdAt: Date
  updatedAt: Date
}
