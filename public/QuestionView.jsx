const React= require('react')
const OptionsView=require('./OptionsView')

const QuestionView= React.createClass({
  getInitialState(){
    return {
     currentQuestion: this.props.qObj
    }
  },
 render(){
     return (
    <div>

    { this.state.currentQuestion?
      <div>
        <span>
          {this.props.questionsList[0].id !=this.state.currentQuestion.id?<button onClick={selectItem.bind(this, false)}>Previous</button>:''}

            {this.props.questionsList[this.props.questionsList.length-1].id==this.state.currentQuestion.id? '': <button onClick={selectItem.bind(this, true)}>Next</button>}
          </span>
          <div>
             <span>{this.state.currentQuestion.id+') '}{this.state.currentQuestion.qText}{this.state.currentQuestion.qMark?' ? ':''}</span>
             <div>
                 {this.state.currentQuestion.options.map((d)=>{
                   return <OptionsView data={d}></OptionsView>
                 })}
             </div>
           </div>
       </div>
       :''}
    </div>
    )
 }
})

function selectItem(flag){
var index=flag?(Number(this.state.currentQuestion.id)):(Number(this.state.currentQuestion.id)-2)
  this.state.currentQuestion?this.setState({currentQuestion: this.props.questionsList[index]}):'';
}

module.exports=QuestionView
