import React,{Component} from 'react';
import {variables} from './Variables.js';
import { Link } from "react-router-dom";
import Crud from './pages/crud.js';

export class Brands extends Component{

    constructor(props){
        super(props);

        this.state={
            brands:[],
            categories:[],
            modalTitle:"",
            BrandId:0,
            BrandName:"",
            CategoryId:0,           
        }

        console.log(this.state);
    }

    refreshList(){
        fetch(variables.API_URL+'Brands')
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            this.setState({brands:data});
        });

        fetch(variables.API_URL+'Category')
        .then(response=>response.json())
        .then(data=>{
        this.setState({categories:data});
        
        })
        .catch(error => {
        console.error('Error fetching categories:', error);
        });
        
}

    componentDidMount(){
        this.refreshList();
    }
    
    changeBrandName =(e)=>{
        this.setState({BrandName:e.target.value});
    }
    changeCategory =(e)=>{
        console.log('optval', e.target.value);

        this.setState({CategoryId:e.target.value});
    }
    addClick(){
        this.setState({
            modalTitle:"Add Brand",
            BrandId:0,
            BrandName:"",
            CategoryId:""           
        });
    }
    editClick(bra){
        this.setState({
            modalTitle:"Edit Brand",
            BrandId:bra.BrandId,
            BrandName:bra.BrandName,
            CategoryId:bra.CategoryId,          
        });
    }

    createClick(){
        console.log(this.state);
        fetch(variables.API_URL+'Brands',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                BrandName:this.state.BrandName,
                CategoryId: this.state.CategoryId
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed', error);
        })
    }


    updateClick(){
        fetch(variables.API_URL+'Brands',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                BrandId: this.state.BrandId,
                BrandName:this.state.BrandName,
                CategoryId:this.state.CategoryId
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed 2', error);
        })
    }

    deleteClick(id){
        if(window.confirm('Are you sure?')){
        fetch(variables.API_URL+'Brands/'+id,{
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
            alert('Failed 3', error);
        })
        }
    }

        render(){
        const {
            categories,
            brands,
            modalTitle,
            BrandId,
            BrandName,       
        }=this.state;

        return(
<div>
    <Crud/>
    <button type="button"
    className="btn btn-primary m-2 float-end"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    onClick={()=>this.addClick()}>
        Add Brand
    </button>
    <table className="table table-striped">
    <thead>
    <tr>
        <th>
            BrandId
        </th>
        <th>
            BrandName
        </th>
        <th>
            Category
        </th>
        <th>
            Options
        </th>
    </tr>
    </thead>
    <tbody>
        {brands.map(bra=>
            <tr key={bra.BrandId}>
                <td>{bra.BrandId}</td>
                <td>{bra.BrandName}</td>
                <td>{categories.find(cat => cat.CategoryId === bra.CategoryId)?.CategoryName}</td>
                <td>
                <button type="button"
                className="btn btn-light mr-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={()=>this.editClick(bra)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </button>

                <button type="button"
                className="btn btn-light mr-1"
                onClick={()=>this.deleteClick(bra.BrandId)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
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
       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
       ></button>
   </div>

   <div className="modal-body">
    <div className="d-flex flex-row bd-highlight mb-3">
     
     <div className="p-2 w-50 bd-highlight">
    
        <div className="input-group mb-3">
            <span className="input-group-text">Brand Name</span>
            <input type="text" className="form-control"
            value={BrandName}
            onChange={this.changeBrandName}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">Category</span>
            <select className="form-select"
            onChange={this.changeCategory}>
                {categories.map(cat=><option value={cat.CategoryId} key={cat.CategoryId}>
                    {cat.CategoryName}
                </option>)}
            </select>
        </div>   
     </div>    
    </div>

    {BrandId==0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.createClick()}
        >Create</button>
        :null}

        {BrandId!=0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.updateClick()}
        >Update</button>
        :null}
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