import React, { useState } from "react";
import InputData from "./InputData";
import UserList from "./UserList";

const Main = () => {
    const [users, setUsers] = useState([]);

    const addUser = (user) => {
        setUsers([...users, user]);
    };

    return (
        <>
            <InputData addUser={addUser} />
            <UserList users={users} setUsers={setUsers} />
        </>
    );
};

export default Main;