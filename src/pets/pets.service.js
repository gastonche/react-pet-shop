// pet service goes here
import $ from 'jquery';

class petService{
    host = "http://192.168.137.1:8080/";

    getHomePets(){
        return new Promise((resolve, reject)=>{
            $.getJSON(this.host + "/api/products", {},
                (res) => {
                    console.log(res);
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
                    resolve({
                        data: res.data.splice(start, take)
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
            $.getJSON(this.host + "/api/products", {},
                (res) => {
                    const pet = res.data.reduce((cache, item) => {
                        if(item.id==id) 
                            return item;
                        else
                            return cache;
                    }, {});
                    const related = res.data.splice(res.data.indexOf(pet), 3);
                    console.log(pet);
                    console.log(related);
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
}

export default petService;