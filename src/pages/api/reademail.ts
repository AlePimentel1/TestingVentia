import { NextApiRequest, NextApiResponse } from "next";


export async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "GET":
            return await read(req, res)
    }
}

const read = async (_: NextApiRequest, res: NextApiResponse) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer YAIt2ot9BtuQJF3TbMDCJw9LnPogrf");
        myHeaders.append("Cookie", "__cf_bm=8VhaZOVXcpc3Yd09lHjaLFdQu_faQ3NgtPZkVVTb2IY-1694453477-0-ASLRfzicN5WMG3vFUAfzaNe0OfCXkrxsUX4K/aUysmrz0zyygFHZLGK0IypsvZTmKW/ccz6OT/1r9AxtFTxFZX0=");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow' as RequestRedirect, // Asigna 'follow' como RequestRedirect
        };

        const response = await fetch("https://api.nylas.com/messages?limit=5", requestOptions);

        if (!response.ok) {
            throw new Error('Error en la solicitud GET');
        }

        const result = await response.text();

        res.status(200).json({ emails: result });

    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}


