var searchYouTube = (options, callback) => {
  // TODO
  // var url = `https://www.googleapis.com/youtube/v3/search&part=snippet&maxResults=5&q=${options.query}&videoEmbeddable=true&key=${options.key}`;

  // fetch('https://www.googleapis.com/youtube/v3/search', {
  //   part: 'snippet',
  //   key: options.key,
  //   q: options.query,
  //   maxResults: options.max,
  //   type: 'video',
  //   videoEmbeddable: 'true'
  // }).then(({items}) => {
  //   callback(items);
  // })
  // .catch(err =>
  //   console.error(err)
  // );


  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: options.key,
    q: options.query,
    maxResults: options.max,
    type: 'video',
    videoEmbeddable: 'true'
  }).done(({items}) => {
    if (callback) {
      callback(items);
    }
  }).fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) =>
      console.error(err)
    );
  });
};

window.searchYouTube = searchYouTube;
