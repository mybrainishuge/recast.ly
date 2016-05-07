class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: exampleVideoData,
      options: {
        key: window.YOUTUBE_API_KEY,
        query: '',
        max: 5        
      }
    };
  } 

  componentDidMount() {
    var options = this.state.options;
    window.searchYouTube(options, function(data) {
      // this.setState({
      //   options: {
      //     key: window.YOUTUBE_API_KEY,
      //     query: data,
      //     max: 5
      //   }
      // });
      console.log('inside componentDidMount', data);
    });
  }

  handleVideoClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  filterResults(word) {
    this.setState({
      options: {
        key: window.YOUTUBE_API_KEY,
        query: word,
        max: 5
      }
    });
    window.searchYouTube(this.state.options, function(data) {
      console.log('We have results: ', data);
      this.setState({
        currentVideo: data
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
