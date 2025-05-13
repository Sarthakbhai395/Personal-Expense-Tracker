type Expense = {
    name: string;
    amount: number;
    category: Category;
    status: Status;
    date: string;
};

enum Category {
    Food = "Food",
    Travel = "Travel",
    Shopping = "Shopping",
    Others = "Others"
}

enum Status {
    Paid = "paid",
    Pending = "pending"
}

type Transaction = [string, number, string];

let expenses: Expense[] = [];
let transactions: Transaction[] = [];

const expenseNameInput = document.getElementById("expenseName") as HTMLInputElement;
const amountInput = document.getElementById("amount") as HTMLInputElement;
const categorySelect = document.getElementById("category") as HTMLSelectElement;
const statusSelect = document.getElementById("status") as HTMLSelectElement;
const dateInput = document.getElementById("date") as HTMLInputElement;
const expenseTableBody = document.getElementById("expenseTableBody") as HTMLTableSectionElement;
const totalExpensesSpan = document.getElementById("totalExpenses") as HTMLSpanElement;
const avgExpensesSpan = document.getElementById("avgExpenses") as HTMLSpanElement;
const totalPaidExpensesSpan = document.getElementById("totalPaidExpenses") as HTMLSpanElement;
const errorDiv = document.getElementById("error") as HTMLDivElement;
const addExpenseBtn = document.getElementById("addExpenseBtn") as HTMLButtonElement;
const resetFormBtn = document.getElementById("resetFormBtn") as HTMLButtonElement;

const computeStats = (expenses: Expense[]): { total: number, average: number } => {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const average = expenses.length > 0 ? total / expenses.length : 0;
    return { total, average };
};

const filterExpenses = (status?: Status): Expense[] => {
    return status ? expenses.filter(expense => expense.status === status) : expenses;
};

const validateStatus = (status: string): Status => {
    if (status === Status.Paid || status === Status.Pending) {
        return status as Status;
    }
    throw new Error("Invalid status");
};

const resetForm = (): void => {
    expenseNameInput.value = "";
    amountInput.value = "";
    categorySelect.value = Category.Food;
    statusSelect.value = Status.Paid;
    dateInput.value = "";
    errorDiv.style.display = "none";
    errorDiv.textContent = "";
};

const validateCategory = (category: string): Category => {
    const validCategories = Object.values(Category);
    if (validCategories.includes(category as Category)) {
        return category as Category;
    }
    throw new Error("Invalid category");
};

const addExpense = (): void => {
    try {
        const name = expenseNameInput.value.trim();
        const amount = parseFloat(amountInput.value);
        const category = validateCategory(categorySelect.value);
        const status = validateStatus(statusSelect.value);
        const date = dateInput.value;

        if (!name || isNaN(amount) || amount <= 0 || !date) {
            throw new Error("Please fill all fields correctly. Amount must be greater than 0.");
        }

        const expense: Expense = { name, amount, category, status, date };
        expenses.push(expense);

        const transaction: Transaction = [name, amount, date];
        transactions.push(transaction);

        // Log to console
        console.log("New Expense Added:", {
            Name: name,
            Amount: amount,
            Category: category,
            Status: status,
            Date: date
        });

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${name}</td>
            <td>${amount}</td>
            <td>${category}</td>
            <td>${status}</td>
            <td>${date}</td>
        `;
        expenseTableBody.appendChild(row);

        const stats = computeStats(expenses);
        totalExpensesSpan.textContent = stats.total.toFixed(2);
        avgExpensesSpan.textContent = stats.average.toFixed(2);

        const paidExpenses = filterExpenses(Status.Paid);
        const paidStats = computeStats(paidExpenses);
        totalPaidExpensesSpan.textContent = paidStats.total.toFixed(2);

        resetForm();
    } catch (error: unknown) {
        const errorMessage = (error as Error).message;
        errorDiv.style.display = "block";
        errorDiv.textContent = errorMessage;
    }
};

// Attach event listeners
addExpenseBtn.addEventListener("click", addExpense);
resetFormBtn.addEventListener("click", resetForm);