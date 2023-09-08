// import { NextApiRequest, NextApiResponse } from "next";


// export async function handler(req: NextApiRequest, res: NextApiResponse) {
//     switch (req.method) {
//         case "GET":
//             return await read(req, res)
//     }
// }

// const read = async (req: NextApiRequest, res: NextApiResponse) => {
//     const url = 'https://api.nylas.com/oauth/authorize?client_id=8ynk5iozc6zhsjw8stk3z9a5a&redirect_uri=https://testing-ventia.vercel.app/&response_type=code&redirect_on_error=true';
//     try {
//         const response = await fetch(url, {
//             method: 'GET',
//             headers: {
//                 Authorization: 'Basic ENCODED_CLIENT_SECRET',
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             redirect: 'follow',
//         });
//         if (response.ok) {
//             const result = await response.text();
//             console.log(result);
//         } else {
//             console.error('Error en la solicitud:', response.status, response.statusText);
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Verifica si es una solicitud GET para iniciar la autenticación
    if (req.method === 'GET') {
        // Construye la URL de autenticación de Nylas con los parámetros necesarios
        // const nylasAuthUrl = 'https://api.nylas.com/oauth/authorize';
        // const queryParams = new URLSearchParams({
        //     client_id: '8ynk5iozc6zhsjw8stk3z9a5a', // Reemplaza con tu client_id de Nylas
        //     redirect_uri: 'https://testing-ventia.vercel.app/', // Reemplaza con tu redirect_uri de Nylas
        //     response_type: 'code', // Utiliza 'code' para aplicaciones del lado del servidor
        //     scopes: 'email:read email:write', // Reemplaza con los alcances que necesites
        // });
        // Construye la URL completa de autenticación
        // const authUrl = `${nylasAuthUrl}?${queryParams.toString()}`;
        const authUrl = `https://api.nylas.com/oauth/authorize?client_id=8ynk5iozc6zhsjw8stk3z9a5a&redirect_uri=https://testing-ventia.vercel.app/&response_type=code&redirect_on_error=true`;
        // Redirige al usuario a la URL de autenticación de Nylas
        res.writeHead(302, {
            Location: authUrl,
        });
        res.end();
    } else {
        res.status(405).end(); // Método no permitido
    }
}
