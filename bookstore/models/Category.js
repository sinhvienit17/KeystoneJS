const { Text, Relationship } = require('@keystonejs/fields')

module.exports = {
    fields: {
        name: {
            type: Text,
        },
        book: {
            type: Relationship,
            ref: 'Book.category',
            many: true,
        },
        author: {
            type: Relationship,
            ref: 'Author.category',
            many: true,
        },
    },
};