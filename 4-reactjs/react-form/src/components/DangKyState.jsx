import React from "react";

class DangKyState extends React.Component{
    // Tao input cho cac phan sau
    //      Ho va ten
    //      Tuoi
    //      Que quan
    //      Gioi tinh
    //                  | Nut Submit |

    // Yeu cau 1: Người dùng chọn submit -> alert ra màn hình thông tin; các thông tin cách nhau bởi kí tự |
    //      Ví dụ:
    //          Ho va ten: Nguyen Van A
    //          Tuoi: 27
    //          Que quan: Ha Noi
    //          Gioi tinh: Nam
    //      Alert:
    //              Nguyen Van A | 27 | Ha Noi | Nam

    constructor(props){
        super(props)
        this.state = {
            inputName: "",
            inputAge: "",
            inputFrom: "",
            inputSex: ""
        }
    }
    
    onInputChange=(event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onBtnClick=()=>{
        alert(this.state.inputName + " | " + this.state.inputAge + " | "+ this.state.inputFrom+ " | "+ this.state.inputSex)
    }

    render(){
        return (
            <div>
                <form>
                    <input type="text" name="inputName" value={this.state.name} onChange={this.onInputChange}></input>
                    <input type="text" name="inputAge"  value={this.state.age} onChange={this.onInputChange}></input>
                    <input type="text" name="inputFrom" value={this.state.from} onChange={this.onInputChange}></input>
                    <input type="text" name="inputSex" value={this.state.sex} onChange={this.onInputChange}></input>
                    <button onClick={this.onBtnClick}>Print</button>
                </form>
            </div>
        )
    }

}

export default DangKyState