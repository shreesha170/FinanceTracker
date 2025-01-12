import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react';

const Home = async () => {
  // Get logged-in user details
  const loggedIn = await getLoggedInUser();
  
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
          
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={25000}
          />
        </header>
        
        <div className="recent-transactions">
          <h2 className="text-xl font-bold text-white mb-4">Recent Transactions</h2>
        </div>
      </div>

      {/* Right Sidebar */}
      <RightSidebar 
        user={loggedIn} // Pass user prop to RightSidebar
        banks={[{currentBalance: 2000 }, { currentBalance: 500 }]} 
      />
    </section>
  );
};

export default Home;
