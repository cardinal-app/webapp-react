"use server"
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
    // const [formData, setFormData] = useState({
    //     block: "",
    //     week: "",
    //     volume: ""
    // });

    const res = await fetch(
        'http://localhost:8080/weeks',
        { cache: "no-store", next: { revalidate: 3600 }}
    );
    
    const weeks: Week[] = (await res.json())['_embedded']['weeks'];
    console.log(weeks);

    // const addWeek = (event: any) => {
    //     event.preventDefault();
    //
    //     console.log(event);
    //
    //     // POST the data to the URL of the form
    //     fetch('http://localhost:8080/weeks', {
    //         method: "POST",
    //         body: JSON.stringify({}),
    //     }).then(() => {
    //         // setFormData({
    //         //     block: "",
    //         //     week: "",
    //         //     volume: ""
    //         // })
    //     })
    // }

    return (
        <main>
            <h1>Fit Track</h1>
            <br/>
            <p>{new Date().toLocaleTimeString()}</p>
            <br/>
            <ul>
                {weeks.map(week =>
                    <li key={week.block + ':' + week.week}>
                        <span className="md:mx-4">{week.block} : {week.week}</span> {week.running.volume}
                    </li>
                )}
            </ul>
            <br/>
            {/*<form action={addWeek}>*/}
            {/*    <input type="number" name="block"/>*/}
            {/*    <input type="number" name="week"/>*/}
            {/*    <input type="number" name="volume"/>*/}
            {/*    <button type="submit">Add Week</button>*/}
            {/*</form>*/}
        </main>
    );
}

export default FitTrackPage;
