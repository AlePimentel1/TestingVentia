import { NextApiRequest, NextApiResponse } from "next";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "GET":
            return await read(req, res)
    }
}

const read = async (_: NextApiRequest, res: NextApiResponse) => {
    try {
        const response = await fetch("https://api.nylas.com/messages?limit=5", {
            method: 'GET',
            headers: {
                "Authorization": "Bearer YAIt2ot9BtuQJF3TbMDCJw9LnPogrf",
                // "Cookie": "__cf_bm=8VhaZOVXcpc3Yd09lHjaLFdQu_faQ3NgtPZkVVTb2IY-1694453477-0-ASLRfzicN5WMG3vFUAfzaNe0OfCXkrxsUX4K/aUysmrz0zyygFHZLGK0IypsvZTmKW/ccz6OT/1r9AxtFTxFZX0="
            },
            redirect: 'follow' as RequestRedirect,
        });

        if (!response.ok) {
            throw new Error('Error en la solicitud GET');
        }

        const result = await response.text();

        return res.status(200).send(result)
    } catch (error: any) {
        return res.status(404).send({ error: error })
    }
}


