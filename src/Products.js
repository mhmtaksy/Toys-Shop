/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React,{Component} from 'react';
import { variables } from './Variables';
import { Brands } from './Brands';
import { Link } from "react-router-dom";
import Crud from './pages/crud';

export class Products extends Component{
    constructor(props){
        super(props);
        this.state={
            brands:[],
            product:[],
            modalTitle:"",
            BrandId:0,
            CategoryId:0,
            ProductName:"",
            ProductId:0,
            DateOfJoining:"",
            ProductDescription:"",
            Price:"",
            PhotoFileName:"anonymous.png",
            PhotoPath:variables.PHOTO_URL    
        }
    }

    refreshList(){
        fetch(variables.API_URL+'Products')
        .then(response=>response.json())
        .then(data=>{
            this.setState({product:data});
        });
        fetch(variables.API_URL+'Brands')
        .then(response=>response.json())
        .then(data=>{
            this.setState({brands:data});
        });
    }

        //we will call the refresh method here
        componentDidMount(){
            this.refreshList();
        }
    
        changeProductName = (e) => {
           this.setState({ProductName:e.target.value});
        }
        changeBrand = (e) => {
            const categoryId = e.target.options[e.target.selectedIndex].getAttribute('data-category');
        
            this.setState({
                BrandId: e.target.value,
                CategoryId: categoryId
                
            });
            console.log(categoryId);
        }
        
         changeDateOfJoining = (e) => {
            this.setState({DateOfJoining:e.target.value});
         }
         
         changeProductDescription = (e) => {
            this.setState({ProductDescription:e.target.value});
         }

         changePrice = (e) => {
            this.setState({Price:e.target.value});
         }


        addClick(){
            this.setState({
                modalTitle:"Add Product",
                ProductIdId:0,
                ProductName:"",
                Brand:"",
                DateOfJoining:"",
                PhotoFileName:"anonymous.png",
                Price:"",
                ProductDescription:""
            });
        }
        editClick(pro){
            this.setState({
                modalTitle:"Edit Product",
                ProductId:pro.ProductId,
                ProductName:pro.ProductName,
                BrandId:pro.BrandId,
                CategoryId:pro.CategoryId,
                DateOfJoining:pro.DateOfJoining,
                PhotoFileName:pro.PhotoFileName,
                ProductDescription:pro.ProductDescription,
                Price:pro.Price
            });
        }

        createClick(){
            fetch(variables.API_URL+'Products',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    ProductName:this.state.ProductName,
                    BrandId:this.state.BrandId,
                    CategoryId:this.state.CategoryId,
                    DateOfJoining:this.state.DateOfJoining,
                    PhotoFileName:this.state.PhotoFileName,
                    ProductDescription:this.state.ProductDescription,
                    Price:this.state.Price
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
            fetch(variables.API_URL+'Products',{
                method:'PUT',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    ProductId:this.state.ProductId,
                    ProductName:this.state.ProductName,
                    BrandId:this.state.BrandId,
                    CategoryId:this.state.CategoryId,
                    DateOfJoining:this.state.DateOfJoining,
                    PhotoFileName:this.state.PhotoFileName,
                    ProductDescription:this.state.ProductDescription,
                    Price:this.state.Price
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
            fetch(variables.API_URL+'Products/'+id,{
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
        imageUpload=(e)=>{
            e.preventDefault();
    
            const formData=new FormData();
            formData.append("file",e.target.files[0],e.target.files[0].name);
    
            fetch(variables.API_URL+'employee/savefile',{
                method:'POST',
                body:formData
            })
            .then(res=>res.json())
            .then(data=>{
                this.setState({PhotoFileName:data});
            })
        }

    render(){
        const {
            product,
            brands,
            BrandId,
            CategoryId,
            modalTitle,
            ProductId,
            ProductName,
            DateOfJoining,
            PhotoFileName,
            PhotoPath,
            ProductDescription,
            Price
            
        }=this.state;

        return(
            
            <div>
                <Crud/>
                <button type="button" className="btn btn-primary m-2 float-end" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => this.addClick()}>Add Product</button>
<table className="table table-striped">
    <thead>
        <tr>
        <th>
                ProductId
             </th>
            <th>
                ProductName
             </th>
            <th>
                Brand
            </th>
           <th>
                 DateOfJoining
            </th>
             <th>
                 ProductDescription
             </th>
            <th>
                Price
             </th>
             <th>
                 Options
             </th>
        </tr>
    </thead>
    <tbody>
    
        {product.map(pro=>
            <tr key={pro.ProductId}>
                <td>{pro.ProductId}</td>
                <td>{pro.ProductName}</td>
                <td>{brands.find(cat => cat.BrandId === pro.BrandId)?.BrandName}</td> 
                <td>{pro.DateOfJoining}</td> 
                <td>{pro.ProductDescription}</td> 
                <td>{pro.Price}</td> 
                <td>
                <button type="button" className="btn btn-light mr-1" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>this.editClick(pro)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                </svg>
                    </button>
                    <button type="button" className="btn btn-light mr-1" onClick={()=>this.deleteClick(pro.ProductId)}>
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
        <div className="d-flex flex-row bd-highlight mb-3">

        <div className="p-2 w-50 bd-highlight">

        
        <div className="input-group mb-3">
            <span className="input-group-text">Product Name</span>
            <input type="text" className="form-control" value={ProductName} onChange={this.changeProductName}/>
         </div>
         <div className="input-group mb-3">
            <span className="input-group-text">Brand</span>
            <select className="form-select"
            onChange={this.changeBrand}
            >
                {brands.map(bra=><option data-category={bra.CategoryId} value={bra.BrandId} key={bra.BrandId}>
                    {bra.BrandName}
                </option>)}
            </select>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text">Date Of Joining</span>
            <input type="text" className="form-control" value={DateOfJoining} onChange={this.changeDateOfJoining}/>
         </div>
         <div className="input-group mb-3">
            <span className="input-group-text">Price</span>
            <input type="text" className="form-control" value={Price} onChange={this.changePrice}/>
         </div>
         <div className="input-group mb-3">
            <span className="input-group-text">ProductDescription</span>
            <input type="text" className="form-control" value={ProductDescription} onChange={this.changeProductDescription}/>
         </div>
        </div>
        <div className="p-2 w-50 bd-highlight">
            <img width="250px" height="250px" src={PhotoPath+PhotoFileName}/>
            <input className="m-2" type="file" onChange={this.imageUpload}/>
        </div>
        
       
        </div>
        {ProductId==0? 
        <button type="button" className="btn btn-primary float-start" onClick={()=>this.createClick()}>Create</button>:null}
        {ProductId!=0? 
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
