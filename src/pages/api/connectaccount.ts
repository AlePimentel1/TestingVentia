
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
            // const authCode = req.query.code;
            if (req.query) {
                return res.status(200).send({ codigo: `El codigo es: ${JSON.stringify(req.query.code), JSON.stringify(req.url)} hola hola` })
            }
            // return res.status(200).json({ authCode });
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