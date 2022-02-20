#!/bin/bash
npm test getBookingIDs.js  createToken.js getBooking.js
allure generate --clean && allure open