import React from 'react'
import './Home.css';
import BlogPost from './BlogPost/BlogPost';

function Home() {
    
    return (
        <div className='myHome p-5 container-fluid'>
            <h1 className='text-center mb-5 text-decoration-underline'>Welcome to Travel NeRd Blogs</h1>
            <div className="row g-5">
                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <BlogPost image={"https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"} title={"London"} description={"London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city."}/>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <BlogPost image={"https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?cs=srgb&dl=pexels-oleksandr-canary-islands-3278215.jpg&fm=jpg"} title={"Australia"} description={"Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. Australia is the largest country by area in Oceania and the world's sixth-largest country."}/>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <BlogPost image={"https://i.insider.com/5f5a895be6ff30001d4e82b3?width=750&format=jpeg&auto=webp"} title={"New Zealand"} description={"New Zealand (Māori: Aotearoa [aɔˈtɛaɾɔa]) is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island (Te Ika-a-Māui) and the South Island (Te Waipounamu)—and over 700 smaller islands. It is the sixth-largest island country by area and lies east of Australia across the Tasman Sea and south of the islands of New Caledonia, Fiji, and Tonga. The country's varied topography and sharp mountain peaks, including the Southern Alps, owe much to tectonic uplift and volcanic eruptions. New Zealand's capital city is Wellington, and its most populous city is Auckland."}/>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <BlogPost image={"https://media6.ppl-media.com/mediafiles/blogs/Best_travel_accessories_for_men_6c82dbf030.jpg"} title={"Iceland"} description={"Iceland, a Nordic island nation, is defined by its dramatic landscape with volcanoes, geysers, hot springs and lava fields. Massive glaciers are protected in Vatnajökull and Snæfellsjökull national parks. Most of the population lives in the capital, Reykjavik, which runs on geothermal power and is home to the National and Saga museums, tracing Iceland’s Viking history."}/>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <BlogPost image={"https://hips.hearstapps.com/hmg-prod/images/gettyimages-629376126-1568210521.png?crop=1xw:0.843328335832084xh;center,top"} title={"Norway"} description={"Norway is a Scandinavian country encompassing mountains, glaciers and deep coastal fjords. Oslo, the capital, is a city of green spaces and museums. Preserved 9th-century Viking ships are displayed at Oslo’s Viking Ship Museum. Bergen, with colorful wooden houses, is the starting point for cruises to the dramatic Sognefjord. Norway is also known for fishing, hiking and skiing, notably at Lillehammer’s Olympic resort."}/>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <BlogPost image={"https://images.unsplash.com/photo-1598091383021-15ddea10925d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FzaG1pcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"} title={"India"} description={"India, officially the Republic of India (ISO: Bhārat Gaṇarājya),[22] is a country in South Asia. It is the seventh-largest country by area; the most populous country as of June 2023;[23][24] and from the time of its independence in 1947, the world's most populous democracy.[25][26][27] Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[j] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar, and Indonesia."}/>
                </div>
            </div>
        </div>
    )
}

export default Home