export default{
    name: 'menuItem',
    title: 'MenuItem',
    type: 'object',
    fields: [
        {
            name: 'menuItemName',
            title: 'MenuItemName',
            type: 'string'
        },
        {
            name: 'menuItemPrice',
            title: 'MenuItemPrice',
            type: 'number',
            validation: Rule => [
                Rule.positive().error('Dollar amount must be positive'),
                Rule.precision(2).warning('Dollar amount must be valid')
            ]
        },
        {
            name: 'image',
            title: 'image',
            type: 'image'
        }
    ]
}

