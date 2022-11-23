import logo from './logo.svg';
import './App.css';
import React from 'react';
import List from './components/List';
import Detail from './components/Detail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Nguyen A",
      email: "email@gmail.com",
      phone: "0000"
    }
    this.userData = [
      {
        name: "Nguyen Van A",
        email: "email@gmail.com",
        phone: "0123456789"
        },
        {
          name: "Nguyen Viet B",
          email: "abcd@gmail.com",
          phone: "1234567809"
          },
          {
            name: "Nguyen C",
            email: "tyuiop@gmail.com",
            phone: "4567891234"
            }
    ];
  }
  changeDetail=(name, email, phone)=>{
    this.setState({
      name: name,
      email: email,
      phone: phone
    })
  }
  render() {
    return (
      <div className='flex mt-2'>
        <div className='w-1/3 '><List users={this.userData} onViewDetail={this.changeDetail}/></div>
        <div className='w-2/3'><Detail name={this.state.name} email={this.state.email} phone={this.state.phone}/></div>
      </div>

    )
  }
}

export default App;



/// Khi view detail
///  => Thay doi state
///  => Goi method changeDetail