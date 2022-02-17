const endpoints = require('../data/endpoints.json');
const requestJSON = require('../data/createBooking.json');
const authData = require('../data/auth.json');
const pactum = require('pactum');

describe('test  suite3', () => {
it('Delete booking - valid', async () => {
    await pactum.spec()
        .delete(endpoints.baseUrl + endpoints.delete + "/10")
        .withAuth(authData.validUsername, authData.validPassword)
        .expectStatus(201);
});

it('Delete booking - non-existent', async () => {
    await pactum.spec()
        .delete(endpoints.baseUrl+endpoints.delete + endpoints.invalidID)
        .withAuth(authData.validUsername, authData.validPassword)
        .expectStatus(405);
});
});