import React from "react";

class CreateProductModal extends React.Component {
    constructor(props){
        super(props)
        this.id = React.createRef()
        this.name = React.createRef()
        this.description = React.createRef()
        this.price =React.createRef()
    }
    onCreatBtnClick=()=>{
        this.props.onAddProduct({
            id: this.id.current.value,
            name: this.name.current.value,
            description: this.description.current.value,
            price: this.price.current.value
        })
        this.props.onModalClose()
    }
    render(){
        return (
            <div>
              <div
                id="create_modal"
                className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
              >
                <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                  <div>
                    <p>Create Product</p>
                    <hr className="mb-4" />
                    <div className="flex space-x-2 text-center justify-between items-center">
                      <div className="w-1/5 flex flex-col space-y-4 justify-center items-start">
                        <p>ID</p>
                        <p>Name</p>
                        <p>Describe</p>
                        <p>Price</p>
                      </div>
                      <div className="w-4/5 flex flex-col space-y-4 justify-center items-center">
                        <input id="inp_create_id" className="w-full border rounded-sm" ref={this.id}/>
                        <input id="inp_create_name" className="w-full border rounded-sm" ref={this.name}/>
                        <input id="inp_create_desc" className="w-full border rounded-sm" ref={this.description}/>
                        <input id="inp_create_price" className="w-full border rounded-sm" ref={this.price}/>
                      </div>
                    </div>
                    <hr className="mt-4 mb-1" />
                    <div className="flex space-x-2 items-end justify-end">
                      <button
                        className="w-16 h-6 bg-red-500 rounded-md text-white text-sm"
                        onClick={this.props.onModalClose}
                      >
                        Cancel
                      </button>
                      <button
                        className="w-16 h-6 bg-blue-500 rounded-md text-white text-sm"
                        onClick={this.onCreatBtnClick}
                      >
                        Create
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
    }

};

export default CreateProductModal;
