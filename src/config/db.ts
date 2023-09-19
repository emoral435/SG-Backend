import pg from 'pg';

const connectDB = async () => {
	const client = new pg.Client({ // this is the client that connects to the database
		host: process.env.RDS_HOSTNAME,
		user: process.env.RDS_USERNAME,
		port: parseInt(process.env.RDS_PORT || "5432", 10),
		password: process.env.RDS_PASSWORD,
		database: process.env.RDS_DATABASE,
	})
	await client.connect((error) => { // we connect to the database
		if (error) throw error;
		console.log("Connected!")

		// NOTE create a new table to store users if there is no
		client.query(`CREATE TABLE IF NOT EXISTS users( 
			user_id serial PRIMARY KEY,
			username VARCHAR ( 50 ) UNIQUE NOT NULL,
			password VARCHAR ( 50 ) NOT NULL,
			email VARCHAR ( 255 ) UNIQUE NOT NULL,
			created_on TIMESTAMP NOT NULL,
			last_login TIMESTAMP 
		)`, (error, res) => {
			console.log(res)
		})

		// await client.end()
	})
	

	// await client.query(`SELECT * FROM users`, (err, res) => {
	// 	if (err) {
	// 		console.log(err.message)
	// 	} else {
	// 		console.log(res)
	// 	}
	// })
}

export default connectDB