'use strict';

/**
 * terms-of-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::terms-of-service.terms-of-service');
