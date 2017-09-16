import React, { Component } from 'react';
import petService from '../pets/pets.service';
import './home.css';

class Home extends Component{
    constructor(){
        super();
        this.petService = new petService();
        this.state = {
            featured: [],
            popular: []
        }
        this.getPets()
    }

    getPets(){
        this.petService.getHomePets().then((data) => {
            console.log(this)
            this.setState(data, () => {
                console.log(this.state, "data")
            });
            console.log(this)
        }).catch(err => {
            console.log(err);
        });
    }

    renderFeatured(featured){
        if(featured.length>0){
            return (
                <div className="content-top-bottom">
                    <h2>Featured PRODUCTS</h2>
                    <div className="col-md-6 men" key={"feat-"+featured[0].id}>
                        <a href={"/single/"+featured[0].id} className="b-link-stripe b-animate-go  thickbox">
                            <img className="img-responsive featured-img big" src={featured[0].image} alt={featured[0].name} />
                            <div className="b-wrapper">
                                <h3 className="b-animate b-from-top top-in   b-delay03 ">
                                    <span>{featured[0].name}</span>	
                                </h3>
                            </div>
                        </a>	
                    </div>
                    <div className="col-md-6">
                        <div className="col-md1 " key={"feat-"+featured[1].id}>
                            <a href={"/single/"+featured[1].id} className="b-link-stripe b-animate-go  thickbox">
                                <img className="img-responsive featured-img small" src={featured[1].image} alt={featured[1].name}/>
                                <div className="b-wrapper">
                                    <h3 className="b-animate b-from-top top-in   b-delay03 ">
                                        <span>{featured[1].name}</span>	
                                    </h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-md2">
                            <div className="col-md-6 men1" key={"feat-"+featured[2].id}>
                                <a href={"/single/"+featured[2].id} className="b-link-stripe b-animate-go  thickbox">
                                    <img className="img-responsive featured-img small" src={featured[2].image} alt={featured[2].name} />
                                    <div className="b-wrapper">
                                        <h3 className="b-animate b-from-top top-in   b-delay03 ">
                                            <span>{featured[2].name}</span>	
                                        </h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 men2" key={"feat-"+featured[3].id}>
                                <a href={"/single/"+featured[3].id} className="b-link-stripe b-animate-go  thickbox">
                                    <img className="img-responsive featured-img small" src={featured[3].image} alt={featured[3].name} />
                                    <div className="b-wrapper">
                                        <h3 className="b-animate b-from-top top-in   b-delay03 ">
                                            <span>{featured[3].name}</span>	
                                        </h3>
                                    </div>
                                </a>
                                
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                    
                    <div className="clearfix"> </div>
                </div>
            )
        }else{
            return "";
        }
    }
    renderPopular(popular){
        if(popular.length>0){
            return (
                <div className="content-top">
                    <h1>NEW PRODUCTS</h1>
                    <div className="grid-in">
                        {
                            popular.map((item, index) => {
                                return (
                                    <div key={"pop-"+index} className="col-md-3 grid-top simpleclassName=_shelfItem">
                                        <a href={"/single/"+item.id} className="b-link-stripe b-animate-go  thickbox">
                                            <img className="img-responsive thumb" src={item.image} alt="" />
                                            <div className="b-wrapper">
                                                <h3 className="b-animate b-from-left    b-delay03 ">
                                                    <span>{item.name}</span>
                                                </h3>
                                            </div>
                                        </a>
                                        <p><a href={"/single/"+item.id}>{item.name}</a></p>
                                        <a href={"/single/"+item.id} className="item_add"><p className="number item_price"><i> </i>${item.price}</p></a>
                                    </div>
                                )
                            })
                        }
                        <div className="clearfix"> </div>
                    </div>
                </div>
            )
        }else{
            return "";
        }
    }

    render(){
        return (
            <div>
                <div className="banner">
                    <div className="container">
                    <div  id="top" className="callbacks_container">
                        <ul className="rslides" id="slider">
                            <li>
                            
                            <div className="banner-text">
                                <h3>Healthy Pets </h3>
                            <p>We offer you very healthy pets for your</p>
                            
                            </div>
                        
                        </li>
                        <li>
                            
                            <div className="banner-text">
                                <h3>There are many  </h3>
                            <p>Popular belief Contrary to , Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                                        
                
                            </div>
                            
                        </li>
                        <li>
                            <div className="banner-text">
                                <h3>Sed ut perspiciatis</h3>
                            <p>Lorem Ipsum is not simply random text. Contrary to popular belief, It has roots in a piece of classical Latin literature from 45 BC.</p>
                                
                
                            </div>
                            
                        </li>
                        </ul>
                    </div>
                
                </div>
            </div>
            <div className="container">
                <div className="cont">
                    <div className="content">
                        {this.renderFeatured(this.state.featured)}
                        {this.renderPopular(this.state.popular)}
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Home;