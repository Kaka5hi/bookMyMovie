import { useEffect, useState } from "react";
import Loader from '../components/loader/Loader'
import ShowCard from "../components/show-card/ShowCard";


const Home = () => {

	const [fetchedData, setFetchedData] = useState([])
	const [showLoader, setShowLoader] = useState(true)

	const getData = async () => {
		const response = await fetch(`https://api.tvmaze.com/search/shows?q=all`)
		const data = await response.json()
		setFetchedData(data);
		setShowLoader(false)
	}
	
	useEffect(() => {
		getData()
	}, [])
	

	if(showLoader) {
		return (
			<>
				<Loader />
			</>
		)
	} else {
		return (
			<div className="outer-container">
				<main>
					<h1>Movies in theater</h1>
					<div className="inner-container">
						{
							fetchedData?.map(item => {
								const {show} = item
								return(
                                        <ShowCard id={show?.id} key={show?.id} show={show} />
 
								)
							})
						}
					</div>
				</main>
			</div>
		)
	}
}

export default Home