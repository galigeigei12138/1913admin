import React,{Component} from 'react'
import './index.less'
import {Card,Table,Spin,Pagination,Button,Popconfirm} from 'antd'
import { Item } from 'rc-menu';
var columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    width:170,
    height:80,
    key: 'name',
    fixed:'left'
  },
  {
    title: '价格',
    width:150,
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '类别',
    width:150,
    dataIndex: 'typeName',
    key: 'typeName',
  },
  {
    title: '图片',
    width:150,
    dataIndex: 'imgPath',
    key: 'img',
    render(imgpath) {
      return(
        <img src={imgpath} width='80' height='50' alt=""/>
      )
    },
  },
  {
    title: '图片1',
    dataIndex: 'imgPath',
    key: 'img1',
    width:150,
    render(imgpath) {
      return(
        <img src={imgpath} width='80' height='50' alt=""/>
      )
    },
  },
  {
    title: '图片2',
    dataIndex: 'imgPath',
    key: 'img2',
    width:100,
    render(imgpath) {
      return(
        <img src={imgpath} width='50' height='50' alt=""/>
      )
    },
  },
  {
    title: '操作',
    key: 'action',
    width:150,
    fixed:'right',
    render:(data)=> {
      return(
        <div>
          <Popconfirm 
            title='你确定要删除嘛？'
            onConfirm={()=>{
              console.log('删除',data,this)
              this.del(data._id)
            }}
            >
          <Button size='small' type='danger'>删除</Button>
          </Popconfirm>
          <Button size='small' type='primary'>修改</Button>
        </div>
      )
    },
  }
];
class UserList extends Component{
  constructor(){
    super()
    this.columns= [
      {
        title: '姓名',
        dataIndex: 'name',
        width:170,
        height:80,
        key: 'name',
        fixed:'left'
      },
      {
        title: '价格',
        width:150,
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: '类别',
        width:150,
        dataIndex: 'typeName',
        key: 'typeName',
      },
      {
        title: '图片',
        width:150,
        dataIndex: 'imgPath',
        key: 'img',
        render(imgpath) {
          return(
            <img src={imgpath} width='80' height='50' alt=""/>
          )
        },
      },
      {
        title: '图片1',
        dataIndex: 'imgPath',
        key: 'img1',
        width:150,
        render(imgpath) {
          return(
            <img src={imgpath} width='80' height='50' alt=""/>
          )
        },
      },
      {
        title: '图片2',
        dataIndex: 'imgPath',
        key: 'img2',
        width:100,
        render(imgpath) {
          return(
            <img src={imgpath} width='50' height='50' alt=""/>
          )
        },
      },
      {
        title: '操作',
        key: 'action',
        width:150,
        fixed:'right',
        render:(data)=> {
          return(
            <div>
              <Popconfirm 
                title='你确定要删除嘛？'
                onConfirm={()=>{
                  console.log('删除',data,this)
                  this.del(data._id)
                }}
                >
              <Button size='small' type='danger'>删除</Button>
              </Popconfirm>
              <Button size='small' type='primary'>修改</Button>
            </div>
          )
        },
      }
    ];
    this.state={
      spinning:true,
      nowPage:1,
      list:[]
    }
  }
  del=(id)=>{
    console.log(11111111)
    // let url=''
    // this.$axios.get() 
    setTimeout(()=>{
      this.refreshData(this.state.nowPage)
    },300)
  }
  componentDidMount(){
    let page=this.state.nowPage
    this.refreshData(page)
  }
  refreshData(page){
    this.setState({spinning:true})
    let url=`/api/getThemeById?themeid=3&page=${page}`
    this.$axios.get(url)
    .then((data)=>{
      console.log(data)
      let list=data.data.products.map((item)=>{
          item.imgPath='http://localhost:3000'+item.imgPath
        return item
      })
      this.setState({spinning:false,list:list})
    })
    .catch(()=>{
      this.setState({spinning:false})
    })

  }
  render(){
    let {spinning,list} = this.state
    return(
      <div className='userlist-box'>
        <Card  style={{overflow:'hidden',width:'980px',margin:'20px auto'}}>
        <Spin spinning={spinning}>
          <Table 
            width = '200'
            scroll={{y:320,x:950}}
            dataSource={ list } 
            columns={this.columns}
            pagination={false}
            ></Table>  
            <Pagination simple defaultCurrent={2} total={50} pageSize={3}
                onChange={(page,pageSize)=>{
                  // page要变化的的页码数
                  this.refreshData(page)
                  console.log(page,pageSize)
                }}
            />
        </Spin>
        </Card>  
      </div>

    )
  }
}
export default UserList