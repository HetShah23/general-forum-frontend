import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CommunityPage from './pages/communityPage';
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import SignupPage from './pages/signupPage';
import PostPage from './pages/postPage';
import UserProfilePage from './pages/userProfliePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home' exact component={HomePage}></Route>
        <Route path='/post' exact component={PostPage}></Route>
        <Route path='/user-profile' exact component={UserProfilePage}></Route>
        <Route path='/community' exact component={CommunityPage}></Route>
        <Route path='/login' exact component={LoginPage}></Route>
        <Route path='/signup' exact component={SignupPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
