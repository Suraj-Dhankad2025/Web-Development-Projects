import Image from "next/image";
import Logo from "../static/logo.png";
import { FiBookmark } from "react-icons/fi";
const styles = {
    wrapper:"flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer",
  authorContainer: "flex gap-[.4rem] px-20",
  authorImageContainer:
    "grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]",
  postDetails: "",
  authorImage: "object-cover",
  authorName: "font-semibold",
  title: "font-bold text-2xl",
  briefing: "text-[#787878]",
  category: "bg-[#F2F3F2] p-1 rounded-full",
  articalDetails: "my-2 text-[.8rem]",
  detailsContainer: "flex items-center justify-between text-[#787878]",
  bookmarkContainer: "cursor-pointer",
};
const PostCard = () => {
  return (
    <div className={styles.postDetails}>
      <div className={styles.authorContainer}>
        <div className={styles.authorImageContainer}>
          <Image
            src={Logo}
            className={styles.authorImage}
            height={40}
            width={40}
          />
        </div>
        <div className={styles.authorName}>Suraj Dhankad</div>
      </div>
      <h1 className={styles.title}>
        7 Free tools to make you more productive{" "}
      </h1>
      <div className={styles.briefing}>
        Productivity is skill that can be learned
      </div>
      <div className={styles.detailsContainer}>
        <span className={styles.articalDetails}>
          October 24 • 5 min read •
          <span className={styles.category}>productivity</span>
        </span>
        <span className={styles.bookmarkContainer}>
          <FiBookmark className="h-5 w-5" />
        </span>
        <div className={styles.thumbnailContainer}>
          <Image height={100} width={100} src={Logo} />
        </div>
      </div>
    </div>
  );
};
export default PostCard;
