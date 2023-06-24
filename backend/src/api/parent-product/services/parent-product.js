'use strict';

/**
 * parent-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::parent-product.parent-product');
