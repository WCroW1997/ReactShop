import React from "react";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Items from "./Components/Items";
import ShowFullItems from "./Components/ShowFullItems";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      curentItemes: [],
      items: [
        {
          id: 1,
          title: 'Кресло',
          img: 'donald-tong.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quam!',
          category: 'armchair',
          price: '39.99',

        },
        {
          id: 2,
          title: 'Стулья',
          img: 'eric-montanah.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quam!',
          category: 'chair',
          price: '25.5',

        },
        {
          id: 3,
          title: 'Диван коричневый',
          img: 'martin-pechy.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quam!',
          category: 'sofa',
          price: '120',

        },
        {
          id: 4,
          title: 'Диван черный',
          img: 'pixabay.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quam!',
          category: 'sofa',
          price: '169.99',

        },
        {
          id: 5,
          title: 'Стол обеденный',
          img: 'pixabay-2.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quam!',
          category: 'desk',
          price: '120',

        },
      ],
      showFullItem: false,
      fullItem: {},
    }
    this.state.curentItemes = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItems = this.onShowItems.bind(this)
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }


  chooseCategory(category) {
    if(category === 'all'){
      this.setState({curentItemes: this.state.items})
      return
    }

    this.setState({
      curentItemes: this.state.items.filter(el => el.category === category)
    })
  }

  onShowItems(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  render() {
    return (
      <div className="app__wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories onCategory={this.chooseCategory} />
        <Items items={this.state.curentItemes} onAdd={this.addToOrder} showItems={this.onShowItems}/>
        {this.state.showFullItem   &&  <ShowFullItems showItems={this.onShowItems} onAdd={this.addToOrder} item={this.state.fullItem}/>}
        <Footer />
      </div>
    );
  }
}

export default App;
