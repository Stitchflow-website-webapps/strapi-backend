'use strict';

/**
 * slug service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::slug.slug');
