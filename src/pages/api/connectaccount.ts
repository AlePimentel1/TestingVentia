import { NextApiRequest, NextApiResponse } from "next";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "GET":
            return await connect(req, res)
    }
}

const connect = async (req: NextApiRequest, res: NextApiResponse) => {
    try {

    } catch (error) {
        return res.status(404).send({ error: error })
    }
}


