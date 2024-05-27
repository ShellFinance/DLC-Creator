// const crypto = require('crypto');
const apiResponse = await Functions.makeHttpRequest({
    url: "https://random.lee-perfect.workers.dev/"
});
if (apiResponse.error) {
    throw Error('Request failed');
}
const { data } = apiResponse;
const randomNumber = data.randomNumber
// const hash = crypto.createHash('sha256').update(String(randomNumber)).digest('hex');
return Functions.encodeString(randomNumber);