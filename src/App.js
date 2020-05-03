import React from "react";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import { Route, withRouter } from "react-router-dom";
import UsersContainer from "./components/users/usersContainer";
import HeaderContainer from "./components/header/headerContainer";
import { connect } from "react-redux";
import { initializeApp } from './components/redux/app-reducer'
import { compose } from "redux";
import Preloader from "./components/common/preload/preload";
// import ProfileContainer from "./components/content/profileContainer";
const ProfileContainer = React.lazy(() => import('./components/content/profileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Musik = React.lazy(() => import('./components/musik/musik'));
const News = React.lazy(() => import('./components/news/news'));
const Settings = React.lazy(() => import('./components/settings/settings'));
const Login = React.lazy(() => import('./components/login/login'));


class App extends React.Component {
  // debugger;
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
        <React.Suspense fallback={<div>Loading...</div>}>
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
          <Route path="/user" render={() => ( <UsersContainer/> )}/>
          <Route path="/login" render={() => ( <Login/> )}/>
          <Route path="/news" component={News} />
          <Route path="/musik" component={Musik} />
          <Route path="/settings" component={Settings} />
          </React.Suspense>
        </div>
    </div>
  );
}
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});
export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);
