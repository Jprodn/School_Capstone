import React from 'react'
// import useFetch from '../../useFetch'

function Home() {
    // const { data: landmarks } = useFetch('http://localhost:8001/landmarks')

    return(
        <div className='home-map'>
            <p>This message came from Home.js {'>'} return {'>'} div</p>
            <img src="../../public/Map.png" alt=""></img>
        </div>
    )
}

export default Home;