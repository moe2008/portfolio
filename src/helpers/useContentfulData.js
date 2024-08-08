// src/hooks/useContentfulData.js
import { useState, useEffect } from "react";
import client from "./contentfulClient";

const useContentfulData = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntries({
          content_type: "project",
        });
        setEntries(response.items);
        console.log(response.items);
      } catch (error) {
        setError(error);
        console.error("Error fetching blog posts from Contentful:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { entries, loading, error };
};

export default useContentfulData;
