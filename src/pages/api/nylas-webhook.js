
export default function handler(req, res) {
    if (req.method === "GET" && req.query.challenge) {
        console.log(`Recieved challenge code! - ${req.query.challenge}`);
        console.log(`Now returning challenge code! - ${req.query.challenge}`);
        return res.send(req.query.challenge);
    }

    if (req.method === "POST") {
        console.log('=======Message Updated Started=======');
        req.body.deltas.map((delta) => console.log(JSON.stringify(delta)));
        console.log('=======Message Updated End=======');
        return res.status(200).end();
    }
}
