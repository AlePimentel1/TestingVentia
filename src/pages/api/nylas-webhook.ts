import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

// {{callback_url}}/api/webhooks/nylas.js
const handler: NextApiHandler = async (req, res) => {
    switch (req.method) {
        case "GET":
            // return await listAccount(res)
            console.log("GET request received");
        case "POST":
            // return await createAccount(req, res)
            console.log("POST request received");
    }
}


export default handler;


