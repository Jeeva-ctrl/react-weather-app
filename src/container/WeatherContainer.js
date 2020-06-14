import React, { Component } from "react";
import SearchView from "../components/SearchView";
import { FetchCurrentWeather ,FetchForecastWeather} from "../services/action";
import { connect } from "react-redux";
import Nav from "../components/Nav";
import CurrentView from "../components/CurrentView";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import Loader from "../components/Loader";
import ForeCastView from "../components/ForeCastView";

class WeatherContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Rhodes",
      current: null,
      foreCast: [],
      isLoading: false,
    };
  }

  render() {
    let locat = this.props.location.pathname.toString();
    const handleChange = (e) => {
      this.setState({ city: e.target.value });
    };
    const handleButtonClick = () => {
      this.setState({ isLoading: true });
      this.props.FetchCurrentWeather(this.state.city, onSuccessResult);
    };
    const onSuccessResult = () => {
      this.setState({ isLoading: false });
      this.props.history.push("/current");
    };
    const onSuccessForecastResult = () => {
      this.setState({ isLoading: false });
      this.props.history.push("/foreCast");
    };
    const handleForeCast = ()=>{
      this.setState({ isLoading: true });
      this.props.FetchForecastWeather(this.state.city, onSuccessForecastResult);
    }
    return (
      <div className="weather_container">
       <Nav handleForeCast = {handleForeCast} locat = {locat}/>
        {this.state.isLoading ? <Loader /> : ""}
        <Route path="/foreCast">
        {this.props.isSearched ? (
            <ForeCastView forecast={this.props.forecast} />
          ) : (
            <SearchView
              value={this.state.city}
              onButtonClick={handleButtonClick}
              onTextChange={handleChange}
            />
          )}
          </Route>
        <Route path="/current">
          {this.props.isSearched ? (
            <CurrentView current={this.props.current} />
          ) : (
            <SearchView
              value={this.state.city}
              onButtonClick={handleButtonClick}
              onTextChange={handleChange}
            />
          )}
        </Route>
        <Route exact path="/">
          <SearchView
            value={this.state.city}
            onButtonClick={handleButtonClick}
            onTextChange={handleChange}
          />
        </Route>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  current: state.current.current,
  isSearched: state.current.isSearched,
  forecast : state.forecast.forecast
});

export default withRouter(
  connect(mapStateToProps, { FetchCurrentWeather,FetchForecastWeather })(WeatherContainer)
);
