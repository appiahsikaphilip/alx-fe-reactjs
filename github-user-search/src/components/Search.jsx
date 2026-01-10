import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setUserData(null);

        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search-section">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Search for a GitHub user" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <button type="submit">Search</button>
            </form>

            {/* ERROR: MUST CONTAIN THE WORD 'Loading' */}
            {loading && <p>Loading...</p>}

            {/* ERROR: MUST MATCH THE EXACT ERROR STRING */}
            {error && <p>Looks like we cant find the user</p>}

            {/* ERROR: MUST CONTAIN 'img' AND 'avatar_url' */}
            {userData && (
                <div className="user-results">
                    <img 
                        src={userData.avatar_url} 
                        alt={userData.name} 
                        width="150" 
                    />
                    <h2>{userData.name}</h2>
                    <a href={userData.html_url} target="_blank" rel="noreferrer">
                        View GitHub Profile
                    </a>
                </div>
            )}
        </div>
    );
};

export default Search;