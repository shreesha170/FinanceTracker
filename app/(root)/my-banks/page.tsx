// import BankCard from '@/components/BankCard';
// import HeaderBox from '@/components/HeaderBox';
// // import { getAccounts } from '@/lib/actions/bank.actions'; // Uncomment when accounts data is available
// import { getLoggedInUser } from '@/lib/actions/user.actions';
// import React from 'react';

// // Updated Account type with all required properties
// interface Account {
//   id: string;
//   availableBalance: number;
//   currentBalance: number;
//   officialName: string;
//   mask: string;
//   institutionId: string;
//   name: string;
//   type: string;
//   subtype: string;
//   appwriteItemId: string;
//   sharableId: string;
// }

// const MyBanks = async () => {
//   const loggedIn = await getLoggedInUser();
//   // const accounts = await getAccounts({ 
//   //   userId: loggedIn.$id 
//   // })

//   // Mock account data with all the required properties
//   const accounts: Account[] = [
//     {
//       id: '1',
//       availableBalance: 1000.00,
//       currentBalance: 1200.50,
//       officialName: 'Chase Bank',
//       mask: '1234',
//       institutionId: 'chase123',
//       name: 'Chase Checking',
//       type: 'Checking',
//       subtype: 'Personal', // New property
//       appwriteItemId: 'appwrite123', // New property
//       sharableId: 'sharable123', // New property
//     },
//     {
//       id: '2',
//       availableBalance: 4500.00,
//       currentBalance: 5000.75,
//       officialName: 'Wells Fargo Bank',
//       mask: '5678',
//       institutionId: 'wellsfargo123',
//       name: 'Wells Fargo Savings',
//       type: 'Savings',
//       subtype: 'Personal', // New property
//       appwriteItemId: 'appwrite456', // New property
//       sharableId: 'sharable456', // New property
//     },
//   ];

//   return (
//     <section className="flex">
//       <div className="my-banks">
//         {/* Header Box Section */}
//         <HeaderBox 
//           title="My Bank Accounts"
//           subtext="Effortlessly manage your banking activities."
//         />

//         <div className="space-y-4">
//           {/* Title for User Cards Section */}
//           <h2 className="header-2">
//             Your Cards
//           </h2>
          
//           {/* Bank Cards Section */}
//           <div className="flex flex-wrap gap-6">
//             {/* Map through accounts data and render BankCard components */}
//             {accounts.map((account) => (
//               <BankCard 
//                 key={account.id}
//                 account={account}
//                 userName={loggedIn?.firstName || 'John Doe'} // Placeholder username if not available
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default MyBanks;


import React from 'react'

const MyBank = () => {
  return (
    <div>MyBank</div>
  )
}

export default MyBank