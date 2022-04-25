import Online from '../online/Online'
import './rightbar.css'

const Rightbar = () => {

  const user = {
    profilePicture : './assets/person/4.jpeg',
    username : "sammed"
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
      <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
      </div>
      <img className="rightbarAd" src="assets/ad.png" alt="" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        <Online key={1} user={user} />
        <Online key={1} user={user} />
        <Online key={1} user={user} />
        <Online key={1} user={user} />
        <Online key={1} user={user} />
      </ul>
      </div>
    </div>
  )
}

export default Rightbar