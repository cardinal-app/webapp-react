import sql from 'better-sqlite3';

const db = sql('./lib/weeks.db');

export async function getWeeks() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    // throw new Error('Loading weeks failed');
    return db.prepare('SELECT * FROM weeks').all();
}

export async function saveWeek(week) {
    db.prepare(`
        INSERT INTO weeks (block, week, volume) VALUES (@block, @week, @volume)
    `).run(week);
}
