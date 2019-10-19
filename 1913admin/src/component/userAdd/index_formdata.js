import React,{Component} from 'react'
import './index.less'
import {Card} from 'antd'


class UserAdd extends Component{
  constructor(){
    super()

  }
  submit=()=>{
    let file=this.refs.file.files[0]
    let formdata=new FormData()
    formdata.append('img',file)
    let config = {
      headers:{'Content-Type':'multipart/form-data'}
   };
    this.$axios.post('/api/admin/file/upload',formdata,config)
    .then((data)=>{
      console.log(data)
    })
  }
  render(){
    // let {spinning,list} = this.state
    return(
      <div className='userlist-box'>
        <Card >
          添加信息
          {/*  */}
          <input type="file" ref='file'/>
          <button onClick={this.submit}>上传</button>
        </Card>  
      </div>

    )
  }
}
/*
1.文件上传
 1.获取文件
 2.将文件添加到formdata对象
 3.通过接口实现上传
 4.返回数据信息
2.将变成base64 

*/ 
export default UserAdd