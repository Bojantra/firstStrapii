'use strict';

/**
 * live-casino service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::live-casino.live-casino');
