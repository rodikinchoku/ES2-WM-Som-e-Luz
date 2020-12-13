'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')

Route.resource('events', 'EventController')
  .apiOnly()
  .middleware('auth')

Route.get('images/:path', 'ImageController.show')

