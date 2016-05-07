class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentVideo: props.data[0]
      // videoList: props.data
    };
  } 

  handleVideoClick(video) {
    this.setState({
      currentVideo: video
      // videoList: 
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.props.data} click={this.handleVideoClick.bind(this)}/>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
