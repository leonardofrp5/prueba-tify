import api from '../config/api';

export const getArtists = () => api.get('/artists');

export const getAlbums = {
  getDataById: id => {
    return api.get(`/artists/${id}/albums`);
  }
};

export const getSongs = {
  getDataById: id => {
    return api.get(`/albums/${id}/songs`);
  }
};

export const getRandomSong = {
  getDataByRandomSong: genre_name => {
    return api.get(`/genres/${genre_name}/random_song`);
  }
};
