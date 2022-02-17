const endpoints = require('../data/endpoints.json');
const requestData = require('../data/request.json');
const responseData = require('../data/response.json');
const pactum = require('pactum');

describe('test  suite5', () => {
    console.log('This is full url-',endpoints.baseUrl + endpoints.booking)
it('Get all IDs', async () => {
    await pactum.spec()
        .get(endpoints.baseUrl + endpoints.booking)
        .expectStatus(200)
        .expectHeaderContains('content-type', 'application/json')
        .expectJsonLength(responseData.allBookingsLength);
});

it('Get booking ID by existent firstname', async () => {
    await pactum.spec()
        .get(endpoints.baseUrl+endpoints.booking)
        .withQueryParams('firstname', requestData.existentFirstname)
        .expectStatus(200)
        .expectHeaderContains('content-type', 'application/json')
        .expectJsonLength(1)
        .expectJson([{
            "bookingid": responseData.validBookingIDFirstnameLastname
        }]);
});

it('Get booking ID by existent lastname', async () => {
    await pactum.spec()
        .get(endpoints.baseUrl+endpoints.booking)
        .withQueryParams('lastname', requestData.existentLastname)
        .expectStatus(200)
        .expectHeaderContains('content-type', 'application/json')
        .expectJsonLength(1)
        .expectJson([{
            "bookingid": responseData.validBookingIDFirstnameLastname
        }]);
});

it('Get booking ID by existent firstname and lastname', async () => {
    await pactum.spec()
        .get(endpoints.baseUrl+endpoints.booking)
        .withQueryParams('firstname', requestData.existentFirstname)
        .withQueryParams('lastname', requestData.existentLastname)
        .expectStatus(200)
        .expectHeaderContains('content-type', 'application/json')
        .expectJsonLength(1)
        .expectJson([{
            "bookingid": responseData.validBookingIDFirstnameLastname
        }]);
});

it('Get booking ID - empty checkin date header', async () => {
    await pactum.spec()
        .get(endpoints.baseUrl+endpoints.booking)
        .withQueryParams('checkin', "")
        .expectStatus(500)
        .expectHeaderContains('content-type', 'text/plain;')
});

it('Get booking ID - empty checkout date header', async () => {
    await pactum.spec()
        .get(endpoints.baseUrl+endpoints.booking)
        .withQueryParams('checkout', "")
        .expectStatus(500)
        .expectHeaderContains('content-type', 'text/plain;')
});

});
