import axios from "axios";

const searchImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID AZ0mu5Z3ChdYWb9HMQeIeaioxXOpjRFt3D-zBoGc9yY'
    },
    params: {
      query: 'cars'
    }
  })
  console.log(response);
  return response;
};

export default searchImages;