import React, {Component} from "react";
import petService from '../pets/pets.service';

export default class editPet extends Component{
    constructor(props){
        super(props);
        this.petService = new petService();
        this.state = {
            pet: {},
        };
        this.getPet(this.props.match.params.id);
        this.addToCart = this.props.addToCart;
    }

    getPet(id){
        this.petService.getEditPet(id).then(data => {
            this.setState({
                pet: data.pet
            }, () => {
                console.log(this.state);
            });
        })
    }

    render(){
        return (
            <div>
                <div className="grow">
                    <div className="container">
                        <h2>Edit {this.state.pet.name || "Product"}</h2>
                    </div>
                </div>
                <div className="pro-du">
                    <div className="container">
                        <div className="col-md-9 product1">
                            <div className=" bottom-product">
                                <form>
                                    <div className="row">
                                        <div className="col-md-12 row">
                                            <label className="col-md-4">Name</label>
                                            <div className="col-md-8">
                                                <input className="form-control"  type="text" value={this.state.pet.name} name="name" />
                                            </div>
                                        </div><br />&nbsp;
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 row">
                                            <label className="col-md-4">Unit Price</label>
                                            <div className="col-md-8">
                                                <input className="form-control" type="number" name="price" value={this.state.pet.price} />
                                            </div>
                                        </div><br/>&nbsp;
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 row">
                                            <label className="col-md-4">Description</label>
                                            <div className="col-md-8">
                                                <textarea className="form-control" name="description" rows="5" value={this.state.pet.description} ></textarea>
                                            </div>
                                        </div><br />&nbsp;
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 row">
                                            <label className="col-md-4">Image</label>
                                            <div className="col-md-8">
                                                <br />
                                                <input type="text" className="form-control" name="description" rows="5" value={this.state.pet.image} />
                                            </div>
                                        </div><br />&nbsp;
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 row">
                                            <label className="col-md-4">&nbsp;</label>
                                            <div className="col-md-8">
                                                <br />
                                                <button className="btn btn-block btn-primary">Save</button>
                                            </div>
                                        </div><br />&nbsp;
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-3 prod-rgt">
                            <div className=" pro-tp">
                                <div className="pl-lft">
                                    <a href="single.html">
                                        <img className="img-responsive" src="/images/l2.jpg" alt=""/>
                                    </a>
                                </div>
                                <div className="pl-rgt">
                                    <h6><a href="single.html">TRIBECA LIVING</a></h6>
                                    <p><a href="single.html">450$</a></p>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className=" pro-tp">
                                <div className="pl-lft">
                                    <a href="single.html">
                                        <img className="img-responsive" src="/images/l3.jpg" alt=""/>
                                    </a>
                                </div>
                                <div className="pl-rgt">
                                    <h6><a href="single.html">TRIBECA LIVING</a></h6>
                                    <p><a href="single.html">450$</a></p>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className=" pro-tp">
                                <div className="pl-lft">
                                    <a href="single.html">
                                        <img className="img-responsive" src="/images/l1.jpg" alt=""/>
                                    </a>
                                </div>
                                <div className="pl-rgt">
                                    <h6><a href="single.html">TRIBECA LIVING</a></h6>
                                    <p><a href="single.html">450$</a></p>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="pr-btm">
                            <h4>What Our Client Say</h4>
                                <img className="img-responsive" src="/images/pi.jpg" alt="" />
                                <h6>John</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            </div>
                        </div>
                            <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        )
    }
}