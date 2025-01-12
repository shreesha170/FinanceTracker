// import HeaderBox from '@/components/HeaderBox';
// import React from 'react';
// import TransactionsTable from '@/components/TransactionsTable';
// const TransactionHistory = () => {
//   // Sample data for transactions (replace with actual data or API response)
//   const transactions = [
//     {
//       transaction: 'Rent',
//       amount: 15000,
//       status: 'Paid',
//       date: '2025-01-01T12:00:00', // Added time for formatting
//       category: 'Housing',
//     },
//     {
//       transaction: 'Groceries',
//       amount: 500,
//       status: 'Pending',
//       date: '2025-01-02T14:30:00',
//       category: 'Food',
//     },
//     {
//       transaction: 'Electricity Bill',
//       amount: 1480,
//       status: 'Paid',
//       date: '2025-01-05T09:15:00',
//       category: 'Utilities',
//     },
//   ];

//   return (
//     <div className="transactions">
//       <div className="transactions-header">
//         {/* Header Box Section */}
//         <HeaderBox 
//           title="Transaction History"
//           subtext="See your bank details and transactions."
//         />
//       </div>

//       <div className="space-y-6">
//         <div className="transactions-account">
//           {/* Account Details Section */}
//           <div className="flex flex-col gap-2">
//             <h2 className="text-18 font-bold text-white">Account Name</h2>
//             <p className="text-14 text-blue-25">Official Name</p>
//             <p className="text-14 font-semibold tracking-[1.1px] text-white">
//               ●●●● ●●●● ●●●● XXXX
//             </p>
//           </div>

//           <div className="transactions-account-balance">
//             {/* Balance Section */}
//             <p className="text-14">Current balance</p>
//             <p className="text-24 text-center font-bold">₹25000.00</p> {/* Changed $ to ₹ */}
//           </div>
//         </div>

//         <section className="flex w-full flex-col gap-6">
//           {/* Transactions Table Section */}
//           <div className="transactions-table">
//             <table className="w-full text-left">
//               <thead>
//                 <tr className="text-white bg-blue-500">
//                   <th className="p-2">Transaction</th>
//                   <th className="p-2">Amount</th>
//                   <th className="p-2">Status</th>
//                   <th className="p-2">Date</th>
//                   <th className="p-2">Category</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {transactions.map((transaction, index) => {
//                   // Create a Date object from the date string
//                   const transactionDate = new Date(transaction.date);

//                   // Format the date to show day, date, and time
//                   const formattedDate = transactionDate.toLocaleDateString('en-US', {
//                     weekday: 'short', // Day of the week (e.g., Mon)
//                     year: 'numeric',  // Full year (e.g., 2025)
//                     month: 'short',    // Short month name (e.g., Jan)
//                     day: 'numeric',    // Day of the month (e.g., 1)
//                   });

//                   const formattedTime = transactionDate.toLocaleTimeString('en-US', {
//                     hour: '2-digit', // Hour in 2 digits
//                     minute: '2-digit', // Minute in 2 digits
//                   });

//                   return (
//                     <tr key={index} className="border-b border-gray-600">
//                       <td className="p-2">{transaction.transaction}</td>
//                       <td className="p-2">{`₹${transaction.amount}`}</td> {/* Changed $ to ₹ */}
//                       <td className="p-2">{transaction.status}</td>
//                       <td className="p-2">{`${formattedDate}, ${formattedTime}`}</td>
//                       <td className="p-2">{transaction.category}</td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination Section */}
//           <div className="my-4 w-full">
//             {/* Pagination Component */}
//             {/* <Pagination totalPages={5} page={1} /> */}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default TransactionHistory;

import React from 'react'

const Transfer = () => {
  return (
    <div>Transfer</div>
  )
}

export default Transfer