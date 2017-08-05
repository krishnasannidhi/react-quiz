const React=require('react');
const ReactDOM=require('react-dom')
const QuestionView=require('./QuestionView')
const d3=require('d3')

const MainApp= React.createClass({
/*componentDidMount(){
  var selection=d3.selectAll(".testDiv")

  selection.each(function(d,i){
    console.info("this--->",d3.select(this).text("index"+i))
    var self=this
  d3.select(this).call( d3.drag()
       .on('drag', function() {
           // Determine resizer position relative to resizable (parent)
           x = d3.mouse(self.parentNode)[0];

           // Avoid negative or really small widths
           x = Math.max(50, x);

           d3.select(self).style('width', x + 'px').style('z-index','1000 !important')
           .style('height',(x/4)+'px');
       }))
  })
},*/
getInitialState(){
  return {
    isTestStarted: false,
    results:{
      answeredCount:0,
      unAnsweredCount:0,
      correctCount:0,
      incorrectCount:0,
    },
    questionsList:[
      {id:'1',qText:'is React MVC framework',qMark:true,options:[{value:"True",checked:false},{value:"False",checked:false}],ischeckBox:false},
      {id:'2',qText:'is props mutable',qMark:true,options:[{value:"True",checked:false},{value:"False",checked:false}],ischeckBox:true},
      {id:'3',qText:'is state mutable',qMark:true,options:[{value:"True",checked:false},{value:"False",checked:false}],ischeckBox:false},

    ]
  }
},
componentDidMount(){
  this.state.results.unAnsweredCount=this.state.questionsList.length
},
render(){

return (
    <div>
      <h1>Welcome to React Quiz App</h1>
      {this.state.isTestStarted?
          <div>
            <QuestionView questionsList={this.state.questionsList} qObj={this.state.questionsList[0]}></QuestionView>
            <div>
              <button className="submit-btn btn btn-primary btn-sm" onClick={submitQuiz.bind(this)}>Submit</button>
            </div>
            <div className="resultsDiv hideResultsDiv">
              <div>Answered : {this.state.results.answeredCount}</div>
              <div>Unanswered Questions: {this.state.results.unAnsweredCount}</div>
              <div>Correct: {this.state.results.correctCount}</div>
              <div>Incorrect: {this.state.results.incorrectCount}</div>
            </div>
          </div>
         :<h1><button type="button" className="btn btn-primary btn-xs"  onClick={testStartSelected.bind(this)}>Start Test</button></h1>}
         {/*<div className="div1 testDiv">

         </div>
         <div className="div2 testDiv">

         </div>*/}
    </div>

    )
}

})

function submitQuiz(){
  var d3Submit=d3.select(".submit-btn")
  if(d3Submit.classed("btn-disabled"))
    return
  console.info(this.state.questionsList)
  this.state.results.answeredCount=this.state.questionsList.filter((item)=>{
    return item.isAnswered
  }).length;
  this.state.results.unAnsweredCount=this.state.questionsList.length-this.state.results.answeredCount;
  this.setState({results:this.state.results})
  d3.select(".submit-btn")
    .on("click",null)
    .classed("btn-primary",false)
    .classed("btn-disabled",true)

  d3.select(".resultsDiv")
      .classed("hideResultsDiv",false)
      .classed("showResultsDiv",true)

}

function testStartSelected(){
 this.setState({isTestStarted: true})
}
ReactDOM.render(<MainApp></MainApp>,document.getElementById('mainAppContainer'))
