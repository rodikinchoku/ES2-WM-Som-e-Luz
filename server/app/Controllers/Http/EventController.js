'use strict'

const Helpers = use('Helpers')
const Event = use("App/Models/Event")
const Image = use("App/Models/Image")

class EventController {
  async index () {
    const events = await Event.query().with('images').fetch()

    return events
  }

  /**
   * Create/save a new event.
   * POST properties
   */
  async store ({ request }) {
    console.log(request)
    const data = request.only([
      'title',
      'description'
    ])

    const images = request.file('image', {
      types: ['image'],
      size: '2mb'
    })

    await images.move(Helpers.tmpPath('uploads'), {
      name: `${Date.now()}-eventPicture.jpg`
    })
    
    if (!images.moved()) {
      return images.errors()
    }

    const image = await Image.create({ path: images.fileName })
    console.log(image.path)
    const event = await Event.create({ title: data.title, description: data.description, image_id: image.id })

    return event
  }

  /**
   * Display a single event.
   * GET properties/:id
   */
  async show ({ params }) {
    const event = await Event.findOrFail(params.id)

    await event.load('images')

    return event
  }

  /**
   * Update event details.
   * PUT or PATCH properties/:id
   */
  async update ({ params, request, response }) {
    const event = await Event.findOrFail(params.id)

    const data = request.only([
      'title',
      'description'
    ])

    event.merge(data)

    await event.save()

    return event
  }

  /**
   * Delete a event with id.
   * DELETE properties/:id
   */
  async destroy ({ params, auth, response }) {
    const event = await Event.findOrFail(params.id)

    await event.delete()
  }
}

module.exports = EventController
