import React,{Component} from 'react'
import {Card} from  'antd'
import ReactEcharts from 'echarts-for-react';
 
// render echarts option.

class Login extends Component{
  constructor(){
    super()
    this.state={
      option: {
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '25%'],
                data:[],
                
            }
        ]
    }
    }
  }
  componentWillUpdate(){
    console.log('页面将要更新')
  }
  componentDidUpdate(){
    console.log('页面已经更新')
  }
  componentDidMount(){
    this.$axios.get('/yapi/getPieData')
    .then((data)=>{
      console.log(data)
      let  option =JSON.parse(JSON.stringify(this.state.option))
      option.series[0].data=data.data.data
      console.log(this.state.option)
      this.setState({option})
    })
  }
  render(){
    return(
      <Card className='home-box'>
        <Card style={{width:'200px',height:'200px'}}>
          <ReactEcharts option={this.state.option} />
        </Card>  
        <Card>
          <ReactEcharts option={{
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar'
            }]
          }} />
        </Card>
      </Card>

    )
  }
}
export default Login