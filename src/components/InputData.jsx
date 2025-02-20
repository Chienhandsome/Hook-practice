import React, { useState } from "react";

const InputData = ({ addUser }) => {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) return;
        addUser({ name });
        setName("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
                style={{ 
                    marginRight: "10px",
                    padding: "12px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    outline: "none",
                    fontSize: "16px",

                }}
            />
            <button 
                type="submit"
                style={{ 
                    padding: "12px",
                    borderRadius: "5px",
                    outline: "none",
                    fontSize: "16px",
                    backgroundColor: "green",
                    color: "white",
                }}
                >Add User</button>
        </form>
    );
};

export default InputData;