// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import React, { useState } from "react";
import ReactDOM from "react-dom";

// import "./styles.css";
import EdiText from "react-editext";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//-------------------------------------------------------------
// function App() {
//   const [editing, setEditing] = useState(true);
//   // const [value, setValue] = useState("This is a sample text.");
//   const itemInfo = {name: "name", price:"price", category:"category"} ;
//   var nameFilled = false;
//   var priceFilled = false;
//   var categoryFilled = false;

//   const handleSaveName = value => {
//     if (value) {
//       console.log(value);
//       itemInfo.name = value;
//       nameFilled = true;
//     }
//     else {
//       console.log("empty");
//       nameFilled = false;
//     }
//   };
//   const handleSavePrice = value => {
//     if (value) {
//       console.log(value);
//       itemInfo.price = value;
//       priceFilled = true;
//     }
//     else {
//       console.log("empty");
//       priceFilled = false;
//     }
//   };
//   const handleSaveCategory = value => {
//     if (value) {
//       console.log(value);
//       itemInfo.category= value;
//       categoryFilled = true;
//     }
//     else {
//       console.log("empty");
//       categoryFilled = false;
//     }
//   };
//   const addtoList = () => {
//     if (nameFilled && priceFilled && categoryFilled) {
//       console.log(itemInfo);
//       alert('Added Successfully');
//     }
//     else {
//       alert('Not Complete');
//       console.log("Not Complete");
//     }
//   };


//   return (
//     <div className="App">
//       <h1>Expense Tracker</h1>
//       <p>
//         Enter the name of the expense.
//       </p>
//       {/* <button onClick={() => setEditing(v => !v)}>Toggle</button> */}
//       <div style={{ width: "50%" }}>
//         {/*  Apply your changes below */}
//         <EdiText
//           // value={value}
//           type="text"
//           onSave={handleSaveName}
//           editing={editing}
//         />
//       </div>

//       <p>
//         Enter the price of the item purchased.
//       </p>
//       {/* <button onClick={() => setEditing(v => !v)}>Toggle</button> */}
//       <div style={{ width: "50%" }}>
//         {/*  Apply your changes below */}
//         <EdiText
//           // value={value}
//           type="number"
//           onSave={handleSavePrice}
//           editing={editing}
//         />
//       </div>

//       <p>
//         Enter the category of the purchase.
//       </p>
//       <div style={{ width: "50%" }}>
//         {/*  Apply your changes below */}
//         <EdiText
//           // value={value}
//           type="text"
//           onSave={handleSaveCategory}
//           editing={editing}
//         />
//       </div>
//             <button onClick={() => addtoList()}>Submit</button>
//     </div>
//   );
// }

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameFilled: false,
      priceFilled: false,
      categoryFilled: false,
      itemInfo:[{name: ''}, {price: ''}, {category: ''}],
      list: [  ],
      length: 0,
    }

  }

  getDeleteIndex = (indextoDelete) => {

    const length = this.state.length;
    if (length == 0) {
      return;
    }

    if (length == 1) {
      this.setState({
        list: [],
        length: 0,
      })
    }
    else {
      var tempList;
      if (indextoDelete == 0) {
        tempList = this.state.list.slice(indextoDelete + 1, this.state.length)
      }
      else if (indextoDelete == this.state.length - 1) {
        tempList = this.state.list.slice(0, this.state.length - 1);
      }
      else {
        tempList = this.state.list.slice(0, indextoDelete - 1);
        var right = this.state.list.slice(indextoDelete + 1, this.state.length);
        tempList.concat(right);

      }
      if (indextoDelete != this.state.length - 1) {
        for(var i = indextoDelete; i < this.state.length - 1; i++) {
          tempList[i].id = tempList[i].id - 1;
          console.log(tempList[i].id);
        }
      }
      this.setState({
        list: tempList,
        length: length - 1,
      })
    }

    

    
    this.setState({deleteIndex: indextoDelete});
    console.log(indextoDelete);
  }




  render() {
  return (
    
    <div className="App">
      <h1>Expense Tracker</h1>
      <p>
        Enter the name of the expense.
      </p>
      <div style={{ width: "50%" }}>
        <EdiText
          type="text"
          onSave={  value => {
            if (value) {
              console.log(value);
              this.state.itemInfo.name = value;
              this.state.nameFilled = true;
            }
            else {
              console.log("empty");
              this.state.nameFilled = false;
            }
          }}
        />
      </div>

      <p>
        Enter the price of the item purchased.
      </p>
      <div style={{ width: "50%" }}>
        <EdiText
          type="number"
          onSave={value => {
            if (value) {
              console.log(value);
              this.state.itemInfo.price = value;
              this.state.priceFilled = true;
            }
            else {
              console.log("empty");
              this.state.priceFilled = false;
            }
          }}
        />
      </div>

      <p>
        Enter the category of the purchase.
      </p>
      <div style={{ width: "50%" }}>
        {/*  Apply your changes below */}
        <EdiText
          // value={value}
          type="text"
          onSave={value => {
            if (value) {
              console.log(value);
              this.state.itemInfo.category= value;
              this.state.categoryFilled = true;
            }
            else {
              console.log("empty");
              this.state.categoryFilled = false;
            }
          }}
        />
      </div>
      <button onClick={() => {
        const list = this.state.list.slice(0);
        const length = this.state.length;
        if (this.state.nameFilled && this.state.priceFilled && this.state.categoryFilled) {
          console.log(this.state.itemInfo);
          this.setState({
            list: list.concat(
              createItem(this.state.itemInfo.name, this.state.itemInfo.price, this.state.itemInfo.category, this.state.length),
            ),
            nameFilled: false,
            priceFilled: false,
            categoryFilled: false,
            length: length + 1,
          });
          alert('Added Successfully');
        }
        else {
          alert('Not Complete');
          console.log("Not Complete");
        }
      }}>Submit</button>
      <div><SimpleTable items = {this.state.list} parentCallback={this.getDeleteIndex}></SimpleTable></div>
      {/* <div> <SimpleTable parentCallback ={this.getDeleteIndex}/> <p> {this.state.deleteIndex} </p></div> */}

    </div>
  );
  }
}

function createItem(name, price, category, id) {
  return { name, price, category, id};
}

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class SimpleTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table: {
        minWidth: 650,
      },
      rows: null,
      deleteIndex: null,
    }
  }



  sendData(value){
    this.props.parentCallback(value);
  }

  render() {
    this.state.rows = this.props.items;

    return (
      <TableContainer component={Paper}>
        <Table className={this.state.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name of Expense</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right"><button onClick = {() => this.sendData(row.id)} >{row.id}</button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

const Row = ({id, title, priority, type, complete, remove}) => (
  <div className="row">
    <div className="remove">
      <a href="#" onClick={() => remove(id)}>X</a>
    </div>
    <div>{id}</div>
    <div>{title}</div>
    <div>{priority}</div>
    <div>{type}</div>    
    <div>{complete}</div>    
  </div>
);

class Table1 extends React.Component {
  state = {
    data: [
      {id: 403, title: 'Task 403', priority: 'High', type: 'Improvement', complete: 100}, 
      {id: 532, title: 'Task 532', priority: 'Medium', type: 'Improvement', complete: 30}, 
      {id: 240, title: 'Task 240', priority: 'High', type: 'Story', complete: 66},
      ],
    }; 
  
  /* 
     I like to write it this way to explicity state that a function is being returned
     But you could simplify this by using arrow syntax twice,
    
     compareBy = (key) => (a,b) => { ...... }
  */
  compareBy = (key) => {
    return function(a, b) {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
    };
  };
   
  sortBy = (key) => {
    let arrayCopy = [...this.state.data];
    arrayCopy.sort(this.compareBy(key));
    this.setState({data: arrayCopy});
  };

  remove = (rowId) => {
    // Array.prototype.filter returns new array
    // so we aren't mutating state here
    const arrayCopy = this.state.data.filter((row) => row.id !== rowId);
    this.setState({data: arrayCopy});
  };
    
  render() {
    const rows = this.state.data.map( (rowData) => <Row remove={this.remove} {...rowData } />);

    return (
      <div className="table">
        <div className="header">
          <div className="remove"></div>
          <div onClick={() => this.sortBy('id')} >ID</div>
          <div onClick={() => this.sortBy('title')}>Title</div>
          <div onClick={() => this.sortBy('priority')}>Priority</div>
          <div onClick={() => this.sortBy('type')}>Issue Type</div>
          <div onClick={() => this.sortBy('complete')}>% Complete</div>
        </div>
        <div className="body">
          {rows}
        </div>
      </div>
    );
    
  }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<Tracker />, rootElement);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
