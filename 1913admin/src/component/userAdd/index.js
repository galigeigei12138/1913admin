import React,{Component} from 'react'
import './index.less'
import {Card} from 'antd'


class UserAdd extends Component{
  constructor(){
    super()
    this.state={
      img:''
    }
  }
  submit=()=>{
    let file=this.refs.file.files[0]
    var r = new FileReader();  //本地预览
    // 创建文件读取对象
    r.onload = ()=>{
      // 文件编译成base64成功后执行
       console.log(r.result);//图片的base64
       this.setState({img:r.result})
       
    }
    //通过读取对象读取一个文件
     r.readAsDataURL(file);//本地预览对象进行读取 
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
          <img src={this.state.img} alt=""/>
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