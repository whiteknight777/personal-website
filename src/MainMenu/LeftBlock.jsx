import React, { PureComponent } from 'react';
import {FaLinkedin, FaGoogle, FaBehance} from 'react-icons/fa';
import {AiOutlineGooglePlus} from 'react-icons/ai';
import {VscListSelection} from 'react-icons/vsc';
import IconButton from '@material-ui/core/IconButton';
import logo from '../logo.svg';
import "./style.scss";


class LeftBlock extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { openMenu } = this.props;
    return (
      <>
        <div className="MainMenu LeftBlock" >
          {/* LOGO POSITION */}
          <div className="Logo"> 
          <img src={logo} className="App-logo" alt="logo" />
            
            <IconButton className="Menu-icon" aria-label="delete" 
                onClick={() => {
                  openMenu()
                }} >
              <VscListSelection />
            </IconButton>
          </div>

          {/* SOCIAL LINK POSITION */}
          <div className="Social-link">
          <IconButton className="social-icon" aria-label="delete" 
                onClick={() => {
                }} >
              <FaLinkedin />
            </IconButton>  
            <IconButton className="social-icon" aria-label="delete" 
                onClick={() => {
                }} >
              <AiOutlineGooglePlus />
            </IconButton>
            <IconButton className="social-icon" aria-label="delete" 
                onClick={() => {
                }} >
              <FaBehance />
            </IconButton>
          </div>
        </div>
      </>
    );
  }
}
 
export default LeftBlock;
