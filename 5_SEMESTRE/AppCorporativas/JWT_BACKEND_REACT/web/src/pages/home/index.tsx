import { useAuth } from '../../hooks/useAuth';
const Home = () => {
    const context = useAuth();
    async function handleLogout() {
        if (!context) {
            return null;
        }
        context.logout();
    }
    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};
export default Home;