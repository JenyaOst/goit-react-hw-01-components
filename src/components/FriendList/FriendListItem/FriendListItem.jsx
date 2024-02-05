
const FriendItem = ({id, online, name, avatar}) => {
    return(
    <li>
  <span >{online}</span>
  <img  src={avatar} alt="User avatar" width="48" />
  <p >{name}</p>
</li>
    )
}
export {FriendItem}