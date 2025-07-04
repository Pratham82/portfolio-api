// schemas/photos.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'geopoint', // Allows latitude and longitude input
    }),

    defineField({
      name: 'placeName',
      title: 'Place Name',
      type: 'string',
      description: 'City, Town, or Landmark',
    }),

    defineField({
      name: 'dateTaken',
      title: 'Date Taken',
      type: 'datetime',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'placeName',
    },
  },
})
