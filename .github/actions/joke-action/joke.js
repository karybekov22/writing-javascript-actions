const request = require("request-promise");

const options = {
    method: "GET",
    uri: "hhtps://icanhazdadjoke.com/",
    headers: {
        Accept: "application/json",
        "User-Agent":
            "Writing JavaScript action GitHub Learning Lab course. Visit lab.github.com or to contact us."
    },
    json: true
};

async function getJoke() {
    const res = await request(opstions);
    return res.joke;
}

module.exports = getJoke;