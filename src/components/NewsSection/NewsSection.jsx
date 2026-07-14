import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Card from "../Card/Card";
import "./NewsSection.css";
import { getPosts } from "../../services/api";
import Skeleton from "../Skeleton/Skeleton";
function NewsSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getPosts();

        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="section">
        <div className="container">
          <>
    <Skeleton />
    <Skeleton />
    <Skeleton />
</>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section">
        <div className="container">
          <p>{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">

        <SectionTitle
          subtitle="API Demo"
          title="Latest Posts"
        />

        <div className="news-grid">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="news-card"
            >
              <h3>{post.title}</h3>

              <p>{post.body}</p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}

export default NewsSection;