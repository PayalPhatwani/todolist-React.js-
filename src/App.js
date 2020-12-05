import "./App.css";
import {
  Button,
  Card,
  CardBody,
  CardText,
  Col,
  Container,
  Navbar,
  NavbarBrand,
  Row,
} from "reactstrap";
import React, { useReducer, useState } from "react";
import "./App.scss";
import { BsCircle } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import {reducer} from './reducer'
//states
const defaultState = {
  todoList: [],
};

function App() {
  const [todo, settodo] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [novalue, setNovalue] = useState("");
  const handleSubmit = () => {
    if (todo) {
      const newTodo = { id: new Date().getTime().toString(),todo,done:false };
      dispatch({ type: "ADD_TODO", payload: newTodo });
      settodo("");
      console.log(todo);
    } else {
      setNovalue("Null value found! do enter something");
      setTimeout(() => {
        setNovalue("");
      }, 3000);
      console.log("no value");
    }
  };

  
  return (
    <div>
      <Navbar style={{ backgroundColor: "#212121" }}>
        <NavbarBrand className="title">ToDo</NavbarBrand>
      </Navbar>
      <Container>
        <Container>
          <Row>
            <Col>
              <div className="form__group field m-0">
                <textarea
                style={{height:'1'}}
                  className="form__field"
                  placeholder="Add toDo"
                  name="todo"
                  id="todo"
                  value={todo}
                  required
                  onChange={(e) => settodo(e.target.value)}
                />
                <label htmlFor="name" className="form__label">
                  Add ToDo
                </label>
              </div>
            </Col>
            <Col className="p-4">
              <Button color="info" type="submit" onClick={handleSubmit}>
                Add
              </Button>{" "}
            </Col>
          </Row>
          <Row>
            <span style={{ color: "red" }}>{novalue}</span>
          </Row>
        </Container>
        <div>
          {state.todoList.map((todo) => {
            //styling todo text
            
             const mystyle = {
               textDecoration: "line-through solid red",
               fontSize: "20px",
               fontFamily: "Arial",
             };
            
            

            return (
              <Container className="pt-2">
                <Card
                  body
                  inverse
                  style={{ backgroundColor: "#333", borderColor: "#333" }}
                  className="p-0"
                >
                  <CardBody className="pl-2 pt-2 ">
                    <CardText className="p-0">
                      <Row>
                        <Col
                          style={
                            todo.done
                              ? mystyle
                              : { fontSize: "20px", fontFamily: "Arial" }
                          }
                        >
                          {todo.todo}
                        </Col>
                        <Col xs="0" className="p-0 m-0">
                          {todo.done ? (
                            <AiOutlineCheckCircle
                             type="button"
                              onClick={() =>
                                dispatch({
                                  type: "NOT_DONE",
                                  payload: todo.id,
                                })
                              }
                              size="2.5em"
                              style={{ color: "#03a9f4" }}
                            />
                          ) : (
                            <BsCircle
                              type="button"
                              onClick={() =>
                                dispatch({
                                  type: "TODO_DONE",
                                  payload: todo.id,
                                })
                              }
                              size="2.3em"
                              style={{ color: "#03a9f4" }}
                            />
                          )}
                        </Col>
                        <Col xs="1" className="p-1 mr-3 ml-2 ">
                          {" "}
                          <MdDelete
                            type="button"
                            onClick={() =>
                              dispatch({
                                type: "REMOVE_TODO",
                                payload: todo.id,
                              })
                            }
                            size="2em"
                            style={{ color: "#d32f2f" }}
                          />
                        </Col>
                      </Row>
                    </CardText>
                  </CardBody>
                </Card>
              </Container>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default App;
