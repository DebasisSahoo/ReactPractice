import React, {Component} from 'react';

//import './DragDrop.css';



//import CardMedia from '@material-ui/core/CardMedia';



export default class AppDragDropDemoEx extends Component {    

    state = {        

      tasks: [
                { name:"Github", category:"usable",  bgcolor: "yellow" },
                { name:"Jenkins", category:"usable",  bgcolor:"pink"},
                { name:"Sonarqube",  category:"usable",  bgcolor:"skyblue"},
            //    {name:"AppScan", 
            //    category:"usable", 
            //    bgcolor:"pink"},
            //    {name:"HCL One Test", 
            //    category:"usable", 
            //    bgcolor:"pink"},
            //    {name:"Urbancode Deploy", 
            //    category:"usable", 
            //    bgcolor:"pink"},
            //    {name:"Urbancode Velocity", 
            //    category:"usable", 
            //    bgcolor:"Red"},
        ]}

 onDragOver = (e) =>{ e.preventDefault(); }
 onDragStart = (e,id) => { 
     e.dataTransfer.setData("id",id) 
    }

 onDrop = (ev, cat) => {       

    let id = ev.dataTransfer.getData("id");

    let tasks = this.state.tasks.filter((task) => {
        {console.log("Service Category :"+task.serviceCategory," Id :"+id)}
        if (task.name == id) {
            task.category = cat;           
        }              
        return task
    });        
    this.setState({...this.state, tasks })
}
    render () {
        var categories = { 
            usable: [], 
            used: []        
        }         
        this.state.tasks.forEach ((t) => {               
            categories[t.category].push(
            <div 
                key={t.name}                     
                onDragStart={(e)=>this.onDragStart(e, t.name)}                    
                draggable                    
                className="draggable"                    
                style={{backgroundColor: t.bgcolor}}>                       
                    <div //component="img"
                        title={t.name}
                        style={{height:100,width:100}}  
                    >
                        pull this
                    </div>            
            </div>);        
        });
        return (
        <div>
            <h2 >DRAG & DROP DEMO</h2>                  
            <div style={{display:'flex'}}
                className="wip" 
                onDragOver={(e)=>this.onDragOver(e)}                    
                onDrop={(e)=>{this.onDrop(e, "usable")}}>                    
                {categories.usable}                
            </div>                
            <div style={{display:'flex',marginTop:40, backgroundColor:"red"}}
                className="droppable"
                onDragOver={(e)=>this.onDragOver(e)}                    
                onDrop={(e)=>this.onDrop(e, "used")}>                     
            {categories.used}                
            </div>              
        </div>);
    }
  }