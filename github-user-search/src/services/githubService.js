import axios from "axios";

// Fetch single user by username
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
    },
  });
  return response.data;
};

// Fetch users with advanced search and pagination
export const fetchAdvancedUsers = async ({ username, location, minRepos, page = 1 }) => {
  let query = "";
  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=30`,
    {
      headers: {
        Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
      },
    }
  );

  // Fetch extra details for each user (location & repos)
  const detailedUsers = await Promise.all(
    response.data.items.map(async (user) => {
      const res = await axios.get(user.url, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
        },
      });
      return res.data;
    })
  );

  return { items: detailedUsers };
};
