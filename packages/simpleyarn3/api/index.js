import truetrue from 'true';

export default async function handler(req, res) {
	if (truetrue) {
		res.status(200).end(`Definitely true // ${new Date().toISOString()}\n`);
		return;
	}

	res.status(200).end(`API KEY = ${process.env.API_KEY || 'No API key set'} // ${new Date().toISOString()}\n`);
}
