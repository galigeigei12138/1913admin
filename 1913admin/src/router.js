import React,{Component} from 'react'
import ComponentImport from  './utils/componentImport'
// 引入路由懒加载的处理方法
import {HashRouter,Switch,Redirect,Route} from 'react-router-dom'

// import Login from './component/login/load'
// 将需要路由懒加载的组件 作为第一个参数
const Login = ComponentImport(()=>import('./component/login'))
const Admin = ComponentImport(()=>import('./component/admin'))
const UserList = ComponentImport(()=>import('./component/user'))
const Home = ComponentImport(()=>import('./component/home'))
class RootRouter extends Component{
  render(){
    return(
      <HashRouter>
        {/* 导航 */}
      
        {/* 路由渲染 */}
        <Switch>
          <Redirect exact from='/' to='/login'/>
          <Route path='/login' component={Login}/>
          <Route path='/admin' render={()=>{
            return(
            <Admin>
               <Route path='/admin/home' component={Home}/>
               <Route path='/admin/user/list' component={UserList}/>
            </Admin> 
            )
          }}/>
        </Switch>
      </HashRouter>

    )
  }
}
export default  RootRouter