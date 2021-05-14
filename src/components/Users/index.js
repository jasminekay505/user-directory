import React, { Component } from "react";
import API from "../../utils/API";
import Search from "../Search";
import Table from "../Table";

class Users extends Component {
    state = {
        search: "",
        users: [],
        filteredUsers: [],
    };

    componentDidMount() {
        API.getUsers()
            .then((res) => this.setState({
                users: res.data.results,
                filteredUsers: res.data.results
            }))
            .catch(err => console.log(err));
    }

    handleInputChange = (event) => {
        const value  = event.target.value;
        this.setState({ search : value });
        this.filterUser(value.toLowerCase().trim());
    };

    handleFormSubmit = event => {
        event.preventDefault();
    }

    filterUser = (input) => {
        if (input) {
            this.setState({
                filteredUsers: this.state.users.filter((user) => {
                    return (
                        user.name.first.toLowerCase().includes(input) ||
                        user.name.last.toLowerCase().includes(input)
                    );
                }),
            });
        } else {
            this.setState({ filteredUsers: this.state.users });
        }
    };

    sortUserFirst = (event) => {
        this.setState({
            filteredUsers: this.state.filteredUsers.sort(
                (user1, user2) => {
                    if (user1.name.first < user2.name.first) {
                        return -1
                    } else if (user1.name.first > user2.name.first) {
                        return 1
                    } else { return 0 }
                }
            )
        })
    }

    sortUserLast = (event) => {
        this.setState({
            filteredUsers: this.state.filteredUsers.sort(
                (user1, user2) => {
                    if (user1.name.last < user2.name.last) {
                        return -1
                    } else if (user1.name.last > user2.name.last) {
                        return 1
                    } else { return 0 }
                }
            )
        })
    }

    render() {
        return (
            <div className = "container">
                <Search
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <Table
                state = {this.state}
                filterUser = {this.filterUser}
                sortUserFirst = {this.sortUserFirst}
                sortUserLast = {this.sortUserLast}
                />
            </div>
        );
    }
}

export default Users;