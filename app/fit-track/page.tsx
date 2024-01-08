import React from 'react'

interface Week {
    block: number;
    week: number;
    running: {
        createdDate: string,
        session: Object[],
        volume: number;
    };
}

const FitTrackPage = async () => {
    const res = await fetch(
        'http://localhost:8080/weeks',
        { cache: "no-store", next: { revalidate: 3600 }}
    );
    
    const weeks: Week[] = (await res.json())['_embedded']['weeks'];
    console.log(weeks);

    return (
        <main>
            <h1>Fit Track</h1>
            <br/>
            <p>{new Date().toLocaleTimeString()}</p>
            <br/>
            <ul>
                {weeks.map(week => <li key={week.block + ':' + week.week}>{week.running.volume}</li>)}
            </ul>
        </main>
    );
}

export default FitTrackPage;
