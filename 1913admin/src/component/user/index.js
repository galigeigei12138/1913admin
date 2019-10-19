import React,{Component} from 'react'

import {Card,Table} from 'antd'
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    width:100,
    key: 'name',
    fixed:'left'
  },
  {
    title: '年龄',
    width:100,
    dataIndex: 'age',
    key: 'age',
    fixed:'left'
  },
  {
    title: '住址',
    width:100,
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '图片',
    width:100,
    dataIndex: 'img',
    key: 'img',
    render(imgpath) {
      return(
        <img src={imgpath} width='80' height='50' alt=""/>
      )
    },
  },
  {
    title: '图片1',
    dataIndex: 'img1',
    key: 'img1',
    width:100,
    render(imgpath) {
      return(
        <img src={imgpath} width='80' height='50' alt=""/>
      )
    },
  },
  {
    title: '图片2',
    dataIndex: 'img2',
    key: 'img2',
    width:100,
    render(imgpath) {
      return(
        <img src={imgpath} width='80' height='50' alt=""/>
      )
    },
  },
  {
    title: '性别',
    width:100,
    fixed:'right',
    dataIndex: 'sex',
    key: 'sex',
    render(data) {
      console.log(data)
      let arr=['未知','男','女']
      return(
        <span>{arr[data]}</span>
      )
    },
  },
];
const dataSource=[
  {name:'网易',sex:0,address:'老牛湾',age:16,key:1,img:'12313'},
  {name:'网易',sex:1,address:'老牛湾',age:16,key:2,img:'12313'},
  {name:'网易',sex:2,address:'老牛湾',age:16,key:3,img:'123123'}

]
class UserList extends Component{
  render(){
    return(
      <div className='userlist-box'>
        <Card  style={{background:'red',overflow:'hidden',width:'700px'}}>
          <Table 
            width = '200'
            scroll={{y:120,x:720}}
            dataSource={ dataSource } 
            columns={columns}></Table>  
        </Card>  
      </div>

    )
  }
}
export default UserList