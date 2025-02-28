'use strict';

/**
 * newsletter-mail service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::newsletter-mail.newsletter-mail');
