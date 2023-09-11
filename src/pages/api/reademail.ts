import { NextApiRequest, NextApiResponse } from "next";


export async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "GET":
            return await read(req, res)
    }
}

const read = async (_: NextApiRequest, res: NextApiResponse) => {
    try {
        const result = await fetch('https://api.nylas.com/messages?limit=5', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer YAIt2ot9BtuQJF3TbMDCJw9LnPogrf',
                'Content-Type': 'application/json',
            },
        });

        if (!result.ok) {
            throw new Error('Error en la solicitud GET');
        }

        // const data = await result.text();

        return res.status(200).send(result);

    } catch (error: any) {
        return res.status(404).send({ error: error.message });
    }
}


