import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import Paginate from './components/Paginate';
import React from 'react';
import CreateProductModal from './components/CreateProductModal';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      products: [
        {id: 11, name: "Candy", description: "For Chrismast", price: "$2.99"},
        {id: 2, name: "Candy", description: "For Chrismast", price: "$2.99"},
        {id: 3, name: "Candy", description: "For Chrismast", price: "$2.99"}
      ],
      onModalOpen:{
        create: false,
        view: false,
        edit: false,
        delete: false
      }
    }
  }
  addProduct=(product)=>{
    let currentProducts = this.state.products;
    currentProducts.push(product)
    this.setState({
      products: currentProducts
    })
  }
  onCreateBtnClick=()=>{
    let onModalOpen = this.state.onModalOpen;
    onModalOpen.create=!onModalOpen.create
    this.setState({
      onModalOpen:onModalOpen
    })
  }

  onCreateBtnClose=()=>{
    let onModalOpen = this.state.onModalOpen;
    onModalOpen.create=!onModalOpen.create
    this.setState({
      onModalOpen:onModalOpen
    })
  }
  render() {
    return (
      <div className='container-md space-y-4'>
        <p className='text-5xl font-bold' >
          Read Products
        </p>
        <hr />
        <button className='bg-blue-500 h-12 w-72 text-3xl rounded-md text-white' onClick={this.onCreateBtnClick}>Create new product</button>
        <Table records={this.state.products}/>
        <Paginate />
        {this.state.onModalOpen.create && <CreateProductModal onModalClose={this.onCreateBtnClose} onAddProduct={this.addProduct}/>}
      </div>
    );
  }
}

export default App;
