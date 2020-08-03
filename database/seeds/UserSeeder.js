'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

/**
 * And this is more complex example of creating
 * multiple users with one unique profile for each.
 */
async function createMultipleUsers () {
    for (const item of new Array(10)) {
        const user = await Factory.model('App/Models/User')
            .create();
    }
}

class UserSeeder {
  async run () {
  	await createMultipleUsers();
  }
}

module.exports = UserSeeder
