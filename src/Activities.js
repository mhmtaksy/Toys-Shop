/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React,{Component} from 'react';
import { variables } from './Variables';
import { Link } from "react-router-dom";
import Crud from './pages/crud';

export class Activities extends Component{
    
    constructor(props){
        super(props);
        this.state={
            activities:[],
            modalTitle:"",
            ActivityName:"",
            ActivityId:0,
            ActivityDescription:"",
            ActivityLocation:"",
            ActivityAge:"",
            ActivityIdFilter:"",
            ActivityNameFilter:"",
            ActivityWithoutFilter:[]

        }
    }
    //implement the filter function
    FilterFn(){
        var ActivityIdFilter=this.state.ActivityIdFilter;
        var ActivityNameFilter = this.state.ActivityNameFilter;

        var filteredData=this.state.ActivityWithoutFilter.filter(
            function(el){
                return el.ActivityId.toString().toLowerCase().includes(
                    ActivityIdFilter.toString().trim().toLowerCase()
                )&&
                el.ActivityName.toString().toLowerCase().includes(
                    ActivityNameFilter.toString().trim().toLowerCase()
                )
            }
        );
        
        this.setState({activities:filteredData});
        }
        changeActivityIdFilter = (e) => {
            this.setState.ActivityIdFilter=e.target.value;
            this.FilterFn();
        }

        sortResult(prop,asc){
            var sortedData=this.state.ActivityWithoutFilter.sort(function(a,b){
                if(asc){
                    return (a[prop]>b[prop])?1:((a[prop]<b[prop])?-1:0);
                }
                else{
                    return (b[prop]>a[prop])?1:((b[prop]<a[prop])?-1:0);
                }
            });
    
            this.setState({activities:sortedData});
        }
        
        
    refreshList(){
        fetch(variables.API_URL+'Activity')
        .then(response=>response.json())
        .then(data=>{
            this.setState({activities:data,ActivityWithoutFilter:data});
        });
    }

        //we will call the refresh method here
        componentDidMount(){
            this.refreshList();
        }
    
        changeActivityName = (e) => {
           this.setState({ActivityName:e.target.value});
        }
        changeActivityDescription = (e) => {
            this.setState({ActivityDescription:e.target.value});
         }
         changeActivityLocation = (e) => {
            this.setState({ActivityLocation:e.target.value});
         }
         changeActivityAge = (e) => {
            this.setState({ActivityAge:e.target.value});
         }

        addClick(){
            this.setState({
                modalTitle:"Add Activity",
                ActivityId:0,
                ActivityName:"",
                ActivityDescription:"",
                ActivityLocation:"",
                ActivityAge:""
            });
        }
        editClick(act){
            this.setState({
                modalTitle:"Edit Activity",
                ActivityId:act.ActivityId,
                ActivityName:act.ActivityName,
                ActivityDescription:act.ActivityDescription,
                ActivityLocation:act.ActivityLocation,
                ActivityAge:act.ActivityAge
            });
        }

        createClick(){
            fetch(variables.API_URL+'Activity',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    ActivityName:this.state.ActivityName,
                    ActivityDescription:this.state.ActivityDescription,
                    ActivityLocation:this.state.ActivityLocation,
                    ActivityAge:this.state.ActivityAge
                    //pass the new category name as json in the method
                })
            })
            .then(res=>res.json())
            .then((result)=>{
                alert(result);
                this.refreshList();
            },(error)=>{
                alert('Failed');
            })
        }
        UpdateClick(){
            fetch(variables.API_URL+'Activity',{
                method:'PUT',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    ActivityId:this.state.ActivityId,
                    ActivityName:this.state.ActivityName,
                    ActivityDescription:this.state.ActivityDescription,
                    ActivityLocation:this.state.ActivityLocation,
                    ActivityAge:this.state.ActivityAge
                    //pass the new category name as json in the method
                })
            })
            .then(res=>res.json())
            .then((result)=>{
                alert(result);
                this.refreshList();
            },(error)=>{
                alert('Failed');
            })
        }

        deleteClick(id){
            if(window.confirm('Are you sure?')){
            fetch(variables.API_URL+'Activity/'+id,{
                method:'DELETE',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            })
            .then(res=>res.json())
            .then((result)=>{
                alert(result);
                this.refreshList();
            },(error)=>{
                alert('Failed');
            })
        }
        }
    render(){
        const {
            activities,
            modalTitle,
            ActivityName,
            ActivityId,
            ActivityDescription,
            ActivityLocation,
            ActivityAge,
        }=this.state;

        return(
            
            <div>
                <Crud/>
                <button type="button" className="btn btn-primary m-2 float-end" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => this.addClick()}>Add Activity</button>
<table className="table table-striped">
    <thead>
        <tr>
            <th>
                <input className="form-control m-2" onChange={this.changeActivityIdFilter}
                placeholder="Filter"/>

                ActivityId
            </th>
            <th>
            Activity Name
            </th>
            <th>
            Activity Description
            </th>
            <th>
            Activity Location
            </th>
            <th>
            Activity Age    
            </th>       
            <th>
                Options
            </th>
        </tr>
    </thead>
    <tbody>
        {activities.map(act=>
            <tr key={act.ActivityId}>
                <td>{act.ActivityId}</td>
                <td>{act.ActivityName}</td> 
                <td>{act.ActivityDescription}</td> 
                <td>{act.ActivityLocation}</td> 
                <td>{act.ActivityAge}</td> 
                <td>
                <button type="button" className="btn btn-light mr-1" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>this.editClick(act)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                </svg>
                    </button>
                    <button type="button" className="btn btn-light mr-1" onClick={()=>this.deleteClick(act.ActivityId)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                    </svg>
                    </button>
                </td>
            </tr>
            
            )}
    </tbody>
</table>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
<div className="modal-dialog modal-lg modal-dialog-centered">
<div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title">{modalTitle}</h5>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">
        <div className="input-group mb-3">
            <span className="input-group-text">ActivityName</span>
            <input type="text" className="form-control" value={ActivityName} onChange={this.changeActivityName}/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text">Activitiy Description</span>
            <input type="text" className="form-control"
            value={ActivityDescription}
            onChange={this.changeActivityDescription}/>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text">Activity Location</span>
            <input type="text" className="form-control"
            value={ActivityLocation}
            onChange={this.changeActivityLocation}/>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text">Activity Age</span>
            <input type="text" className="form-control"
            value={ActivityAge}
            onChange={this.changeActivityAge}/>
            </div>
        {ActivityId==0? 
        <button type="button" className="btn btn-primary float-start" onClick={()=>this.createClick()}>Create</button>:null}
        {ActivityId!=0? 
        <button type="button" className="btn btn-primary float-start" onClick={()=>this.UpdateClick()}>Update</button>:null}
    </div>
</div>
</div>
</div>
<div className="tools-nav_holder">
                    <div className="checkout">
                            <Link to="/" className="admin">Home Page</Link>
						</div>						                     
					</div>
            </div>
            
        )
        
 }
}