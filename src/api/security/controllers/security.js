'use strict';

/**
 * security controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::security.security');
