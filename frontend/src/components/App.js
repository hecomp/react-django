import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";

class App extends React.Component {
    state = {
        el: {}
    }

    handleUpdateData = () => {
        this.refs.dataProvider.fetchLeads()
    }

    getUserData = (el) => {
        this.setState({ el })
    }
    render() {
        return (
            <React.Fragment>
                <DataProvider 
                    ref="dataProvider"
                    endpoint="api/lead/" 
                    render={data => <Table getUserData={this.getUserData} data={data} />}
                />
                <Form el={this.state.el} onSubmit={this.handleUpdateData}/>
            </React.Fragment>
        )
    }
}

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App />, wrapper) : null;