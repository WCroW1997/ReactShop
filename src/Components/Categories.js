import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state={
            categories: [
                {
                    key: 'all',
                    name: 'Все',
                },
                {
                    key: 'armchair',
                    name: 'Кресла',
                },
                {
                    key: 'chair',
                    name: 'Стуло',
                },
                {
                    key: 'sofa',
                    name: 'Диван',
                },
                {
                    key: 'desk',
                    name: 'Стол',
                },
            ]
        }
    }
  
    render() {
    return (
      <div className='categories'>
            {this.state.categories.map(el => (
                <div className='categories__block' onClick={() => this.props.onCategory(el.key)} key={el.key}>{el.name}</div>
            ))}
      </div>
    )
  }
}

export default Categories