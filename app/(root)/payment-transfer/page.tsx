// 'use client';

// import React, { useState } from 'react';

// // Sample data for the budgets
// const sampleBudgets = [
//   {
//     category: 'Groceries',
//     spendingLimit: 5000,
//     currentSpending: 1500,
//   },
//   {
//     category: 'Entertainment',
//     spendingLimit: 2000,
//     currentSpending: 2200,
//   },
//   {
//     category: 'Transportation',
//     spendingLimit: 1000,
//     currentSpending: 450,
//   },
//   {
//     category: 'Utilities',
//     spendingLimit: 1500,
//     currentSpending: 800,
//   },
//   {
//     category: 'Healthcare',
//     spendingLimit: 3000,
//     currentSpending: 1000,
//   },
//   {
//     category: 'Education',
//     spendingLimit: 2500,
//     currentSpending: 1000,
//   },
//   {
//     category: 'Savings',
//     spendingLimit: 5000,
//     currentSpending: 2000,
//   },
// ];

// const BudgetsPage = () => {
//   const [budgets, setBudgets] = useState(sampleBudgets);
//   const [newBudget, setNewBudget] = useState({
//     category: '',
//     spendingLimit: '',
//     currentSpending: 0,
//   });

//   // Handle the form submission
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Check if all required fields are filled
//     if (!newBudget.category || !newBudget.spendingLimit) {
//       alert('Please fill in all fields!');
//       return;
//     }

//     // Ensure spending limit and current spending are numbers
//     const newBudgetToAdd = {
//       ...newBudget,
//       spendingLimit: parseFloat(newBudget.spendingLimit),
//       currentSpending: 0, // Reset current spending when adding a new budget
//     };

//     setBudgets((prevBudgets) => [...prevBudgets, newBudgetToAdd]);

//     // Reset the form fields after adding
//     setNewBudget({
//       category: '',
//       spendingLimit: '',
//       currentSpending: 0,
//     });
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Budgets</h1>
//       <p className="text-lg text-center text-gray-700 mb-12">Manage your financial budgets effectively.</p>

//       {/* Create Budget Form */}
//       <section className="bg-white p-6 rounded-lg shadow-md mb-8">
//         <h2 className="text-xl font-semibold text-blue-500 mb-4">Create a New Budget</h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="input-group">
//             <label className="block text-gray-600">Category</label>
//             <select
//               value={newBudget.category}
//               onChange={(e) => setNewBudget({ ...newBudget, category: e.target.value })}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg"
//             >
//               <option value="">Select a Category</option>
//               <option value="Groceries">Groceries</option>
//               <option value="Entertainment">Entertainment</option>
//               <option value="Transportation">Transportation</option>
//               <option value="Utilities">Utilities</option>
//               <option value="Healthcare">Healthcare</option>
//               <option value="Education">Education</option>
//               <option value="Savings">Savings</option>
//             </select>
//           </div>

//           <div className="input-group">
//             <label className="block text-gray-600">Spending Limit</label>
//             <input
//               type="number"
//               value={newBudget.spendingLimit}
//               onChange={(e) => setNewBudget({ ...newBudget, spendingLimit: e.target.value })}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
//           >
//             Create Budget
//           </button>
//         </form>
//       </section>

//       {/* List of Budgets */}
//       <section className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold text-blue-500 mb-4">Your Budgets</h2>
//         <table className="w-full text-left table-auto">
//           <thead>
//             <tr className="bg-blue-100 text-gray-700">
//               <th className="p-3">Category</th>
//               <th className="p-3">Spending Limit</th>
//               <th className="p-3">Current Spending</th>
//               <th className="p-3">Progress</th>
//               <th className="p-3">Alerts</th>
//             </tr>
//           </thead>
//           <tbody>
//             {budgets.map((budget, index) => (
//               <tr key={index} className="border-t border-gray-300">
//                 <td className="p-3 text-gray-600">{budget.category}</td>
//                 <td className="p-3 text-gray-600">₹{budget.spendingLimit}</td>
//                 <td className="p-3 text-gray-600">₹{budget.currentSpending}</td>
//                 <td className="p-3">
//                   <div
//                     className="h-2 rounded-lg"
//                     style={{
//                       width: `${(budget.currentSpending / budget.spendingLimit) * 100}%`,
//                       backgroundColor:
//                         budget.currentSpending > budget.spendingLimit ? 'red' : 'green',
//                     }}
//                   />
//                 </td>
//                 <td className="p-3 text-red-600 font-semibold">
//                   {budget.currentSpending > budget.spendingLimit
//                     ? 'Overspending Alert!'
//                     : 'Within Limit'}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </section>
//     </div>
//   );
// };

// export default BudgetsPage;

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page