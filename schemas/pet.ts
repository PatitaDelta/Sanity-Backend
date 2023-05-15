export default {
    name: 'pet',
    type: 'document',
    title: 'Pet',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Breed',
            name: 'breed',
            type: 'string'
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