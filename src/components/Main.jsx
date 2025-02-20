import React, { useState, useEffect } from "react";
import InputData from "./InputData";
import UserList from "./UserList";

const Main = () => {
    const [users, setUsers] = useState([]);

    const addUser = (user) => {
        setUsers([...users, user]);
    };

    useEffect(() => {
        if (users.length === 0) {
            alert("Đã xóa hết user");
        }
    }, [users]);

    return (
        <>
            <InputData addUser={addUser} />
            <UserList users={users} setUsers={setUsers} />
        </>
    );
};

export default Main;