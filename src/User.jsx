import React from 'react'

const User = ({data}) => {
    console.log(data);
    return (
        <div>
            <h3>{data.name.name}</h3>
            <h4>{data.name.age}</h4>
        </div>
    )
}

export default User
