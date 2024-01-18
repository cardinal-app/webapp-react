const sql = require('better-sqlite3');
const db = sql('./lib/weeks.db');

const dummyWeeks = [
    {
        block: 14,
        week: 1,
        volume: 9
    }
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS weeks (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       block INTEGER NOT NULL,
       week INTEGER NOT NULL,
       volume INTEGER NOT NULL
    )
`).run();

async function initData() {
    const statement = db.prepare(`
      INSERT INTO weeks VALUES (
         null,
         @block,
         @week,
         @volume
      )
   `);

    for (const week of dummyWeeks) {
        statement.run(week);
    }
}

initData();
