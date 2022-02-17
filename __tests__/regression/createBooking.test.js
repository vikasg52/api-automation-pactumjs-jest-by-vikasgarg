const endpoints = require('../../data/endpoints.json');
const requestJSON = require('../../data/createBooking.json');
const pactum = require('pactum');

describe('test  suite1', () => {
it('DevTest)Create valid booking', async () => {
    await pactum.spec()
        .post(endpoints.baseUrl+endpoints.booking)
        .withHeaders('Accept', 'application/json')
        .withBody(requestJSON)
        .expectStatus(200)
        .expectHeaderContains('content-type', 'application/json')
        .expectJsonMatch('booking', requestJSON);
});

it('ProdTest)Create invalid booking', async () => {
    await pactum.spec()
        .post(endpoints.baseUrl+endpoints.booking)
        .withHeaders('Accept', 'application/json')
        .withBody({"invalid": "body"})
        .expectStatus(500)
});
});
