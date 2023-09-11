
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
            const authCode = req.body.code;
            const postData = {
                client_id: '8ynk5iozc6zhsjw8stk3z9a5a',
                client_secret: '9u4sdx0c3rk8yycoahntggjae',
                grant_type: 'authorization_code',
                code: authCode,
            };

            if (authCode) {
                let result = await fetch('https://api.nylas.com/oauth/token', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Basic ${postData.client_secret}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(postData),
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error('Error en la solicitud POST');
                        }
                        return response.json();
                    })
                    .then((data) => {
                        console.log('Respuesta del servidor:', data);
                    })
                    .catch((error) => {
                        console.error('Error al realizar la solicitud POST:', error);
                    });

                return res.status(200).send({ result: result })
            }
            break
        }
    }
}