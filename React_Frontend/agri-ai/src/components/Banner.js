import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import "../styles/Banner.css"

function Banner() {

    let history = useHistory()

    const cropRedirect = () => {
        history.push("/crop")
    }

    const fertRedirect = () => {
        history.push("/fertilizer")
    }
    
    const rabiRedirect = () => {
        history.push("/profit")
    }

    const kharifRedirect = () => {
        history.push("/revenue")
    }
    return (
        <div className="banner">
            <div className="banner__title">
                <div className="banner__title_head">
                    Krishi<font>PREDICT</font>
                </div>
                <div className="banner__title_tail">
                    <div className="typing">A Machine Learning based Web Application for Crop and Fertilizer Recommendation and Revenue Estimation(Web based)</div>
                   
                </div>
            </div>
        </div>
    )
}

export default Banner





/*
<div className="banner__buttons">
                       <Button onClick={cropRedirect} className="banner__button cropButton"> Crop Recommender </Button>
                       <Button onClick={fertRedirect} className="banner__button fertilizerButton"> Fertilizer Recommender </Button>
                       <Button onClick={rabiRedirect} className="banner__button fertilizerButton"> Revenue Estimator (Rabi) </Button>
                       <Button onClick={kharifRedirect} className="banner__button fertilizerButton"> Revenue Estimator (Kharif) </Button>
                    </div>  

<div className="banner__buttons">
                       <Button onClick={cropRedirect} className="banner__button cropButton">Crop Recommender</Button>
                       <Button onClick={fertRedirect} className="banner__button fertilizerButton">Fertilizer Recommender</Button>
                    </div> */
                    /*  <div className="banner__socialMedia">
                        <a className="social_icon_linkedin" href="https://linkedin.com/in/venugopalkadamba" target="_blank"><span ><i className="fa fa-linkedin" aria-hidden="true"></i></span></a>
                        <a className="social_icon_github" href="https://github.com/venugopalkadamba" target="_blank"><span><i className="fa fa-github" aria-hidden="true"></i></span></a>
                    </div>
*/