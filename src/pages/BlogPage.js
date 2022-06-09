import react from "react";

import BlogBox from "../components/Blog/BlogBox";
import BreadCrump from "../components/BreadCrump/BreadCrump";

const BlogPage = () => {
  return (
    <div>
      <BreadCrump title="Blog" />
      <BlogBox />
    </div>
  );
};

export default BlogPage;
