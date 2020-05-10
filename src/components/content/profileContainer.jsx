import React from "react";
import Content from "./Content";
import { connect } from "react-redux";
import { getUserProfileThunk, getStatusThunk, updateStatus, savePhoto, saveProfile} from '../redux/profile-reducer'
import { withRouter } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/authRedirect";
import { compose } from "redux";



class ProfileContainer extends React.Component {
  refreshProfile(){
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = this.props.authorizedUserId;
      if(!userId){
        this.props.history.push('/login');
      }
    }
    this.props.getUserProfileThunk(userId);
    this.props.getStatusThunk(userId);
  }
  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if ( this.props.match.params.userId != prevProps.match.params.userId ){
      this.refreshProfile();
    }
  }
  render() {
    return (
      <div>
        <Content {...this.props} profile={this.props.profile} 
                  isOwner={!this.props.match.params.userId}
                  status={this.props.status}
                  updateStatus={this.props.updateStatus}
                  savePhoto={this.props.savePhoto}
                  />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId, 
  isAuth: state.auth.isAuth
});

export default compose(
  connect(mapStateToProps, {getUserProfileThunk, getStatusThunk, updateStatus, savePhoto, saveProfile}),
  withRouter,
  // WithAuthRedirect
)(ProfileContainer)