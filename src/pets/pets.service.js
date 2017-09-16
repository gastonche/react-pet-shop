// pet service goes here
import $ from 'jquery';

class petService{
    host = "http://192.168.137.1:8080/";

    getHomePets(){
        return new Promise((resolve, reject)=>{
            $.getJSON(this.host + "/api/products", {},
                (res) => {
                    res.content = res.content.map(data => {
                        return {
                            ...data,
                            image: data.imagePath || "https://usercontent2.hubstatic.com/6561263_f520.jpg",
                            price: data.unitPrice
                        }
                    });
                    resolve({
                        featured: res.content.splice(0, 4),
                        popular: res.content.splice(0, 4)
                    })
                },
                data => reject({
                    error: "Could not load",
                    data: data
                })
            )
        });
    }

    getPets({take=20, page=1} = {}){
        let start = take*(page-1);
        return new Promise((resolve, reject) => {
            $.getJSON( this.host + "/api/products", {},
                (res) => {
                    res.content = res.content.map(data => {
                        return {
                            ...data,
                            image: data.imagePath || "https://usercontent2.hubstatic.com/6561263_f520.jpg",
                            price: data.unitPrice
                        }
                    });
                    resolve({
                        data: res.content.splice(start, take)
                    })
                },
                data => reject({
                    error: "Could not load",
                    data: data
                })
            )
        });
    }
    getThisPet(id=0){
        return new Promise((resolve, reject) => {
            $.getJSON(this.host + "/api/products/", {},
                (res) => {
                    res.content = res.content.map(data => {
                        return {
                            ...data,
                            image: data.imagePath || "https://usercontent2.hubstatic.com/6561263_f520.jpg",
                            price: data.unitPrice
                        }
                    });
                    const pet = res.content.reduce((cache, item) => {
                        if(item.id==id) 
                            return item;
                        else
                            return cache;
                    }, {});
                    const related = res.content.splice(res.content.indexOf(pet), 3);
                    resolve({
                        pet: pet,
                        related: related
                    })
                },
                data => reject({
                    error: "Could not load",
                    data: data
                })
            )
        })
    }
    getEditPet(id=0){
        return new Promise((resolve, reject) => {
            $.getJSON(this.host+"/api/products/"+id, 
                (res) => {
                    resolve({
                        pet: {...res, price: res.unitPrice, image: res.imagePath || "https://usercontent2.hubstatic.com/6561263_f520.jpg"}
                    })
                },
                (err) => reject({
                    status: "error",
                    error: err
                })
            );    
        });
        
    }

    deletePet(id){
        return new Promise((resolve, reject) => {
            $.post(this.host+"/api/products/"+id+"/delete",
                () => {
                    resolve({})
                }, 
                () => {
                    reject({})
                }
            )
        });
    }
}

export default petService;