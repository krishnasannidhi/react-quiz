const React=require('react');
const ReactDOM=require('react-dom')
const QuestionView=require('./QuestionView')

const MainApp= React.createClass({
getInitialState(){
  return {
    isTestStarted: false
  }
},
render(){
var questionsList=[
  {id:'1',qText:'is React MVC framework',qMark:true,options:["True","False"]},
  {id:'2',qText:'is props mutable',qMark:true,options:["True","False"]},
  {id:'3',qText:'is state mutable',qMark:true,options:["True","False"]},

]
return (
    <div>
      <h1>Welcome to React Quiz App</h1>
      {this.state.isTestStarted?<QuestionView questionsList={questionsList} qObj={questionsList[0]}></QuestionView>
         :<h1><button onClick={testStartSelected.bind(this)}>Start Test</button></h1>}

    </div>

    )
}

})
function testStartSelected(){
 this.setState({isTestStarted: true})
}
ReactDOM.render(<MainApp></MainApp>,document.getElementById('mainAppContainer'))
