'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string("title", 800)
      table.integer("price").unsigned()
      table.timestamps()
      table.datetime("deleted_at").nullable().defaultTo(null)
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsSchema
