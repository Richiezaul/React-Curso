import React, {Component} from 'react';
import 'pure-css/lib/forms.css';
import 'pure-css/lib/buttons.css';
import './index.css';
import Gallery from './Gallery';

class Global extends Component{

  constructor(props){
    super(props);
    this.state={
      query:'',
      items:[]

    }

 this.search=this.search.bind(this);

  }

search = () => {

const Base_Url='https://www.googleapis.com/books/v1/volumes?q=';
fetch(`${Base_Url}${this.state.query}`,{method:'GET'}).then(response=>response.json()).then(json=>{

let {items}= json;
this.setState({items});

});

}

render(){

return(

<div className="Global">
  <div>
    <h2>Book Explore!</h2>
  </div>
  <div>

  <form action="#" className="pure-form">
    <input type="text" className="pure-input-rounded" onChange={text=>this.setState({query:text.target.value})}
    onKeyPress={event=>{

      if (event.key==="Enter") {
        this.search();
      }

    }} />
    <input type="button" className="pure-button" onClick={this.search} value="Search"/>
  </form>
  </div>
  <div>

    <Gallery items={this.state.items}/>

  </div>
</div>

)










}





}

export default Global;
