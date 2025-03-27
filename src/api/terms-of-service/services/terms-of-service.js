'use strict';

/**
 * terms-of-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::terms-of-service.terms-of-service');
