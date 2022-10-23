export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;
    return query;
  };

  export const searchQuery = (searchTerm) => {
    const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
      image{
        asset -> {
          url
        }
      },
      _id,
      destination,
      postedBy -> {
        _id, 
        userName,
        image
      },
      save[]{
        _key,
        postedBy ->{
          _id,
          userName,
          image
        },
      },
    }`
    return query
  }

  export const feedQuery = `*[_type == 'pin'] | order(_createAt desc){
    image{
      asset -> {
        url
      }
    },
    _id,
    destination,
    postedBy -> {
      _id, 
      userName,
      image
    },
    save[]{
      _key,
      postedBy ->{
        _id,
        userName,
        image
      },
    },
  }`

  export const restaurantFeedQuery = `*[
    _type == 'restaurant' &&
    geo::distance(restaurantLocation, $currentLocation) < 16093.4
  ] | order(startTime desc){
    image{
      asset -> {
        url
      }
    },
    _id,
    restaurantName,
    restaurantLocation,
  }`