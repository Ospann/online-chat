import { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './utils/routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from './utils/const';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../index';

const AppRouter = () => {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);
    return (
        <Routes>
            {user ? (
                <>
                    {privateRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}
                    <Route path="*" element={<Navigate to={CHAT_ROUTE} replace />} />
                </>
            ) : (
                <>
                    {publicRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}
                    <Route path="*" element={<Navigate to={LOGIN_ROUTE} replace />} />
                </>
            )}
        </Routes>
    );
};

export default AppRouter;
