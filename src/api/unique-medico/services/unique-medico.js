'use strict';

/**
 * unique-medico service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::unique-medico.unique-medico');
