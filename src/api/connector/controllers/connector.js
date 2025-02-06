'use strict';

/**
 * connector controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::connector.connector');
