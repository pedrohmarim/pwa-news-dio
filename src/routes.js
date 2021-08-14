import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

const Home = lazy(() => import('./Pages/Home/'));
const Post = lazy(() => import('./Pages/Posts/'));

const Routes = () => (
    <Router>
        <Suspense fallback={
            <CircularProgress color="secondary" size={50} />
        }>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/:subject/:id' component={Post} />
            </Switch>
        </Suspense>
    </Router>
)

export default Routes;