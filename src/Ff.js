import React from 'react';
import './index.css';

class Ff extends React.Component {
    setCurrentToDoItem = (toDoItem) => {
        console.log("toDoItem", toDoItem);

        this.setState({
            currentToDoItem: toDoItem
        });
    };

    saveToDoListItem = (toDoItem) => {
        this.setState({
            toDoList: [...this.state.toDoList,
                toDoItem]


        });

    };

    constructor(props) {
        super(props);

        this.state = {
            currentToDoItem: null,
            toDoList: [],
            strikeThrough: []
        };
    }
    render() {
        return (

            <div>
                <h1>To Do List</h1>
                <label>To Do Item: </label>
                <input
                    onChange={(event) => this.setCurrentToDoItem(event.target.value)}>
                </input>
                <button onClick={() => this.saveToDoListItem(this.state.currentToDoItem)}>
                    <p>Add Item</p>
                </button>
                <p>{this.state.currentToDoItem}</p>


                <div>
                    <p>To Do Items</p>
                    {
                        this.state.toDoList.map((item, index) => <p key={index}>{item} </p>)
                    }
                </div>
            </div>

        );
    }
}
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentToDoItem: null,
            toDoList: [],
            strikeThrough: []
        };
    }
    setCurrentToDoItem = toDoItem => {
        this.setState({
            currentToDoItem: toDoItem
        });
    };

    saveToDoListItem = toDoItem => {
        this.setState({
            toDoList: [...this.state.toDoList, toDoItem]
        });
    };

    crossLine = event => {
        const element = event.target;
        element.classList.toggle("crossed-line");
    };

    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <label>To Do Item: </label>
                <input
                    onChange={event =>
                        this.setCurrentToDoItem(event.target.value)
                    }
                />
                <button
                    onClick={() =>
                        this.saveToDoListItem(this.state.currentToDoItem)
                    }
                >
                    <p>Add Item</p>
                </button>
                <p>{this.state.currentToDoItem}</p>

                <div>
                    <p>To Do Items</p>
                    {this.state.toDoList.map((item, index) => {
                        return (
                            <p onClick={this.crossLine} key={index}>
                                {item}{" "}
                            </p>
                        );
                    })}
                </div>
            </div>
        );
    }
}
const initialState = {
    items: [
      { text: "Learn JavaScript", done: false },
      { text: "Learn React", done: false },
      { text: "Play around in JSFiddle", done: true },
      { text: "Build something awesome", done: true }
    ]
  };
  
  function appReducer(state, action) {
    switch (action.type) {
      case 'ITEM_STATUS_CHANGE':{
         let affected = state.items.slice();
         affected[action.index].done = !affected[action.index].done;
         return Object.assign({}, state,  { items: affected });
      }
  
      case 'ADD_ITEM_TO_LIST':{
         let affected = state.items.slice();
         affected.push({ text: action.data, done : false})   
         return Object.assign({}, state,  { items: affected });
      }
  
      default:
        throw new Error();
    }
  }
  
  function TodoFf(props){
      const [state, dispatch] = React.useReducer(appReducer, initialState);
  
      return (
        <div>
          <h2>Todos: 
            <input type="text" id="todoTextItem"/>
            <button 
            onClick={()=>{
                  dispatch({
                  type: 'ADD_ITEM_TO_LIST',
                  data: window.todoTextItem.value
                })
            }}
            >Add Item</button>
          </h2>
          <ol>
          {state.items.map((item, index) => (
            <li key={index}>
              <label>
                <input 
                  type="checkbox"
                  checked={item.done}
                  onChange={()=>{
                      dispatch({
                      type: 'ITEM_STATUS_CHANGE',
                      index: index,
                    })
                  }}
                /> 
                <span className={item.done ? "done" : ""}>{item.text}</span>
              </label>
            </li>
          ))}
          </ol>
        </div>
      );
  }

export default Ff;