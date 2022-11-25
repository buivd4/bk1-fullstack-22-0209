import React from "react";

class DangKyRef extends React.Component{
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
        this.name = React.createRef()
        this.age = React.createRef()
        this.from = React.createRef()
        this.sex = React.createRef()
        this.onBtnClick = this.onBtnClick.bind(this)
    }

    onBtnClick(){
        alert(this.name.current.value + " | " + this.age.current.value + " | " + this.from.current.value + " | " + this.sex.current.value)
    }

    render(){
        return (
            <div>
                <form>
                    <input type="text" ref={this.name}></input>
                    <input type="text" ref={this.age}></input>
                    <input type="text" ref={this.from}></input>
                    <input type="text" ref={this.sex}></input>
                    <button onClick={this.onBtnClick}>Print</button>
                </form>
            </div>
        )
    }
}

export default DangKyRef