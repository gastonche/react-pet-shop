import React, {Component} from "react";
import petService from "../pets/pets.service";
import $ from "jquery";

export default class adminItems extends Component {
    constructor(){
        super();
        this.petService = new petService();
        this.state = {
            pets: []
        }
        this.getPets();
    }
    
    getPets(){
        this.petService.getPets({take: 50}).then(pets => {
            this.setState({
                pets: pets.data
            })
        }).catch(err => {
            this.setState({
                pets: [], 
            },() => {
                console.log(this.state, "state")
            })
        });
    }

    deletePet(id){
        if(window.confirm("Conform?"))
            this.petService.deletePet(id).then(() => {
                $("tr.pet-"+id).fadeOut('fast');
            }).catch(() => {
                $("tr.pet-"+id).fadeOut('fast');
            });
    }

    render(){
        return (
            <div>
                <div className="grow">
                    <div className="container">
                        <h2>Products</h2>
                    </div>
                </div>
                <div className="pro-du">
                    <div className="container">
                        <div className="col-md-9 product1">
                            <div className=" bottom-product">
                                <table className="table table-responsive">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Image</th>
                                            <th>Cost</th>
                                            <th>description</th>
                                            <th>actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.pets.map((item, index) => {
                                        return (
                                            <tr className={"pet-"+item.id} key={"pet-"+index}>
                                                <td>{index+1}</td>
                                                <td><a href={"/single/"+item.id}> {item.name} </a></td>
                                                <td><img width="100px" src={item.image} className="img-responsive" /></td>
                                                <td>${item.price}</td>
                                                <td>{item.description}</td>
                                                <td>
                                                    <div className="btn-group">
                                                        <a href={"/products/"+item.id+"/edit"} className="btn btn-primary">Edit</a>
                                                        <button className="btn btn-danger" onClick={() => this.deletePet(item.id)} >Delete</button>
                                                    </div>
                                                </td>
                                            </tr>);
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-3 prod-rgt">
                            <div className=" pro-tp">
                                <div className="pl-lft">
                                    <a href="single.html">
                                        <img className="img-responsive" src="images/l2.jpg" alt=""/>
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
                                        <img className="img-responsive" src="images/l3.jpg" alt=""/>
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
                                        <img className="img-responsive" src="images/l1.jpg" alt=""/>
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
                                <img className="img-responsive" src="images/pi.jpg" alt="" />
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