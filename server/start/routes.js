'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')

Route.resource('events', 'EventController')
  .apiOnly()
  

Route.get('images/:path', 'ImageController.show')

