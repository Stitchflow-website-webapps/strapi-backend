'use strict';

/**
 * security service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::security.security');
