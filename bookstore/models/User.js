const { Text, Password, Select } = require('@keystonejs/fields')
const options = ['Admin', 'Manager', 'Customer'];
module.exports = {
    access: {
        read: ({ authentication: { item } }) => {
            if (item && item.role === 'Customer') return { id: item.id };
            if (item && item.role === 'Manager') return true;
            if (item && item.role === 'Admin') return true;
            return false;
        },
        update: ({ authentication: { item } }) => item && item.role === 'Admin' ? true : false,
        delete: ({ authentication: { item } }) => item && item.role === 'Admin' ? true : false,
        create: ({ authentication: { item } }) => item && item.role === 'Admin' ? true : false,
    },
    fields: {
        username: {
            type: Text,
            isUnique: true,
        },
        email: {
            type: Text,
        },
        password: {
            type: Password,
            isRequired: true,
        },
        role: {
            type: Select,
            options,
            isRequired: true,
        }
    },
}