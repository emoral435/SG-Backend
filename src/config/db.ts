import pg from 'pg';

const client = new pg.Client({ // this is the client that connects to the database
	host: process.env.RDS_HOSTNAME,
	user: process.env.RDS_USERNAME,
	port: parseInt(process.env.RDS_PORT || "5432", 10),
	password: process.env.RDS_PASSWORD,
	database: process.env.RDS_DATABASE,
})

export default client