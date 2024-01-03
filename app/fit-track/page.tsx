import React from 'react'

interface User {
    id: number;
    name: string;
}

const FitTrackPage = async () => {
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        { next: { revalidate: 3600 }}
    );
    const users: User[] = await res.json();

    return (
        <main>
            <h1>Fit Track</h1>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </main>
    );
}

export default FitTrackPage;
