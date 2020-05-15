import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import { Route, withRouter, HashRouter, Switch, Redirect } from "react-router-dom";
import UsersContainer from "./components/users/usersContainer";
import HeaderContainer from "./components/header/headerContainer";
import { connect, Provider } from "react-redux";
import { initializeApp } from './components/redux/app-reducer'
import { compose } from "redux";
import store from './components/redux/redux-store'
import Preloader from "./components/common/preload/preload";
const ProfileContainer = React.lazy(() => import('./components/content/profileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Musik = React.lazy(() => import('./components/musik/musik'));
const News = React.lazy(() => import('./components/news/news'));
const Settings = React.lazy(() => import('./components/settings/settings'));
const Login = React.lazy(() => import('./components/login/login'));


class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
    }
  render(){
    if(!this.props.initialized) {
    return (
    <Preloader />
    );
  }
  return (
    <div className="wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
        <Route path="/user" render={() => ( <UsersContainer/> )}/>
        <React.Suspense fallback={<div>Please wait! Loading...</div>}>
          <Switch>
          <Route exact
            path="/"
            render={() => <Redirect to={'/content'} />}
          />
          <Route
            path="/dialogs"
            render={() => <DialogsContainer />}
          />
          <Route
            path="/content/:userId?"
            render={() => (
              <ProfileContainer />
            )}
          />
          <Route path="/login" render={() => ( <Login/> )}/>
          <Route path="/news" component={News} />
          <Route path="/musik" component={Musik} />
          <Route path="/settings" component={Settings} />
          <Route path="*"
            render={() => (
              <div>404 NOT FOUND</div>
            )}
          />
          </Switch>
          </React.Suspense>
        </div>
    </div>
  );
}
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});
let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
  return <HashRouter>
      <Provider store={store}>
          <AppContainer />
        </Provider>
  </HashRouter>
}

export default SamuraiJSApp;