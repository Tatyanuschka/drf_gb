import React from 'react';


const UserItem = ({user}) => {

    return (
        <tr>
            <td>
                {user.username}
            </td>
            {user.first_name}
            <td>
                {user.last_name}
            </td>
            <td>
                {user.email}
            </td>
        </tr>

    )
}

const UserList = ({users}) => {

    return (
        <table className="table-info">
            <tbody className="table-bordered">
            <tr className="heading" align="center">
                <th>
                    User name
                </th>
                <th>
                    First name
                </th>
                <th>
                    Last name
                </th>
                <th>
                    Email
                </th>

            </tr>
            {
                users.map((user) => <UserItem user={user}/>)
            }
            </tbody>

        </table>
    )


}

export default UserList;


