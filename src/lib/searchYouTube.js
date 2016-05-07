var searchYouTube = (options, callback) => {
  // TODO
  var url = `https://www.googleapis.com/youtube/v3/search&part=snippet&maxResults=5&q=${options.query}&videoEmbeddable=true&key=${options.key}`;

  fetch(url).then(function(data) {
    callback(data);
    console.log('response data', data.body);
  })
  .catch(function(err) {
    console.error(err);
  });
};

window.searchYouTube = searchYouTube;
