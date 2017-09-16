
class cartService{
    constructor(){
        this.initCart();
    }

    initCart(){
        let cart = sessionStorage.getItem("simple-cart") || "jj";
        try{
            cart = JSON.parse(cart);
            this.cart = cart;
        }catch(err){
            cart ={
                  items: [],
                  total: 0
                };
            sessionStorage.setItem('simple-cart', JSON.stringify(cart));
            this.cart = cart;
        }
    }

    clearCart(){
        let cart = this.cart;
        cart.total = 0;
        cart.items = [];
        this.cart = cart;
        sessionStorage.setItem("simple-cart", JSON.stringify(cart));
        return cart;
    }
    getCart(){
        return this.cart;
    }

    addToCart(item){
        let cart = this.cart;
        let found = false;
        cart.items.map((i, d) => {
          if(i.id == item.id){
            found = true;
            cart.total += parseFloat(item.price);
            i.quantity++;
            return i;
          }
          return i;
        });
        if(!found){
          cart.items.push({...item, quantity: 1});
          cart.total+=parseFloat(item.price);
        }
        this.cart = cart;
        sessionStorage.setItem("simple-cart", JSON.stringify(cart));
        return cart;
    }
    removeItem(index){
        let item = this.cart.items.splice(index, 1);
        this.cart.total = parseFloat(this.cart.total) - parseFloat(item.price*item.quantity);
        sessionStorage.setItem("simple-cart", JSON.stringify(this.cart));
        return this.cart;
    }
}

export default cartService;