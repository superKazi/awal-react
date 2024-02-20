import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { fetchImage } from "./fetchImage";
import { formatBreedName } from "../utils";
import { Spinner } from "../spinner/Spinner";
import "./article.css";

function Article({ breed }) {
  const [inViewport, setInViewport] = useState(false);

  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["image", breed.randomImageUrl],
    queryFn: fetchImage,
    staleTime: Infinity,
    enabled: inViewport,
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.2,
          duration: 1,
        },
      }}
      onViewportEnter={() => {
        setInViewport(true);
      }}
      viewport={{ once: true }}
      className="article"
    >
      <figure className="article__figure">
        <div className="article__container">
          {isLoading && <Spinner />}
          {isError && (
            <p className="article__error">
              Sorry, there was an error loading the image.
            </p>
          )}
          {isSuccess && (
            <motion.img
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="article__image"
              width="400"
              height="250"
              src={data.message}
            />
          )}
        </div>
        <figcaption className="article__caption">
          {formatBreedName(breed.name)}
        </figcaption>
      </figure>
    </motion.article>
  );
}

export { Article };
