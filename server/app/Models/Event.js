'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Event extends Model {
  images () {
    return this.belongsTo('App/Models/Image')
  }
}

module.exports = Event
