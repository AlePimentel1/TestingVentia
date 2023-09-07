import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "POST":
            return await sendEmail(req, res)
    }
}

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const accessToken = 'Nze3Vh0dVOcyYwVfwL2xJXsDKJRTa5';
        const { to, subject, message } = req.body;
        // const email = req.body.email
        //cambia email,message,subject a string

        const emailData = JSON.stringify({
            "subject": subject,
            "to": [
                {
                    "email": to,
                    "name": "Pepito Perez"
                }
            ],
            "from": [
                {
                    "name": "Test Account",
                    "email": "test-account-1@nylas.app"
                }
            ],
            "body": message,
        });

        const result = await fetch('https://api.nylas.com/send', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer 6iToeQOAkJjePIeFQh2CkGA5F6aXK4`,
                'Content-Type': 'application/json',
            },
            body: emailData,
        });

        if (!result.ok) {
            throw new Error(`Error en la solicitud: ${result.status} ${result.statusText}`);
        }
        const responseData = await result.json();

        return res.status(200).json({ result: `El resultado fue ${responseData}` });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

// const listAccount = async (res: NextApiResponse) => {
//     try {
//         const accessToken = '32ZDGyUmRgywrGSPtAaVLU4zh67y0I';

//         const nylasResponse = await fetch('https://api.nylas.com/account', {
//             method: 'GET',
//             headers: {
//                 'Accept': 'application/json',
//                 'Authorization': `Bearer ${accessToken}`,
//                 'Content-Type': 'application/json',
//             },
//         })
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Error en la solicitud');
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 // console.log('Success:', data)
//                 return res.send({ result: data })
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//             });

//     } catch (error) {
//         return res.status(404).send({ error: error.message })
//     }
// }
