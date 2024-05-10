import React from 'react';
import logo from './logo.svg';

import './bootstrap/css/bootstrap.min.css'
import './bootstrap/css/sticky-footer-navbar.css'
import Footer from './components/Footer.js'
import Navbar from './components/Menu.js'
import UserList from './components/User.js'
import axios from 'axios'
import ProjectList from "./components/Projects";


const DOMAIN = 'http://127.0.0.1:8000/api/'
const get_url = (url) => `${DOMAIN}${url}`


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navbarItems: [
                {name: 'Пользователи', href: '/'},
                {name: 'Проекты', href: '/projects'},
                {name: 'Todo', href: '/todo'},
            ],
            users: [],
            projects: []
        }
    }

    componentDidMount() {
        axios.get(get_url(['users/', 'projects/']))
            .then(response => {
                this.setState({users: response.data, projects: response.data})
            }).catch(error => console.log(error))};


    render() {
        return (
            <div>
                <header>
                    <Navbar navbarItems={this.state.navbarItems}/>
                </header>
                <main role="main" className="flex-shrink-0">
                    <div className="container">
                        <UserList users={this.state.users}/>
                    </div>
                </main>
                <main role="main" className="flex-shrink-0">
                    <div className="container">
                        <ProjectList projects={this.state.projects}/>
                    </div>
                </main>
                <Footer/>
            </div>


        )
    }
}


export default App;
