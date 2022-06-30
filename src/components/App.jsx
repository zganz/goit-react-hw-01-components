import user from 'components/profile/user.json';
import data from 'components/statistics/data.json';
// import friends from 'components/statistics/friends.json';
// import { friends } from 'components/friendList/FriendList';
import { Profile } from 'components/profile/Profile';
import { Statistics } from 'components/statistics/Statistics';
export const App = () => {
  return (
    <div className='container'
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

  
      <Statistics title="Upload stats" stats={data} />


    </div>
  );


};



