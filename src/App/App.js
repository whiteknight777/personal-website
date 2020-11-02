import React, { PureComponent } from 'react';
import LeftBlock from '../MainMenu/LeftBlock'
import MainContent from '../Content/MainContent'
import './style.scss';

class App extends PureComponent {
  /*
  * Type : Constructor
  */
  constructor(props) {
    super(props);
    this.state = { 
      open: false,
    }
  }

  /*
  * Type : Function/Method
  * Description: Close drawer menu
  */
  closeMenu () {
    this.setState({
      open: false
    })
  }

  /*
  * Type : Function/Method
  * Description: Show drawer menu
  */
  showMenu () {
    this.setState((prev) =>({
      open: !prev.open
    }))
  }

  /*
  * Type : Render Method
  */
  render() { 
    const { open } = this.state;
    return ( 
      <>
        {/* Left Block + Sidebar */}
        <div class="MainMenu">
          <LeftBlock openMenu={() => { this.showMenu() }} />
        </div>

        {/* All Content */}
        <MainContent show={ open } closeMenu={() => { this.closeMenu() }} />
      </> 
    );
  }
}
 
export default App;