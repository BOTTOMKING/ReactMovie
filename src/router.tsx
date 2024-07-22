import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './screens/Home';
import ComingSoon from './screens/ComingSoon';
import NowPlaying from './screens/NowPlaying';

export const router = createBrowserRouter(
    [
        {
          path: '/',
          element: <App />,
          children: [
            { path: 'ReactMovie/', element: <Home /> },
            { path: 'coming-soon', element: <ComingSoon /> },
            { path: 'now-playing', element: <NowPlaying /> },
          ],
        },
    ]
);