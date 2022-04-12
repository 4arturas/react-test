import {useState} from "react";
import axios from "axios";

const Login = () => {
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(false);
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [user, setUser] = useState({});

    const handleClick = async (e) => {
        e.preventDefault();
        setLoading(true);
        try
        {
            const url = 'https://jsonplaceholder.typicode.com/users/1';
            const {data} = await axios.get(url);
            setUser(data);
        }
        catch ( e )
        {
            setError(true);
        }
        setLoading(false);
    }

    return (
        <div className="container">
            <span>{user.name}</span>
            <form>
                <div>
                    <input type="text" placeholder="username" value={username} onChange={e=>setUsername(e.target.value)}/>
                </div>
                <div>
                    <input type="password" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                </div>
                <div>
                    <button disabled={!username || !password} onClick={handleClick}>
                        {loading ? "please wait" : "Login"}
                    </button>
                </div>
                <div>
                    <span data-testid="error" style={{visibility:error?"visible":"hidden"}}>Something went wrong</span>
                </div>
            </form>
        </div>
    )
}
export default Login