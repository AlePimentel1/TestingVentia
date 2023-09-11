
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Verifica si es una solicitud GET para iniciar la autenticación
    switch (req.method) {
        case 'GET': {
            const authUrl = `https://api.nylas.com/oauth/authorize?client_id=8ynk5iozc6zhsjw8stk3z9a5a&redirect_uri=https://testingventia.vercel.app/&response_type=code&scopes=email,calendar&redirect_on_error=true`;
            res.writeHead(302, {
                Location: authUrl,
            });
            res.end();
            break
        }
        case 'POST': {
            return res.status(200).send(req.query)
            // const authCode = req.query.code;
            // console.log(`El código es: ${authCode}`);
            // if (authCode) {
            //     console.log(`El código es: ${authCode}`);
            //     return res.status(200).json({ authCode });
            // } else {
            //     res.status(404).send({ error: "error" })
            // }
            // else {
            //     console.log("No se encontró el código en la URL de redirección.");
            //     res.status(400).json({ error: "Código no encontrado en la URL de redirección." });
            // }
            break
        }
    }
    // if (req.method === 'GET') {
    //     // Construye la URL de autenticación de Nylas con los parámetros necesarios
    //     // const nylasAuthUrl = 'https://api.nylas.com/oauth/authorize';
    //     // const queryParams = new URLSearchParams({
    //     //     client_id: '8ynk5iozc6zhsjw8stk3z9a5a', // Reemplaza con tu client_id de Nylas
    //     //     redirect_uri: 'https://testing-ventia.vercel.app/', // Reemplaza con tu redirect_uri de Nylas
    //     //     response_type: 'code', // Utiliza 'code' para aplicaciones del lado del servidor
    //     //     scopes: 'email:read email:write', // Reemplaza con los alcances que necesites
    //     // });
    //     // Construye la URL completa de autenticación
    //     // const authUrl = `${nylasAuthUrl}?${queryParams.toString()}`;
    //     // Redirige al usuario a la URL de autenticación de Nylas

    // } else {
    //     res.status(405).end(); // Método no permitido
    // }
}


// const redirectUrl = req.url;

//   // Obtener el "code" de los parámetros de la URL
//   const queryParams = new URLSearchParams(redirectUrl.split('?')[1] || '');
//   const code = queryParams.get('code');

//   if (code) {
//     console.log(`El código es: ${code}`);
//     // Realiza aquí las acciones necesarias con el código
//     res.status(200).json({ code });
//   } else {
//     console.log("No se encontró el código en la URL de redirección.");
//     res.status(400).json({ error: "Código no encontrado en la URL de redirección." });
//   }