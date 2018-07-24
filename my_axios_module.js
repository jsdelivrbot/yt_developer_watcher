var axios = require('axios');

//var ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';
var ROOT_URL = 'https://www.googleapis.com/youtube/v3/channels';
var VIDEOS_URL =  'https://www.googleapis.com/youtube/v3/playlistItems';
var PLAYLIST_URL =  'https://www.googleapis.com/youtube/v3/playlists';


exports.channelUploadsGetter = function (options, callback) {
  if (!options.key) {
    throw new Error('Youtube Channels List expected key, received undefined');
  }

  //żeby dostać się do uploads - czyli listy wszystkich filmów z danego kanału
  var params = {
    id: options.channelId, 
    part: 'contentDetails',
    key: options.key,
    type: 'video'
  };
  axios.get(ROOT_URL, { params: params })
    .then(function(response) {
      if (callback) { callback(response.data.items); }
    })
    .catch(function(error) {
      console.error(error);
    });
};

exports.channelAllVideosGetter = function (options, callback) {
  if (!options.key) {
    throw new Error('Youtube Channels All Videos expected key, received undefined');
  }

  //żeby dostać się do wszystkich filmów w kanale  
  var params = {
    playlistId: options.channelUploads, 
    part: 'snippet',
    key: options.key,
    type: 'video'
  };
  axios.get(VIDEOS_URL, { params: params })
    .then(function(response) {
      if (callback) { callback(response.data.items); }
    })
    .catch(function(error) {
      console.error(error);
    });
};


exports.channelPlaylistVideosGetter = function (options, callback) {
  if (!options.key) {
    throw new Error('Youtube Channels Playlist Videos expected key, received undefined');
  }

  //żeby dostać się do wszystkich filmów z danej playlisty  
  var params = {
    playlistId: options.onePlaylistId, 
    part: 'snippet',
    key: options.key,
    type: 'video'
  };
  axios.get(VIDEOS_URL, { params: params })
    .then(function(response) {
      if (callback) { callback(response.data.items); }
    })
    .catch(function(error) {
      console.error(error);
    });
};




exports.channelAllPlaylistsGetter = function (options, callback) {
  if (!options.key) {
    throw new Error('Youtube Channels Playlist expected key, received undefined');
  }

  //żeby dostać się do wszystkich playlist w kanale  
  var params = {
    channelId: options.channelId, 
    part: 'snippet',
    key: options.key,
    type: 'video'
  };

  axios.get(PLAYLIST_URL, { params: params })
    .then(function(response) {
      if (callback) { callback(response.data.items); }
    })
    .catch(function(error) {
      console.error(error);
    });
};


//Żeby się dostać do listy filmów na kanale: najpierw dostajemy się do kanału (contentDetails), a potem pobierając uploads do listy filmów na kanale
// https://www.youtube.com/watch?v=RjUlmco7v2M
//https://developers.google.com/apis-explorer/?hl=pl#p/youtube/v3/youtube.channels.list

//channels.list - w id wstawiamy id kanału. Pobieramy uploads żeby w kolejnym orkoku wyciągnąć wszystkie filmy z kanału. Wystarczy contentDetails
//https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCLLdzVN9P9lV8kmJhHsiuHA&key={YOUR_API_KEY}
// items.contentDetails.relatedPlaylists.uploads   => "UULLdzVN9P9lV8kmJhHsiuHA"

//playlistItems.list
//https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=UULLdzVN9P9lV8kmJhHsiuHA&key={YOUR_API_KEY}
//jeśli w playlistID wpiszemy id danej listy na kanale - da nam filmy z tej listy
//jeśli w playlistID wpiszemy uploads  - da nam filmy z całego kanału


//playlist.list - lista wszysykich playlist w kanale, w channelId podajemy id kanału
//https://www.googleapis.com/youtube/v3/playlists?part=contentDetails%2C+snippet&channelId=UCLLdzVN9P9lV8kmJhHsiuHA&key={YOUR_API_KEY}
