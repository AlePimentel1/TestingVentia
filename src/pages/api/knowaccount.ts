
// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     switch (req.method) {
//         case 'GET': {
//             var myHeaders = new Headers();
//             myHeaders.append("Authorization", "Bearer 7M20zpnPHONsHyjgl3qE6LFrPxEe7J");
//             myHeaders.append("Cookie", "__cf_bm=WAK6ikBDwniGZlP9WfhI8_4yJItW6vEdRHt2VPaUvow-1694440911-0-Ab8GZKJONVYWlsLma4suno9Ca2fOQUPSsEUHiaxs+4rQj4LAuDOf/OYveTWr5GktiEo9DicyiNohUew+bz99STs=");

//             var requestOptions = {
//                 method: 'GET',
//                 headers: myHeaders,
//                 redirect: 'follow'
//             };

//             await fetch("https://api.nylas.com/account", requestOptions)
//                 .then(response => response.text())
//                 .then(result => console.log(result))
//                 .catch(error => console.log('error', error));
//         }
//     }
// }