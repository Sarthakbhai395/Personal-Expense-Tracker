﻿# Personal-Expense-Tracker

Personal Expense Tracker 💸📊
Welcome to the Personal Expense Tracker project! This is a simple web application built to help you manage and track your expenses with ease. Whether you're keeping tabs on your daily spending or analyzing your monthly budget, this tool has got you covered! 🚀
📋 Project Overview
This project is a single-page web application that allows users to:

Add expenses with details like name, amount, category, status, and date.
View expenses in a table format.
See statistics such as total expenses, average expense, and total paid expenses.
Log all expense data to the console for debugging.

The app is built using HTML, TypeScript, and CSS, and it runs in the browser using a live server. No complex build tools are required—just open index.html with a live server, and you're good to go! 🌟
✨ Features

Add Expenses: Input expense details including name, amount, category (Food, Travel, Shopping, Others), status (Paid or Pending), and date. 📝
Dynamic Table: Displays all expenses in a clean, hoverable table. 📊
Statistics: Shows total expenses, average expense, and total paid expenses in a stats section. 📈
Validation: Ensures all fields are filled correctly (e.g., amount must be greater than 0). 🚫
Console Logging: Logs all expense data to the browser console for debugging. 🖥️
Responsive Design: Styled with CSS, including gradients, shadows, and transitions for a polished look. 🎨
Form Reset: Reset the form with a single click after adding an expense. 🔄

🛠️ Technologies Used

HTML: Structure of the web page. 🏗️
TypeScript: Logic and interactivity, compiled in the browser using the TypeScript CDN. 💻
CSS: Styling with gradients, transitions, and hover effects. 🎨

🚀 How to Run the Project
Follow these steps to run the project locally:

Clone the Repository:
git clone https://github.com/your-username/personal-expense-tracker.git
cd personal-expense-tracker


Open with Live Server:

If you're using VS Code, install the Live Server extension.
Right-click on index.html and select "Open with Live Server".
This will open the app in your default browser (e.g., http://127.0.0.1:5500/index.html).


Test the App:

Fill in the form (e.g., Expense Name: "Lunch", Amount: 20, Category: Food, Status: Paid, Date: 2025-05-13).
Click "Add Expense".
Open the browser's developer tools (right-click → Inspect → Console) to see the logged data:New Expense Added: {Name: "Lunch", Amount: 20, Category: "Food", Status: "paid", Date: "2025-05-13"}


The table and stats will update on the page.



📂 Project Structure
personal-expense-tracker/
  ├── index.html       # Main HTML file with embedded TypeScript
  ├── index.ts         # TypeScript logic (also embedded in index.html)
  ├── .gitignore       # Git ignore file
  └── README.md        # Project documentation (you're reading it!)

✅ Requirements Fulfilled
This project meets the following requirements:

Form Creation: Inputs for expense name, amount, category, status, and date.
Type Alias: Expense and Transaction type aliases.
Enum: Category and Status enums.
Table Display: Expenses shown in a table using DOM manipulation.
Tuple: Transaction tuple for expense entries.
Functional Expression: computeStats for calculating totals and averages.
Optional Parameters: filterExpenses with optional status parameter.
Union Types: validateStatus for status validation.
Type Assertion: DOM elements cast using as HTMLInputElement, etc.
Validation and Reset: Form validation and reset functionality.

🤝 Contributing
Contributions are welcome! If you'd like to improve this project, please follow these steps:

Fork the repository 🍴
Create a new branch (git checkout -b feature/your-feature)
Make your changes and commit (git commit -m "Add your feature")
Push to your branch (git push origin feature/your-feature)
Open a Pull Request 📥

📜 License
This project is licensed under the MIT License. See the LICENSE file for details. 📄
📬 Contact
If you have any questions or suggestions, feel free to reach out to me on GitHub! 😊

Built with ❤️ by [Sarthakbhai395]
