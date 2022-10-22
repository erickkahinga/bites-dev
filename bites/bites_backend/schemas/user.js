// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        {
            name: 'userName',
            title: 'UserName',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'string'
        },
        {
            name: 'followedRestuarants',
            title: 'FollowedRestaurants',
            type: 'array',
            of: [{type: 
                'reference',
                to: [{type: 'restaurant'}]
            }]
        },
        {
            name: 'followedUsers',
            title: 'FollowedUsers',
            type: 'array',
            of: [{type: 
                'reference',
                to: [{type: 'user'}]
            }]
        },
        {
            name: 'preferences',
            title: 'Preferences',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'orders',
            title: 'Orders',
            type: 'array',
            of: [{type: 'menuItem'}]
        }

    ],
};
