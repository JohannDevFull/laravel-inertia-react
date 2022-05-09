import React from 'react'
import Layout from '../Layout/Layout'
import { Head } from '@inertiajs/inertia-react'

export default function Test(props) {
    
    const users = props.users;
    const listItems = users.map((user) =>
        <tr key={user.id}>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>Otto</td>
            <td>{user.email}x</td>
        </tr>
    );

    return (
        <Layout>
            <Head title="Test" />
            <table class="table table-dark table-striped mt-3">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {listItems} 
                </tbody>
            </table>     
        </Layout>
    )
}
