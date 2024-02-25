/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React,{Component} from 'react';
import { variables } from './Variables';
import { Link } from "react-router-dom";
import Crud from './pages/crud';

export class Category extends Component{
    constructor(props){
        super(props);
        this.state={
            categories:[],
            modalTitle:"",
            CategoryName:"",
            CategoryId:0,

            CategoryIdFilter:"",
            CategoryNameFilter:"",
            CategorysWithoutFilter:[]

        }
    }
    //implement the filter function
    FilterFn(){
        var CategoryIdFilter=this.state.CategoryIdFilter;
        var CategoryNameFilter = this.state.CategoryNameFilter;

        var filteredData=this.state.CategorysWithoutFilter.filter(
            function(el){
                return el.CategoryId.toString().toLowerCase().includes(
                    CategoryIdFilter.toString().trim().toLowerCase()
                )&&
                el.CategoryName.toString().toLowerCase().includes(
                    CategoryNameFilter.toString().trim().toLowerCase()
                )
            }
        );
        
        this.setState({categories:filteredData});
        }
        changeCategoryIdFilter = (e) => {
            this.state.CategoryIdFilter=e.target.value;
            this.FilterFn();
        }

        sortResult(prop,asc){
            var sortedData=this.state.CategorysWithoutFilter.sort(function(a,b){
                if(asc){
                    return (a[prop]>b[prop])?1:((a[prop]<b[prop])?-1:0);
                }
                else{
                    return (b[prop]>a[prop])?1:((b[prop]<a[prop])?-1:0);
                }
            });
    
            this.setState({categories:sortedData});
        }
        
    refreshList(){
        fetch(variables.API_URL+'Category')
        .then(response=>response.json())
        .then(data=>{
            this.setState({categories:data,CategorysWithoutFilter:data});
        });
    }

        //we will call the refresh method here
        componentDidMount(){
            this.refreshList();
        }
    
        changeCategoryName = (e) => {
           this.setState({CategoryName:e.target.value});
        }

        addClick(){
            this.setState({
                modalTitle:"Add Category",
                CategoryId:0,
                CategoryName:""
            });
        }
        editClick(cat){
            this.setState({
                modalTitle:"Edit Category",
                CategoryId:cat.CategoryId,
                CategoryName:cat.CategoryName
            });
        }

        createClick(){
            fetch(variables.API_URL+'Category',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    CategoryName:this.state.CategoryName
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
            fetch(variables.API_URL+'Category',{
                method:'PUT',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    CategoryId:this.state.CategoryId,
                    CategoryName:this.state.CategoryName
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
            fetch(variables.API_URL+'Category/'+id,{
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
            categories,
            modalTitle,
            CategoryName,
            CategoryId
            
        }=this.state;

        return(
            <div>
                <Crud/>
                <button type="button" className="btn btn-primary m-2 float-end" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => this.addClick()}>Add Category</button>
<table className="table table-striped">
    <thead>
        <tr>
            <th>
                <input className="form-control m-2" onChange={this.changeCategoryIdFilter}
                placeholder="Filter"/>

                CategoryId
            </th>
            <th>
            <input className="form-control m-2" onChange={this.changeCategoryIdFilter}
                placeholder="Filter"/>
                
                CategoryName
            </th>
            <th>
                Options
            </th>
        </tr>
    </thead>
    <tbody>
        {categories.map(cat=>
            <tr key={cat.CategoryId}>
                <td>{cat.CategoryId}</td>
                <td>{cat.CategoryName}</td> 
                <td>
                <button type="button" className="btn btn-light mr-1" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>this.editClick(cat)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                </svg>
                    </button>
                    <button type="button" className="btn btn-light mr-1" onClick={()=>this.deleteClick(cat.CategoryId)}>
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
            <span className="input-group-text">CategoryName</span>
            <input type="text" className="form-control" value={CategoryName} onChange={this.changeCategoryName}/>
        </div>
        {CategoryId==0? 
        <button type="button" className="btn btn-primary float-start" onClick={()=>this.createClick()}>Create</button>:null}
        {CategoryId!=0? 
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