import { NextApiRequest, NextApiResponse } from "next";


export async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "GET":
            return await read(req, res)
    }
}

const read = async (req: NextApiRequest, res: NextApiResponse) => {

    try {
        const result = await fetch('https://api.nylas.com/messages?limit=5', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer 6iToeQOAkJjePIeFQh2CkGA5F6aXK4`,
                'Content-Type': 'application/json',
            }
        })
        return res.status(200).send({ emails: `Tus emails son ${result.body}` })

    } catch (error) {
        return res.status(404).send({ error: error })
    }
}


