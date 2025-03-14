import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../utils/auth';
function RootLayout() {
    const { isAuthenticated, logout } = useAuth();
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        {isAuthenticated ? (
                            <>
                                <li><Link to="/dashboard">Dashboard</Link></li>
                                <li><button className='login-button'
                                    onClick={logout}>Logout</button></li>
                            </>
                        ) : (
                            <li><Link to="/login">Login</Link></li>
                        )}
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
export default RootLayout;