import React from 'react'
import FadeIn from 'react-fade-in';

function Home() {
  return (
    <FadeIn>
      <div className="Home w-full h-fit flex overflow flex-col">
        <div className="home-header w-2/4 h-28 bg-white rounded-md relative center-rel flex justify-center text-6xl font-mono">
          <h1 className='mt-5'>Home</h1>
        </div>
        <div className="into-paragraph relative center-rel text-xl w-5/6">
        <FadeIn>
          <p>
          <b>Have you ever gotten a plant as a gift or purchased it yourself to then find it dead in a few weeks?</b> <br/>
          <br/> That was Ana, everyone that knows her well, knows that she is an orchid fan. She was told that orchids are "evolutionarily superior and extremely resilient plants.”Well, let’s say they weren’t so resilient under her care.  She, like many of us, has been excited to care for her favorite plants. Not only did she struggle with the watering schedule she had to figure out how to get the orchid to bloom again. She was determined to find a way to fix that. Ana was very passionate about her plant care and knew that if she wanted to meet all the plant’s needs, she needed to get to know them. She started with the basics by asking the most critical questions.<br/> <br/>

          <em>What are your watering needs? What are your sunlight needs? What is the frequency of all of these needs?</em> Now that’s a lot to remember for every single plant, right? So writing this down on the calendar was key. So Ana and Maxwell came up with an idea for someone that wants to know about plant care. Maybe your plants still die, totally not unreasonable to want to have plants in a virtual space, so that you don’t feel like a plant killer. So here you can enjoy caring for your plants live or virtual ❤️.

            <img className="w-3/5 relative center-rel my-6" src="https://www.thespruce.com/thmb/0tbJJsyVwn6Q7jJ2nY6Dmye9opc=/3300x2200/filters:fill(auto,1)/most-popular-houseplants-4766580-2-71981826fb0a461786109b3e4f5aa09d.jpg" alt="shelf full of plants" /> <br/>
          </p>

          <p className="mb-20"> Please let us know if you would like more information about our available plants. Any feedback you give us will go directly to our creators and they will make sure to add changes and optimize your user experience. Enjoy our virtual garden and tell your plant-loving friends that we exist!
          </p>
          </FadeIn>
        </div>
      </div>
    </FadeIn>
  )
}

export default Home