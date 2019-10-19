import React,{Component} from 'react'
import {Card, Menu, Dropdown, Icon } from 'antd';
import './index.less'
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);
const lang = (
  <Menu>
    <Menu.Item>
      <span>en</span>
    </Menu.Item>
    <Menu.Item>
      <span>简体中文</span>
    </Menu.Item>
    <Menu.Item>
      <span>繁体中文</span>
    </Menu.Item>
  </Menu>
);
class Header extends Component{
  render(){
    return(
      <Card className='header-box'>
        <div>

        <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="#">
           用户信息 <Icon type="down" />
        </a>
        </Dropdown>
        <Dropdown overlay={lang}>
           <span>EN</span>
        </Dropdown>
        </div>
   
      </Card>
    )
  }
}
export default Header


// ReactDOM.render(
//   <Dropdown overlay={menu}>
//     <a className="ant-dropdown-link" href="#">
//       Hover me <Icon type="down" />
//     </a>
//   </Dropdown>,
//   mountNode,
// );