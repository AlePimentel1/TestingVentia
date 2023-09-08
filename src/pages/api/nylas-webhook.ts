import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case "GET":
            const challenge = req.query.challenge;

            // Verifica si el parámetro de desafío (challenge) está presente en la solicitud
            if (challenge) {
                // Devuelve el valor exacto del parámetro de desafío como respuesta
                return res.status(200).send(challenge);
            } else {
                // Si no se proporciona el parámetro de desafío, devuelve un error 400 BAD REQUEST
                return res.status(400).end("Missing challenge parameter");
            }

        case "POST":
            console.log("========MESSAGE UPDATED STARTED======");
            // Aquí debes agregar la lógica para manejar los eventos de actualización de mensajes
            // req.body.deltas.map(deltas => console.log(JSON.stringify(deltas)));
            console.log("=========MESSAGE UPDATED END=======");
            return res.status(200).end();

        default:
            return res.status(405).end(); // Método no permitido
    }
};

export default handler;
