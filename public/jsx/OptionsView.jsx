const React=require('react')

const OptionsView=React.createClass({
  render(){
    return (<div>
          {this.props.currQuest.ischeckBox?
            <input id={'currQues_'+this.props.currQuest.id} value={this.props.data.value} onClick={this.props.setChecked} checked={this.props.data.checked} type='checkbox'></input>
          :<input id={'currQues_'+this.props.currQuest.id} value={this.props.data.value} onClick={this.props.setChecked} checked={this.props.data.checked} type='radio' name='radioEnable'></input>
         }
          {this.props.data.value}
       </div>)
  }
})


module.exports=OptionsView
