export default{
  // 同步使用 同步
  changeTokenModal(params){
    let action={
      type:'CHANGE_TOKEN_MODAL',
      params:params
    }
    console.log(action)
    return action
  },
  changeTokenModalAsync(){
    // 异步使用
    return (dispatch)=>{
      let action={  type:'CHANGE_TOKEN_MODAL'}
      setTimeout(()=>{
        let showModal =false
        action.params=showModal
        dispatch(action)
      },1000)
    }
  }
}