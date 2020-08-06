// import imageSet from '../imageCloud'
const { imageSet } = require('../imageCloud')
const { Text, Integer, CalendarDay, Relationship, CloudinaryImage } = require('@keystonejs/fields')
const fileAdapter = imageSet('Books');

module.exports = {
    access: {
        update: ({ authentication: { item } }) => item && item.role === 'Admin' || item.role === 'Manager' ? true : false,
        delete: ({ authentication: { item } }) => item && item.role === 'Admin' || item.role === 'Manager' ? true : false,
        create: ({ authentication: { item } }) => item && item.role === 'Admin' || item.role === 'Manager' ? true : false,
    },
    fields: {
        name: {
            type: Text,
            isRequired: true,
        },
        category: {
            type: Relationship,
            ref: 'Category.book',
            many: false,
        },
        author: {
            type: Relationship,
            ref: 'Author.bookIsWritten',
            many: false
        },
        image: {
            type: CloudinaryImage,
            adapter: fileAdapter,
        },
        pageNumber: {
            type: Integer,
        },
        numberStorage: {
            type: Integer,
        },
        publishDate: {
            type: CalendarDay,
            defaultValue: new Date().toISOString('YYYY-MM-DD').substring(0, 10),
        },
        description: {
            type: Text,
        },
    },
};