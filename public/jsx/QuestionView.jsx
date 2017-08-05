const React= require('react')
const OptionsView=require('./OptionsView')

const QuestionView= React.createClass({
  getInitialState(){
    return {
     currentQuestion: this.props.qObj,
    }
  },
 render(){
     return (
    <div >

    { this.state.currentQuestion?
      <div className="panel panel-default">
        <div className="panel-heading row">
            <div className="col-xs-8 col-sm-9 col-lg-10">{'Question '+this.state.currentQuestion.id}</div>

              <div className="col-xs-2 col-sm-1 col-lg-1">
                {this.props.questionsList[0].id !=this.state.currentQuestion.id?<button className="btn btn-primary btn-xs" onClick={selectItem.bind(this, false)}>Previous</button>:''}
                </div>
                <div className="col-xs-2 col-sm-2 col-lg-1">
                  {this.props.questionsList[this.props.questionsList.length-1].id==this.state.currentQuestion.id? '': <button className="btn btn-primary btn-xs" onClick={selectItem.bind(this, true)}>Next</button>}
                </div>
          </div>

          <div className="panel-body col-xs-12">
             <div className="panel-heading col-xs-12">{this.state.currentQuestion.qText}{this.state.currentQuestion.qMark?' ? ':''}</div>
             <div className="col-xs-12">
                 {this.state.currentQuestion.options.map((d,i)=>{
                   return <OptionsView index={i} data={d} currQuest={this.state.currentQuestion} setChecked={setChecked.bind(this)}></OptionsView>
                 })}
             </div>
           </div>
       </div>
       :''}
    </div>
    )
 }
})


function setChecked(e){
  console.info('setChecked event QuestionView',e.currentTarget.value)
  this.state.currentQuestion.options.forEach((item)=>{
      if(item.value==e.currentTarget.value)
          item.checked=e.currentTarget.checked
      else if(!this.state.currentQuestion.ischeckBox)
          item.checked=false
    })
    let isAnswered=this.state.currentQuestion.options.filter((item)=>{
      return item.checked
    })
    if(isAnswered.length){
      this.state.currentQuestion.isAnswered=true
    }else{
      this.state.currentQuestion.isAnswered=false
    }
  this.setState({currentQuestion:this.state.currentQuestion})
}

function selectItem(flag){
var index=flag?(Number(this.state.currentQuestion.id)):(Number(this.state.currentQuestion.id)-2)
  this.state.currentQuestion?this.setState({currentQuestion: this.props.questionsList[index]}):'';
}

module.exports=QuestionView
