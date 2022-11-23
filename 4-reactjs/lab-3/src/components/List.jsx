import React from 'react'
import UserDetail from './UserDetail';
class List extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <p>List of Users</p>
                <div className='space-y-2'>
                    {
                        this.props.users.map(user => (
                            <UserDetail name={user.name} email={user.email} phone={user.phone} onViewDetail={this.props.onViewDetail}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default List;