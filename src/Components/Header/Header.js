import './style.scss';
import dots from '../../Assets/Bg/banner-dots.png'
import bannerIcon1 from '../../Assets/Bg/home2-banner-icon1.png'
import bannerIcon2 from '../../Assets/Bg/shape_left_up_full.png'
import Face from '../../Assets/Avatar/avatar2.jpg'
import { Avatar } from '@material-ui/core';

function Header() {
  return (
    <>
      <header className="header">
        <div className="bg-overlay">
          <img src={dots} className="bg-dots" alt={'bg-overlay-dots'} />
          <img src={bannerIcon1} className="bg-abstract1" alt={'bg-overlay-dots'} />
          <img src={bannerIcon2} className="bg-abstract2" alt={'bg-overlay-dots'} />
        </div>
        <div className="content">
        {/* <Avatar alt="Cindy Baker" className="face-image" src={Face} /> */}
          <p>
          <span>HI THERE !</span><br/> 
            I'M DESIRE ARRA <br/> 
            Passionate designer & developer who loves simplicity in things and crafts beautiful user interfaces with love.
            {/* Edit <code>src/App.js</code> and save to reload. */}
          </p>
        </div>
      </header>
    </>
  );
}

export default Header;
