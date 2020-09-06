import React, { Component } from "react";
import Filter from "./Filter/Filter";
import Search from "./Search/Search";
import styles from "./Admins.module.css";

class Admins extends Component {
  state = {
    adminsList: [],
    filteredList: [],
    filterValue: "",
    searchValue: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filterValue !== this.state.filterValue) {
      if (this.state.filterValue === "all") {
        this.setState({ filteredList: this.state.adminsList });
      } else {
        let fList = this.state.adminsList.filter((admin) => admin.status === this.state.filterValue);
        this.setState({ filteredList: fList });
      }
    }

    if (prevState.searchValue !== this.state.searchValue) {
      let sList = this.state.adminsList.filter((admin) => admin.name.includes(this.state.searchValue));
      this.setState({ filteredList: sList });
    }
  }

  componentWillReceiveProps() {
    this.setState({
      adminsList: this.props.adminsList,
      filteredList: this.props.adminsList,
    });
  }

  filterStatusHandler = (event) => {
    let selectedFilter = event.target.value;
    this.setState({ filterValue: selectedFilter });
  };

  onSearchHandler = (event) => {
    let searchedValue = event.target.value;
    this.setState({ [event.target.name]: searchedValue });
  };

  
  render() {
    const list = this.state.filteredList.map((admin, i) => (
      <li className={`${styles.adminsLi} ${i % 2 ? styles.evenRow : null}`} key={admin._id}>{admin.name}
        <span className={`${admin.status === "On vacation" ? styles.onVacation : null}`}>&nbsp;({admin.status})</span>
      </li>
    ));
    return (
      <>
        <h3>Employee List:</h3>
        <div className={styles.qContainer}>
          <Search
            searchValue={this.state.searchValue}
            searched={this.onSearchHandler}
          />
          <Filter
            statusList={this.props.statusList}
            filterChange={this.filterStatusHandler}
          />
        </div>

        {list.length && <ul className={styles.adminsUl}>{list}</ul>}
      </>
    );
  }
}

export default Admins;
