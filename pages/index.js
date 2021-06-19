import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = ({}) => {
  return (
    <>
      <Head>
        <title>Blog Homepage</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.header}>Mind Blogs</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          praesentium neque architecto culpa, ea deleniti quo esse. Voluptates
          illum, labore numquam soluta voluptatem, et quibusdam odit porro rerum
          rem commodi, vero autem temporibus iure? Quasi harum ad cupiditate
          vitae ducimus repudiandae voluptatem excepturi possimus
          exercitationem? Error, laborum et maiores est mollitia, laudantium
          ipsum iusto nam consequuntur sint sit commodi! Nulla?
        </p>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aperiam
          autem natus magni vel dolorem debitis, quasi recusandae quam et rerum
          qui magnam saepe facere repudiandae incidunt explicabo asperiores
          vero?
        </p>
      </div>
    </>
  );
};

export default Home;
