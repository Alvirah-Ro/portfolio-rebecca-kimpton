// Helper functions to fetch data from GitHub API

const DEFAULT_OWNER = "Alvirah-Ro";

// Uses Token and Authorization Header for GitHub API calls
function makeAuthHeaders(token) {
    return token ? { 
        Authorization: `Bearer ${token}`, 
        Accept: "application/vnd.github.v3+json"
    } : {
        Accept: "application/vnd.github.v3+json"
    };
}

// Checks response.ok before calling .json() for better error handling
async function fetchJsonIfOk(url, options) {
    const res = await fetch(url, options);
    if (!res.ok) return null;
    return res.json();   
}

// Creates urls to try finding Json project data
async function findProjectJson(repoName, { owner = DEFAULT_OWNER, branch = "main" } = {}) {
    const urls = [
        `https://raw.githubusercontent.com/${owner}/${repoName}/${branch}/project.json`,  // Root directory
        `https://raw.githubusercontent.com/${owner}/${repoName}/${branch}/${repoName}/project.json`, // Inside a subdirectory
        `https://raw.githubusercontent.com/${owner}/${repoName}/${branch}/.streamlit/project.json`, // Inside a streamlit subdirectory
    ];
    for (const u of urls) {
        try {
            const data = await fetchJsonIfOk(u);
            if (data) return data;
        } catch (e) {console.warn(e); }
    }
    return null;
}

// Fetches GitHub repository details
export async function fetchRepoWithProjectDetails(repoName, { owner = DEFAULT_OWNER, token } = {}) {
    const headers = makeAuthHeaders(token);
    const repoRes = await fetch(`https://api.github.com/repos/${owner}/${repoName}`, { headers });
    if (!repoRes.ok) throw new Error(`GitHub repo fetch failed: ${repoRes.status}`);
    const repoData = await repoRes.json();
    const projectJson = await findProjectJson(repoName, { owner });
    return { ...repoData, ...(projectJson || {}), projectJson };
}

// Fetches starred GitHub repositories
export async function fetchStarredReposWithDetails(owner = DEFAULT_OWNER, { token } = {}) {
    const headers = makeAuthHeaders(token);
    const res = await fetch(`https://api.github.com/users/${owner}/starred`, { headers });
    if (!res.ok) throw new Error(`Failed to fetch starred repos: ${res.status}`);
    const repos = await res.json();
    const results = await Promise.all(repos.map(async r => {
        try {return await fetchRepoWithProjectDetails(r.name, { owner, token }); }
        catch (e) { console.warn(`Skipping ${r.name}:`, e); return null; }
    }));
    return results.filter(Boolean).sort((a,b)=>new Date(b.updated_at)-new Date(a.updated_at));
}

export default { fetchRepoWithProjectDetails, fetchStarredReposWithDetails };