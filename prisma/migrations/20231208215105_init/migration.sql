-- CreateTable
CREATE TABLE "Expense" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "amount" DECIMAL(8,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Expense_pkey" PRIMARY KEY ("id")
);
