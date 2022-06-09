import React from "react";
import classes from "./SingleBlogPage.module.css";

function SingleBlogPage() {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img src="images/singblog.png" alt="" />
        <img src="images/typescript.png" alt="" />
      </div>
      <div className={classes.content}>
        <h2>This is the Blog Title</h2>
        <h5>This is the highlighted title</h5>
        <p className={classes.subTopic}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, cum
          quod! Modi blanditiis veritatis odio sunt iusto, eum officia
          distinctio cum fugit, rem facilis praesentium quod. Labore quas quidem
          beatae illum aspernatur culpa nostrum possimus in deleniti sit
          adipisci, eligendi molestiae, consectetur dolore provident, omnis
          quisquam eius voluptate suscipit quae!
        </p>
        <h3>This is a subtitle</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
          sunt sequi tempore, perferendis enim suscipit consectetur eum porro
          laudantium! Ad dolore possimus nemo eos, tenetur veritatis corporis
          illo, accusamus pariatur labore impedit laudantium cupiditate? Sint
          ratione tempora reprehenderit numquam architecto aperiam commodi
          pariatur error omnis laboriosam? Doloribus neque alias, perferendis
          eum laudantium impedit magni at. Tempore beatae recusandae natus quo
          obcaecati numquam iste ipsum, ea eveniet quam in sed. Sunt animi
          repudiandae sapiente repellat deserunt! Molestiae labore fugit nemo,
          obcaecati a excepturi alias suscipit commodi deleniti aperiam! Facilis
          quidem rerum corporis praesentium, ut eius possimus fugiat, sapiente
          quia dolorum incidunt. Quo soluta accusantium omnis qui possimus,
          mollitia neque asperiores dignissimos aperiam accusamus, dolorem
          obcaecati dicta quae. Reiciendis quaerat vitae doloremque.
        </p>
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab odio
          velit beatae officia fugiat! Nihil, ullam. Laudantium tempore
          obcaecati dolores neque a! Consequuntur sed sunt cupiditate nam.
          Deserunt, modi, odio veritatis repudiandae id blanditiis molestiae,
          nulla molestias amet vero ea voluptate deleniti dolorum ut impedit
          excepturi nihil reiciendis facilis accusantium. Hic tenetur sapiente
          harum. Praesentium voluptatum quibusdam ab ullam corrupti itaque,
          maxime nemo delectus minus rem unde, adipisci, sapiente aperiam ut
          blanditiis. Ullam ad corporis perspiciatis magni possimus! Quo,
          repudiandae?
        </p>
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
          eius eos quo sunt, totam ullam harum quia voluptatibus tenetur rerum
          quaerat pariatur vero perferendis repudiandae nulla quidem nisi autem
          magni quas laudantium provident placeat porro. Pariatur ipsa maiores
          laboriosam dolorem vero, ab architecto accusantium voluptatum neque
          excepturi accusamus perspiciatis officia unde est dicta amet nesciunt
          aperiam rem! At deleniti eveniet nulla esse fuga voluptatum id, odio,
          animi qui laborum dolor maxime atque odit magnam ut ipsa sunt cum
          optio? Pariatur, deserunt! Facilis ipsam dignissimos libero dolorem?
          Hic laboriosam quasi, necessitatibus cupiditate doloremque accusantium
          alias natus molestias minima saepe placeat, esse eaque maxime quia
          pariatur assumenda atque dolorum in ab animi? Vero ad laudantium
          dolorum! Iure nulla fugiat dignissimos alias ipsum.
        </p>
      </div>
      <div className={classes.authorInfo}>
        <span className={classes.authorImage}>
          <img src="images/ercan.png" alt="" />
        </span>
        <h3>Ercan Erkalkan</h3>
      </div>
    </div>
  );
}

export default SingleBlogPage;
