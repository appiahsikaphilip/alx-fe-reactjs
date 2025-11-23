export const fetchAdvancedUsers = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username}+`;
  if (location) query += `location:${location}+`;
  if (minRepos) query += `repos:>=${minRepos}`;

  const response = await fetch(`https://api.github.com/search/users?q=${query}`);
  const data = await response.json();

  // Fetch full details for each user
  const detailedUsers = await Promise.all(
    data.items.map(async (item) => {
      const res = await fetch(item.url);
      return await res.json();
    })
  );

  return detailedUsers;
};
