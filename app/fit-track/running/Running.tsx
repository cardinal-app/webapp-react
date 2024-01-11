import styles from './Running.module.scss';

interface Week {
    block: number;
    week: number;
    weekCommencing: Date;
    running: {
        volume: number;
    }
}

// @ts-ignore
const Running = (props) => {
    const weeks: Week[] = props.weeks;
    return (
        <table className={styles.contentTable}>
            <tr>
                <th>Block : Week</th>
                <th>Week Commencing</th>
                <th>Volume (miles)</th>
            </tr>
            {weeks.map(week =>
                <tr key={week.block + ':' + week.week}>
                    <td>{week.block} : {week.week}</td>
                    <td>{!!week.weekCommencing ? week.weekCommencing.toString() : ''}</td>
                    <td>{week.running.volume}</td>
                </tr>
            )}
        </table>
    )
}

export default Running;
