export default {
    name: 'restaurant',
    title: 'Restaurant',
    type: 'document',
    fields: [
        {
            name: 'restaurantName',
            title: 'RestaurantName',
            type: 'string',
        },
        {
            name: 'restaurantLocation',
            title: 'RestaurantLocation',
            type: 'geopoint',
        },
        {
            name: 'restaurantMenuItems',
            title: 'RestaurantMenuItems',
            type: 'array',
            of: [{type: 
                'reference',
                to: [{type: 'menuItem'}]
            }],
        },
        {
            name: 'startTime',
            title: 'StartTime',
            type: 'datetime',
        },
        {
            name: 'endTime',
            title: 'EndTime',
            type: 'datetime',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
             },
        }
    ]
}

