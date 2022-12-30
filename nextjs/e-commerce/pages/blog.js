import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
const blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    console.log("it is running");
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        console.log(parsed);
        setBlogs(parsed);
      });
  }, []);
  return (
    <div>
      <h2 className={styles.heading}>Latest Blogs</h2>
      {blogs.map((blogItem) => {
        return (
          <div key={blogItem.slug}>
            <div className={styles.blogItems}>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <h3 className={styles.blogHead}>{blogItem.title}</h3>
              </Link>
              <p>
                {blogItem.content.substr(0,140)}...
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default blog;
