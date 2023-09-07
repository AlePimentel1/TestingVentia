import Nylas from "nylas";

const initialiteNylasSDK = () => {
    Nylas.config({
        clientId: "8ynk5iozc6zhsjw8stk3z9a5a",
        clientSecret: "9u4sdx0c3rk8yycoahntggjae",
        apiServer: "https://api.nylas.com",
    });

    Nylas.application({
        redirectUris: ["http://localhost:3000"],
    }).then((applicationDetails) => {
        console.log(
            'Application registered. Application Details: ',
            JSON.stringify(applicationDetails)
        );
    });
}