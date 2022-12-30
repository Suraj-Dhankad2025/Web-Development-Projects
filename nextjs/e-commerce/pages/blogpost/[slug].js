import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/BlogPost.module.css";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
    <main className={styles.main}>
      <h1>Title of the page {slug}</h1>
      <hr />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos natus
        architecto assumenda sunt nulla fugit quam obcaecati, quaerat, sit, in
        ab dicta vero eum!
      </div>
      </main>
    </div>
    
  );
};

export default slug;
