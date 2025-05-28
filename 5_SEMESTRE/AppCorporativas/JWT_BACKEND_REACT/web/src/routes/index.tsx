import SignRoutes from './SignRoutes';
import OtherRoutes from './OtherRoutes';
import { useAuth } from '../hooks/useAuth';
const Routes = () => {
    const authContext = useAuth();
    return authContext && authContext.signed ? <OtherRoutes /> : <SignRoutes />;
};
export default Routes;