import './styles/main.css';
import ProfilePicture from './media/round-profile.png';
import ProfileShape from './media/graph.png';

// Components
import Menu from './components/Menu';


function App() {
  return (
    <div className='container'>
      <Menu />
      <div className="main">
        <div className="header">
          <div className="grid-col-2">
            <div className="grid-item-1">
              <h3>Hi, my name is</h3>
              <h1>DOR FURMAN</h1>
              <h3 id='bottomTxt'>Frontend Web Developer & Freelancer</h3>
              <button id="hireMe"><a>HIRE ME</a></button>
            </div>
            <div className="grid-item-2">
              <div id="profileImgDiv">
                <img src={ProfilePicture} alt="Profile Image" id="profile-image" />
                <img src={ProfileShape} alt="Profile Shape" id="profile-shape" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
