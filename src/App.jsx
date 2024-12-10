import Profile from './components/Profile/Profile';
import userData from './assets/userData.json';
import FriendList from './components/FriendList/FriendList';
import friends from './assets/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './assets/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;