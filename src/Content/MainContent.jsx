import React, { PureComponent } from 'react';
import SidebarMenu from '../MainMenu/SidebarMenu'
import Header from '../Components/Header/Header'
import './style.scss';

class MainContent extends PureComponent {
  /*
  * Type : Constructor
  */
  constructor(props) {
    super(props);
    this.state = { 
      contentRef: React.createRef(),
    }
  }

  /*
  * Type : Render Method
  */
  render() { 
    const { show, closeMenu } = this.props
    return ( <>
      <SidebarMenu show={show} />
      <div className="Content" ref={this.state.contentRef}>
        <Header />
      {show ? (
        <div className='BackDrow' onClick={() => {closeMenu()}}></div>
      ) : false}
      </div>
      </> );
  }
}
 
export default MainContent;

