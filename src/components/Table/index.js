import React from "react";

function Table(props) {
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col" onClick={props.sortUserFirst}>First Name</th>
                    <th scope="col" onClick={props.sortUserLast}>Last Name</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {props.state.filteredUsers.map((user) => {
                    return (
                        <tr key={user.login.uuid}>
                            <td>{user.name.first}</td>
                            <td>{user.name.last}</td>
                            <td>{user.email}</td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>
    );
}

export default Table;
