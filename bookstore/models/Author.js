const { Relationship, Text } = require('@keystonejs/fields')

module.exports = {
    fields: {
        name: {
            type: Text,
        },
        bookIsWritten: {
            type: Relationship,
            ref: 'Book.author',
            many: true,
        },
        category: {
            type: Relationship,
            ref: 'Category.author',
            many: true,
        }
    },
};