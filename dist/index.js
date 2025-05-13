var Category;
(function (Category) {
    Category["Food"] = "Food";
    Category["Travel"] = "Travel";
    Category["Shopping"] = "Shopping";
    Category["Others"] = "Others";
})(Category || (Category = {}));
var Status;
(function (Status) {
    Status["Paid"] = "paid";
    Status["Pending"] = "pending";
})(Status || (Status = {}));
var expenses = [];
var transactions = [];
var expenseNameInput = document.getElementById("expenseName");
var amountInput = document.getElementById("amount");
var categorySelect = document.getElementById("category");
var statusSelect = document.getElementById("status");
var dateInput = document.getElementById("date");
var expenseTableBody = document.getElementById("expenseTableBody");
var totalExpensesSpan = document.getElementById("totalExpenses");
var avgExpensesSpan = document.getElementById("avgExpenses");
var totalPaidExpensesSpan = document.getElementById("totalPaidExpenses");
var errorDiv = document.getElementById("error");
var addExpenseBtn = document.getElementById("addExpenseBtn");
var resetFormBtn = document.getElementById("resetFormBtn");
var computeStats = function (expenses) {
    var total = expenses.reduce(function (sum, expense) { return sum + expense.amount; }, 0);
    var average = expenses.length > 0 ? total / expenses.length : 0;
    return { total: total, average: average };
};
var filterExpenses = function (status) {
    return status ? expenses.filter(function (expense) { return expense.status === status; }) : expenses;
};
var validateStatus = function (status) {
    if (status === Status.Paid || status === Status.Pending) {
        return status;
    }
    throw new Error("Invalid status");
};
var resetForm = function () {
    expenseNameInput.value = "";
    amountInput.value = "";
    categorySelect.value = Category.Food;
    statusSelect.value = Status.Paid;
    dateInput.value = "";
    errorDiv.style.display = "none";
    errorDiv.textContent = "";
};
var validateCategory = function (category) {
    var validCategories = Object.values(Category);
    if (validCategories.includes(category)) {
        return category;
    }
    throw new Error("Invalid category");
};
var addExpense = function () {
    try {
        var name_1 = expenseNameInput.value.trim();
        var amount = parseFloat(amountInput.value);
        var category = validateCategory(categorySelect.value);
        var status_1 = validateStatus(statusSelect.value);
        var date = dateInput.value;
        if (!name_1 || isNaN(amount) || amount <= 0 || !date) {
            throw new Error("Please fill all fields correctly. Amount must be greater than 0.");
        }
        var expense = { name: name_1, amount: amount, category: category, status: status_1, date: date };
        expenses.push(expense);
        var transaction = [name_1, amount, date];
        transactions.push(transaction);
        // Log to console
        console.log("New Expense Added:", {
            Name: name_1,
            Amount: amount,
            Category: category,
            Status: status_1,
            Date: date
        });
        var row = document.createElement("tr");
        row.innerHTML = "\n            <td>".concat(name_1, "</td>\n            <td>").concat(amount, "</td>\n            <td>").concat(category, "</td>\n            <td>").concat(status_1, "</td>\n            <td>").concat(date, "</td>\n        ");
        expenseTableBody.appendChild(row);
        var stats = computeStats(expenses);
        totalExpensesSpan.textContent = stats.total.toFixed(2);
        avgExpensesSpan.textContent = stats.average.toFixed(2);
        var paidExpenses = filterExpenses(Status.Paid);
        var paidStats = computeStats(paidExpenses);
        totalPaidExpensesSpan.textContent = paidStats.total.toFixed(2);
        resetForm();
    }
    catch (error) {
        var errorMessage = error.message;
        errorDiv.style.display = "block";
        errorDiv.textContent = errorMessage;
    }
};
// Attach event listeners
addExpenseBtn.addEventListener("click", addExpense);
resetFormBtn.addEventListener("click", resetForm);
