import pg from "pg";

// Create a connection to db
const pool = new pg.Pool({
    // database:"postgres",
    // user:"postgres",
    // password:"mysecretpassword",
    connectionString: process.env.POSTGRES_URL,
});

export default async (req, res) => {
    // We want to read all the rows on the table first_table
    const { rows } = await pool.query("SELECT * FROM first_table"); // WHERE org_id = $1');
    // send it back as json
    res.status(200).json(rows);
};
