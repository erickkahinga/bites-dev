export default{
    name: 'restaurant',
    title: 'Restaurant',
    type: 'object',
    fields: [
        {
            name: 'restaurantName',
            title: 'RestaurantName',
            type: 'string'
        },
        {
            name: 'restaurantLocation',
            title: 'RestaurantLocation',
            type: 'geopoint'
        },
        {
            name: 'restaurantMenuItems',
            title: 'RestaurantMenuItems',
            type: 'array',
            of: [{type: 
                'reference',
                to: [{type: 'menu_item'}]
            }]
        },
        {
            name: 'startTime',
            title: 'StartTime',
            type: 'datetime'
        },
        {
            name: 'endTime',
            title: 'EndTime',
            type: 'datetime'
        },
        {
            name: 'image',
            title: 'image',
            type: 'image'
        }
    ]
}

