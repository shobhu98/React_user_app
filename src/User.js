
import React from 'react'

const User = ({user, deleteUser}) => {
    return (
        <div className="us_er-list">
            {
                user.map(us_er => {
                    return (
                        <div className="us_er" key={us_er.id}>
                            <div>Name: { us_er.name }</div>
                            <div>Age: { us_er.age }</div>
                            <div>Belt: { us_er.belt }</div>
                            <button onClick={() => {deleteUser(us_er.id)}}>Delete user</button>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default User