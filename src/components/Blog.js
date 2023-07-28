import React, {  useRef } from 'react';
import { motion, useInView } from 'framer-motion';


const Blog = () => {
 const imageRef = useRef(null)
  // Intersection observer to detect when the images are in view
  const inView = useInView(imageRef,{ once : true
  });

  // Animation variants for sliding in the image
  const imageVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: 'easeIn' } },
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'static', backgroundColor: 'lightcyan' }}>
      <div style={{ maxWidth: '800px' }}>
        <h1>Blog Page</h1>
        <article style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', marginBottom: '50px', backgroundColor: 'white', boxShadow: '5px 5px 20px rgba(0,0,0,0.5)' }}>
          <div style={{ flex: 1 }}>
            <h2>Article 1</h2>
            <p>
              {/* Your article content goes here */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur purus vel turpis viverra
              rhoncus. Fusce sit amet elementum ligula.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus nulla rem eligendi excepturi accusantium, vitae libero perspiciatis aut est inventore eum tempore dolores odit, perferendis deserunt eos laboriosam magnam itaque!
            </p>
          </div>
          <motion.img
            src="https://images.unsplash.com/photo-1541580103-eb54f7a758be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=742&q=80" // Replace with your image URL
            alt="Article 1 Image"
            ref={inView ? null : imageRef}
            initial="hidden"
            animate={ 'visible' }
            variants={imageVariants}
            style={{
              width : 150,
              padding : 5, margin : 2
            }}
          />
        </article>

        <article style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', marginBottom: '50px', backgroundColor: 'white', boxShadow: '5px 5px 20px rgba(0,0,0,0.5)' }}>
          <div style={{ flex: 1 }}>
            <h2>Article 2</h2>
            <p>
              {/* Your article content goes here */}
              Sed aliquet ex nec elit efficitur, id euismod nulla pharetra.
              Maecenas semper, velit ac luctus rhoncus, nunc dolor hendrerit ligula,
              eu convallis neque sapien a example
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci obcaecati quibusdam, ut sequi commodi similique laudantium aliquid quidem. Aut voluptates deleniti obcaecati in reprehenderit. Voluptate omnis placeat nesciunt corporis.
              Sed quasi iste dolor est? Ipsam non ut exercitationem fuga consectetur dolorum voluptas laboriosam, inventore dicta fugit dolore esse, impedit illum excepturi corporis officiis, sed libero labore. Eum, at consequatur.
            </p>
          </div>
          <motion.img
            src="https://images.unsplash.com/photo-1541580103-eb54f7a758be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=742&q=80" // Replace with your image URL
            alt="Article 2 Image"
            ref={inView ? null : imageRef}
            initial="hidden"
            animate={ 'visible' }
            variants={imageVariants}
            style={{
              width : 150,
              padding : 5, margin : 2
            }}
          />
        </article>

        <article style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', marginBottom: '50px', backgroundColor: 'white', boxShadow: '5px 5px 20px rgba(0,0,0,0.5)' }}>
          <div style={{ flex: 1 }}>
            <h2>Article 3</h2>
            <p>
              {/* Your article content goes here */}
              Phasellus non hendrerit sem. Vivamus id purus sit amet sapien ullamcorper
              finibus ut vitae orci. Donec eu lectus ac turpis euismod fringilla.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere iure officiis sunt ab, minus ad ea exercitationem? Voluptatum debitis doloribus a recusandae facere vero totam quod temporibus quis! Nostrum, aliquid odit! Possimus ipsam eum, culpa voluptatibus nostrum consequatur reiciendis totam esse nihil tempore inventore nisi nam illo quia voluptatum molestiae.
            </p>
          </div>
          <motion.img
            src="https://images.unsplash.com/photo-1541580103-eb54f7a758be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=742&q=80" // Replace with your image URL
            alt="Article 3 Image"
            ref={inView ? null : imageRef}
            initial="hidden"
            animate={ 'visible' }
            variants={imageVariants}   style={{
              width : 150,
              padding : 5, margin : 2
            }}
          />
        </article>

        <article style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', marginBottom: '50px', backgroundColor: 'white', boxShadow: '5px 5px 20px rgba(0,0,0,0.5)' }}>
          <div style={{ flex: 1 }}>
            <h2>Article 4</h2>
            <p>
              {/* Your article content goes here */}
              Quisque eu scelerisque tellus, a mattis mi. Ut feugiat quam in lacinia sagittis.
              Etiam volutpat varius hendrerit. Mauris vel nisl arcu. Vestibulum volutpat quam elit,
              eu venenatis libero tempus a.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ducimus rem impedit alias fuga ab, porro exercitationem similique corporis quos distinctio, expedita facere molestias commodi autem eligendi rerum consectetur! Voluptatem.
            Delectus, laboriosam quis! Et nisi ab repellendus voluptates atque aperiam neque numquam omnis quia, debitis ea culpa voluptatibus sunt? Fugiat, deserunt quam? Ratione ad porro sit laborum veritatis odit rem.
            </p>
          </div>
          <motion.img
            src="https://images.unsplash.com/photo-1541580103-eb54f7a758be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=742&q=80" // Replace with your image URL
            alt="Article 4 Image"
            ref={imageRef}
            initial="hidden"
            animate={ 'visible' }
            variants={imageVariants}   style={{
              width : 150,
              padding : 5, margin : 2
            }}
          />
        </article>

{/* Add more articles and images as needed */}
<article style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', marginBottom: '50px', backgroundColor: 'white', boxShadow: '5px 5px 20px rgba(0,0,0,0.5)' }}>
  <div style={{ flex: 1 }}>
    <h2>Article 5</h2>
    <p>
      {/* Your article content goes here */}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur purus vel turpis viverra
      rhoncus. Fusce sit amet elementum ligula.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus nulla rem eligendi excepturi accusantium, vitae libero perspiciatis aut est inventore eum tempore dolores odit, perferendis deserunt eos laboriosam magnam itaque!
    </p>
  </div>
  <motion.img
    src="https://images.unsplash.com/photo-1541580103-eb54f7a758be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=742&q=80" // Replace with your image URL
    alt="Article 5 Image"
    ref={imageRef}
    initial="hidden"
    animate={ 'visible' }
    variants={imageVariants}   style={{
      width : 150,
      padding : 5, margin : 2
    }}
  />
</article>

<article style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', marginBottom: '50px', backgroundColor: 'white', boxShadow: '5px 5px 20px rgba(0,0,0,0.5)' }}>
  <div style={{ flex: 1 }}>
    <h2>Article 6</h2>
    <p>
      {/* Your article content goes here */}
      Sed aliquet ex nec elit efficitur, id euismod nulla pharetra.
      Maecenas semper, velit ac luctus rhoncus, nunc dolor hendrerit ligula,
      eu convallis neque sapien a example
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci obcaecati quibusdam, ut sequi commodi similique laudantium aliquid quidem. Aut voluptates deleniti obcaecati in reprehenderit. Voluptate omnis placeat nesciunt corporis.
      Sed quasi iste dolor est? Ipsam non ut exercitationem fuga consectetur dolorum voluptas laboriosam, inventore dicta fugit dolore esse, impedit illum excepturi corporis officiis, sed libero labore. Eum, at consequatur.
    </p>
  </div>
  <motion.img
    src="https://images.unsplash.com/photo-1541580103-eb54f7a758be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=742&q=80" // Replace with your image URL
    alt="Article 6 Image"
    ref={imageRef}
    initial="hidden"
    animate={ 'visible' }
    variants={imageVariants}   style={{
      width : 150,
      padding : 5, margin : 2
    }}
  />
</article>
</div>
</div>
);
};

export default Blog;
