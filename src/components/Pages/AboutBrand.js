import React, {useEffect} from 'react'

function AboutBrand() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)
    const brand = urlParams.get("brand")

    let brandSummary = ""
    let slogan =""
    if(brand === "Dentsu") {
        brandSummary="We are dentsu. In good times and bad, we partner with brands to achieve meaningful progress as a force for growth and good. Our teams of optimists, entrepreneurs and first-movers coalesce around the needs of our clients, unlocking unique possibilities for sustainable value and lasting change. We know people better than anyone else. With consumer intelligence at the heart of everything we do, we help brands win, keep and grow their best customers across all elements of the marketing mix. Through radical collaboration, we make insight a reality that moves businesses forward. "
    } else if (brand === "Amplifi") {
        brandSummary="AmpliFi is more than a common home router: it’s the ultimate Wi-Fi system. With turbocharged 802.11ac Wi-Fi, AmpliFi utilizes multiple self-configuring radios and advanced antenna technology to bring ubiquitous Wi-Fi coverage to any home."
    }else if (brand === "IProspect") {
        slogan="ACCELERATING GROWTH AT THE NEW INTERSECTION OF MEDIA"
        brandSummary="Our unique understanding of the intersection of culture, content, data, and technology powers how we build brands out of every moment of connection. For today, and for tomorrow."
    }else if (brand === "Carat") {
        slogan="FIND THE WISDOM IN THE CROWD, NOT OF THE CROWD."
        brandSummary="We were founded over 50 years ago and were then the world's first media agency. Today, we are over 12,000 consultants represented in more than 100 countries, with a common passion to drive growth for our customers through an in-depth understanding of the consumer journey - and with a humility for responsibility that it also entails. We are extremely proud of our work we do together with our customers and joint partners"
    }
    

    else {
        brandSummary = "We are curently working on the information about this brand!"
    }

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
    useEffect(()=> {
        topFunction()
    },[])
    return (
        <div className="aboutBrandContainer">

            <h2>{brand}</h2>
            <h3>{slogan}</h3>
            <p>{brandSummary}</p>
        </div>
    )
}

export default AboutBrand
