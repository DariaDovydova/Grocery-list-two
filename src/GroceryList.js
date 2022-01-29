import { Component } from 'react';
import icon from './checked.png';




export class GroceryList extends Component {

    state = {
        userInput: '',
        groceryList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if (input === '') {
            alert('Please, enter an item');
        } else {
        let listArray = this.state.groceryList;
        listArray.push(input);
        this.setState({groceryList: listArray, userInput: ''})
        console.log(listArray)
        }
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray});
    }

    crossedWord(e) {
        const list = e.target;
        list.classList.toggle('crossed')
    }

    onFormSubmit(e) {
        e.preventDefault();
    }



    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className='container'>
                        <input type='text' placeholder='What do you want to buy?'
                        onChange={(e) => {this.onChangeEvent(e.target.value)} }
                        value={ this.state.userInput }/>
                    </div>
                    <div className='container'>
                        <button onClick={ () => this.addItem(this.state.userInput)} className='btn btn-add'>+</button>
                        <button onClick={ () => this.deleteItem()} className='btn btn-delete'>-</button>
                    </div>
                    <ul>
                        {this.state.groceryList.map((item, index) => (
                            <li onClick={ this.crossedWord} key={ index }><img className='icon' src={icon} alt='check'/>{ item }</li>
                        ))}
                    </ul>
                    </form>
            </div>
        )
    }
}