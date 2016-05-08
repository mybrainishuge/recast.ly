class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: null,
      videoList: []
    };
  } 

  componentDidMount() {
    this.filterResults('cats');
  }

  handleVideoClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  filterResults(word) {
    var options = {
      key: YOUTUBE_API_KEY,
      query: word,
      max: 5
    };

    searchYouTube(options, videos => {
      this.setState({
        currentVideo: videos[0],
        videoList: videos
      });
    });
  }

  render() {
    return (
      <div>
        <Nav nav={(word) => this.filterResults(word)} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} click={(video) => this.handleVideoClick(video)} />
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
