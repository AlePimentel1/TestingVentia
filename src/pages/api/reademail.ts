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
                "Cookie": "__cf_bm=3FBcgXjgYfCP3mzYZ9sYxhUdrt22c2b9tkQFeH4fJ8k-1694456475-0-AXU/90MqSP5Dldckuh/GYFrTGrNw1jfN+j4AR+hRF3IDsE2HsJJuopYCoD0ECuu3RZf3v1DIFEbWfPTnuR+HTzw="
            },
            redirect: 'follow',
        });
        if (!response.ok) {
            const jsonResult = await response.json();
            console.log(jsonResult);
            throw new Error('Error en la solicitud GET');
        }

        const result = await response.text();

        return res.status(200).send(result)
    } catch (error: any) {
        return res.status(404).send({ error: error })
    }
}


