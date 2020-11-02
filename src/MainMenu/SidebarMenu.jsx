import React, { PureComponent } from 'react';
import Slide from '@material-ui/core/Slide';
import "./style.scss";


class SidebarMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { 
      ref: React.createRef()
    }
  }
  render() { 
    const { show } = this.props
    return (
      <>
            {show ? (
              <Slide direction="right" in={show} mountOnEnter unmountOnExit>
                <div className="SidebarMenu">
                  <ul>
                    <li>About </li>
                    <li>test </li>
                    <li>test </li>
                    <li>Test </li>
                  </ul>

              </div>
            </Slide>
            ): false}
      </>
    );
  }
}
 
export default SidebarMenu;
