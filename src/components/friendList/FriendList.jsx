export const FriendList = props => {
      return (
        <ul className="friend-list">
            {props.friends.map( item => (
             <li className="item">
                <span className="status">{item.isOnline}</span>
                <img className="avatar" src={item.avatar} alt="User avatar" width="48" />
                <p className="name">{item.name}</p>
            </li>
            ))}
           
        
        </ul>


        );
    };