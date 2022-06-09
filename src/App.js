import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';
import CoursePage from './pages/CoursePage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';  
import NotFound from './components/NotFound/NotFound';  
import SingleBlogPage from './components/Blog/SingleBlogPage';
import SingleCoursePage from './components/Course/SingleCoursePage';





function App() {
  const authCtx = useContext(AuthContext);

  return (

    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/course'>
          <CoursePage />
        </Route>
        <Route path='/blog'>
          <BlogPage />
        </Route>
        <Route path='/contact'>
          <ContactPage />
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path='/auth'>
            <AuthPage />
          </Route>
        )}
        <Route path='/profile'>
          {authCtx.isLoggedIn && <UserProfile />}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route>
        <Route path='/a-blog'>
          <SingleBlogPage  />
        </Route>
        <Route path='/a-course'>
          <SingleCoursePage  />
        </Route>
        <Route path='/*'>
          <NotFound  />
        </Route>
      </Switch>
    </Layout>
    
 
  );
}

export default App;