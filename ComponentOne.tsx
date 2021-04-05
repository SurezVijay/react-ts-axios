import React, { Component } from "react";
import axios from "axios";
import { User } from "./IUser";
import "bootstrap/dist/css/bootstrap.min.css";

interface AppProps {}
interface AppState {
  user: User[];
}

class ComponentOne extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      user: [] as User[]
    };
  }

  componentDidMount() {
    let URL: string = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(URL)
      .then(response => {
        console.log(response.data);
        this.setState({
          user: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let { user } = this.state;
    return (
      <div>
        <p>ComponentOne</p>
        <section className="mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <table className="table table-hover table-striped table-bordered">
                  <thead className="bg-primary">
                    <th>ID</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Website</th>
                  </thead>
                  <tbody>
                    {this.state.user.map(user => {
                      return (
                        <tr>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.website}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ComponentOne;
