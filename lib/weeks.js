import sql from 'better-sqlite3';

const db = sql('./lib/weeks.db');

export async function getWeeks() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    // throw new Error('Loading weeks failed');
    return db.prepare('SELECT * FROM weeks').all();
}
