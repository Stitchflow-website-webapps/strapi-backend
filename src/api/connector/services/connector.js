'use strict';

/**
 * connector service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::connector.connector');
