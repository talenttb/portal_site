// import React from 'react';

// import Header from '../partials/Header';
// import HeroHome from '../partials/HeroHome';
// import FeaturesHome from '../partials/Features';
// import FeaturesBlocks from '../partials/FeaturesBlocks';
// import Testimonials from '../partials/Testimonials';
// import Newsletter from '../partials/Newsletter';
// import Footer from '../partials/Footer';

// function Home() {
//   return (
//     <div className="flex flex-col min-h-screen overflow-hidden">
//       {/*  Site header */}
//       <Header />

//       {/*  Page content */}
//       <main className="flex-grow">
//         {/*  Page sections */}
//         <HeroHome />
//         <FeaturesHome />
//         <FeaturesBlocks />
//         <Testimonials />
//         <Newsletter />
//       </main>

//       {/*  Site footer */}
//       <Footer />
//     </div>
//   );
// }

// export default Home;

// export default Home()  {
//     return (<div>HOME</div>);
// }

import React from 'react';

// import Header from '../partials/Header';
// import Footer from '../partials/Footer';
import { Hero1, Hero2, Section3 } from '../components/Home';

export default function Home() {
  return (
    <main className="flex-grow">
      {/*  Page sections */}
      <Hero1 />
      <Hero2 />
      <Section3 />
      {/* <HeroHome />
          <FeaturesHome />
          <FeaturesBlocks />
          <Testimonials />
          <Newsletter /> */}
    </main>
  );
}
