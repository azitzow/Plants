import React from 'react'
import FadeIn from 'react-fade-in';

function Home() {
  return (
    <FadeIn>
      <div className="Home w-full h-fit flex overflow flex-col">
        <div className="home-header w-2/4 h-28 bg-white rounded-md relative center-rel flex justify-center text-6xl font-mono">
          <h1 className='mt-5'>Home</h1>
        </div>
        <div className="into-paragraph relative center-rel text-2xl w-5/6">
        <FadeIn>
          <p>
            Have you ever gotten a plant as a gift or purchased it yourself to then find it dead in a few weeks? That was Ana, everyone that knows her well, knows that she is an orchid fan. She was told that orchids are evolutionarily superior and extremely resilient plants. Well, let’s say they weren’t so resilient under her care. Ana had a tough time getting the orchids to bloom again. She loved them so much and was really sad when her orchids would drop all the flowers and never bloom again. She was determined to find a way to fix that. So the research begins first, she looked at orchids’ soil, water, sun, and fertilization needs. She had a lot of work cut out for her, there was a ton of documentation and videos online. She decided to pick the most liked and view orchid care-related videos. It seemed that there were a lot of things to be considered when it comes to orchid care. 
            <br/> Ana now finds joy in taking care of her orchids and their beauty.
          </p> 
          </FadeIn>
        </div>
      </div>
    </FadeIn>
  )
}

export default Home

// <br/>
// <img classname="orchid" src="https://justfunfacts.com/wp-content/uploads/2016/05/orchids.jpg" alt="orchids"/>
// <br/>