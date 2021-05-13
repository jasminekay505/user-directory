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
            .then(res => this.setState({
                users: res.data.results,
                filteredUsers: res.data.results
            }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
        this.filterUser(event.target.value.trim());
    };

    handleFormSubmit = event => {
        event.preventDefault();

    }

    filterUser = (search) => {
        if (search) {
            this.setState({
                filteredUsers: this.state.users.filter((user) => {
                    return (
                        user.name.first.includes(search) ||
                        user.name.last.includes(search) ||
                        user.phone.includes(search) ||
                        user.email.includes(search)
                    );
                }),
            });
        } else {
            this.setState({ filteredUsers: this.state.employees });
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
                    handleInputchange={this.handleInputChange}
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