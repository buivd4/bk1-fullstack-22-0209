import logo from './logo.svg';
import './App.css';
import Comment from './Comment';
import Avatar1 from './assets/avatar1.png'
import Avatar2 from './assets/avatar2.png'
import Avatar3 from './assets/avatar3.png'
import NoImage from './assets/no-image.png';
function App() {
  var users = [
    {
      name: "Sam",
      avatar: Avatar1
    },
    {
      name: "John",
      avatar: Avatar2
    },
    {
      name: "Woody",
      avatar: Avatar3
    },
    {
      name: "Jack",
      avatar: "https://images.viblo.asia/full/20bea205-3e00-492c-a52f-c243434e1106.png"
    }
  ];
  var comments = [
    {
      user: "Sam",
      time: "6:00 PM",
      content: "Hello"
    },
    {
      user: "Woody",
      time: "7:00 PM",
      content: "Hi"
    },
    {
      user: "John",
      time: "8:00 PM",
      content: "Woo"
    },
    {
      user: "Jack",
      time: "00:00 PM",
      content: "Woo"
    }
  ]

  const getAvatarByUser=(username)=>{
    var output=NoImage;
    for(var user of users){
      if (user.name === username){
        output=user.avatar;
      }
    }
    return output;
  }
  
  return (
    <div>
      <p className="font-bold text-xl">Day la Lab-2</p>
      <div>
        {
          comments.map(item => {
            return <Comment avatar={getAvatarByUser(item.user)} name={item.user} time={"at "+item.time} content={item.content}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
