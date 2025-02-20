import React from "react";

const UserList = ({ users, setUsers }) => {
    return (
        <ul>
            {users.map((user, index) => (
                <li 
                    style={{ 
                        display: "flex", 
                        justifyContent: "space-between",
                        color: 'white',
                        margin: '10px',
                    }}
                    key={index}>
                    <p>{user.name}</p>
                    <button
                        onClick={() => {
                            users.splice(index, 1);
                            setUsers([...users]);
                        }}
                        style={{
                            backgroundColor: 'red',
                        }}
                    >remove</button>
                </li>
            ))}
        </ul>
    );
};

export default UserList;
