import {UserIcon} from '@sanity/icons/User'
import {defineField, defineType} from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
    }),
    defineField({
      name: 'role',
      description: 'Job title shown next to the author name, e.g. "Head of Product".',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'bio',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(300),
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'role', media: 'image'},
  },
})
