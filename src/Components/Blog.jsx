import { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'cybersecurity',
            language: 'en',
            sortBy: 'publishedAt',
            apiKey: import.meta.env.VITE_API_KEY
          }
        });
        const filteredPosts = response.data.articles.filter(
          post => post.title && post.description && post.url
        );
        setPosts(filteredPosts);
        setVisiblePosts(filteredPosts.slice(0, visibleCount));
      } catch (error) {
        setError('Failed to fetch blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [visibleCount]);

  const loadMorePosts = () => {
    setVisibleCount(prevCount => {
      const newCount = prevCount + 3;
      setVisiblePosts(posts.slice(0, newCount));
      return newCount;
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container py-5 text-center" id="blog">
      <h1 className="display-4 font-semibold mb-5 text-success">
        Latest Blog Posts
      </h1>
      <div className="row g-4">
        {visiblePosts.map((post, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100 text-center bg-dark text-light border-success d-flex flex-column justify-content-center">
              <div className="card-body d-flex flex-column align-items-center">
                <h3 className="card-title text-success">{post.title}</h3>
                <p className="card-text">{post.description}</p>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visiblePosts.length < posts.length && (
        <button className="btn btn-success mt-4" onClick={loadMorePosts}>
          Load More
        </button>
      )}
    </div>
  );
};

export default Blog;
