import React, { useContext }  from 'react';
import { useNavigate } from 'react-router-dom';
import HeroImage from "../../img/hero-img.png"
import { AllContext } from '../App/App';
import "./Home.css"

const Home = () => {


    const navigate = useNavigate();

    const {reviews} = useContext(AllContext);

    let slicedReviews = reviews.slice(0, 3);

    const homeReview = slicedReviews.map(review => {
        return(
            <div className="col-md-4 col-12 my-3 my-lg-0 ">
                <div className="card home-review-container  h-100">
                    <div className="card-body">
                        <cite className="card-text home-review">"{review.review}"</cite>
                        <h6 className="card-title home-review-name mt-4">{review.name},</h6>
                        <p className="card-text home-review-date">{review.date}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="container row my-5 mx-auto d-flex flex-lg-row flex-column-reverse">
                <div className="col-lg-8 col-12 d-flex flex-lg-row flex-column-reverse">
                    <div className="d-flex  align-items-center h-100">
                        <div className="w-75 hero-container">
                            <h1 className=" hero-text">
                            Order food from the best restaurant near you.
                            </h1>

                            <p className="mt-4 hero-detail">
                                Order food from your favourite restaurants, delivered straight to your front door. Browse restaurants near you and pick from their menus. Get a better idea of what's on offer before you order by checking out full-screen photos of food. Wherever you are in the world, there's a restaurant for you.  
                            </p>

                            <div>
                                <div>
                                    <button onClick={()=> navigate("/about")} className="btn hero-btn mt-2">
                                    Explore
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-4 col-12">
                    <div className="d-flex  justify-content-center align-items-center ">
                        <div className="h-100">
                            <img className="hero-img" src={HeroImage} alt="img" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Review Section     */}

            <div>
                <h2 className="text-center review-heading-text">What Our Happy Customers Say</h2>
                <div className="row mx-auto my-5 container">
                    {homeReview}
                </div>
                 <div className="mb-5 ">
                     <div className="d-flex justify-content-center" >
                        <button onClick={()=> navigate("/reviews")} className="btn hero-btn mt-2 d-block">
                            See All Reviews
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;