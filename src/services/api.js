const API_BASE_URL =
import.meta.env.VITE_API_BASE_URL;


export async function getPosts(limit = 6) {

const response = await fetch(
`${API_BASE_URL}/posts?_limit=${limit}`
);


if (!response.ok) {
throw new Error("Failed to fetch posts.");
}


return response.json();

}