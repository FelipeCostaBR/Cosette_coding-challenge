import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';

export const Routes: React.FC = () => (
    <>
        <Switch>
            <Route path="/products" exact component={Dashboard} />
        </Switch>
    </>
);
