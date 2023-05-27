"use client"
import { useState } from "react";
import ProductCard from "@/components/productCard";
import ProductAddModal from "@/components/productAddModal";
import Navbar from '../components/navbar/index'

const Home = () => {
	
	const [isModalShown, setIsModalShown] = useState(false);
	
	return (
		
		<div className="relative h-screen">
		    <Navbar />
			<ProductCard name="" price={0} image="" isModalShown={isModalShown} setIsModalShown={setIsModalShown}/>
			{isModalShown ? (
				<ProductAddModal setIsModalShown={setIsModalShown} price={0} />
			) : null}		
	</div>
	);
};

export default Home;
