'use strict';

/**
 * schedule-demo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::schedule-demo.schedule-demo');
