import { FriendItem } from "./FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
    return (
      <ul>
        {friends.map(friend => {
          return <FriendItem key={friend.id} {...friend} />
        })}
      </ul>
    )
  }
  export { FriendList };
