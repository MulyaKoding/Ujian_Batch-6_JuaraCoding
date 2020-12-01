import React, {Component} from 'react'
import CardBarang from './barang/CardBarang';
import CardBeli from './beli/CardBeli';
import Footer from './footer/Footer';
import Header from './header/Header';
import Jombotron from './jombotron/Jombotron';
import Keranjang from './keranjang/Keranjang';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productBarang:[],
            productBeli:[]
        }
    }
    componentDidMount() {
        fetch('https://fakestoreapi.com/products?limit=20')
        .then(response => response.json())
        .then((listProduct) => this.setState({productBarang : listProduct}))
    }
    btnBeli= (id,image,title,description,category,price) => {
        //console.log('gambar :' ,image, 'title :',title, 'deskripsi :',description, 'category :', category, 'price :', price)
        this.setState({
            productBeli:[...this.state.productBeli,{
                id:id,
                image:image,
                title:title,
                description:description,
                category:category,
                price:price
            }]
        })
    }
    totalItem() {
        let totolItem = this.state.productBeli.length;
        return totolItem
    }
    totalHarga() {
        let totalPrice = this.state.productBeli.reduce((total_price,product_beli) => {
            return total_price + product_beli.price
        },0)

        return totalPrice
    }
    deleteProductBeli(id){
        console.log(id);
        let newProductBeli = this.state.productBeli
        .filter(listProductBeli => listProductBeli.id !== id)
        .map(filterListProductBeli => {
            return filterListProductBeli
        })
        this.setState({
            productBeli:newProductBeli
        })
    }
    render() {
        //console.log(this.state.productBarang)
        //console.log('product beli :',this.state.productBeli)
        //console.log(this.totalItem())
        //console.log(this.totalHarga())
        //console.log(this.deleteProductBeli())
        return(
            <div>
                <Header/>
                <Jombotron/>
                <CardBarang productBarang={this.state.productBarang} btnBeli={this.btnBeli}/>
                <Keranjang totalItem={this.totalItem()} totalPrice={this.totalHarga()}/>
                <CardBeli productBeli={this.state.productBeli} deleteProductBeli={this.deleteProductBeli.bind(this)} />
                <Footer/>
            </div>
        )
    }
}
export default HomePage;