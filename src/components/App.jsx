class App extends React.Components {
  constructor(props) {
    this.state = {
      currentVideo: props.data[0]
      // videoList: props.data
    };
  } 

  handleVideoClick(video) {
    this.setState({
      currentVideo: props.data[1]
      // videoList: 
    });
    this.render();
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={props.data} click={this.handleVideoClick.bind(this)}/>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
