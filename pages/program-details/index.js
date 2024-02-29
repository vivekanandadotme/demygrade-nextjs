import React, { useEffect } from "react";
import { useRouter } from "next/router";

const CourseLayout = () => {
  const router = useRouter();
  const postId = router.query.slug;

  useEffect(() => {
    if (postId === undefined) {
      router.push("/all-programs");
    }
  }, []);
};

export default CourseLayout;
