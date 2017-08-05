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
    isTestStarted: false
  }
},
render(){
var questionsList=[
  {id:'1',qText:'is React MVC framework',qMark:true,options:[{value:"True",checked:false},{value:"False",checked:false}],ischeckBox:false},
  {id:'2',qText:'is props mutable',qMark:true,options:[{value:"True",checked:false},{value:"False",checked:false}],ischeckBox:true},
  {id:'3',qText:'is state mutable',qMark:true,options:[{value:"True",checked:false},{value:"False",checked:false}],ischeckBox:false},

]
return (
    <div>
      <h1>Welcome to React Quiz App</h1>
      {this.state.isTestStarted?<QuestionView questionsList={questionsList} qObj={questionsList[0]}></QuestionView>
         :<h1><button type="button" className="btn btn-primary btn-xs"  onClick={testStartSelected.bind(this)}>Start Test</button></h1>}
         {/*<div className="div1 testDiv">

         </div>
         <div className="div2 testDiv">

         </div>*/}
    </div>

    )
}

})



function testStartSelected(){
 this.setState({isTestStarted: true})
}
ReactDOM.render(<MainApp></MainApp>,document.getElementById('mainAppContainer'))
