export default {
    name: 'client',
    type: 'document',
    title: 'Client',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'telephone',
            type: 'number',
            title: 'Telephone'
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email'
        },
        {
            title: 'Icon',
            name: 'icon',
            type: 'image'
        },
        {
            title: 'Document',
            name: 'document',
            type: 'image'
        }
    ]
}