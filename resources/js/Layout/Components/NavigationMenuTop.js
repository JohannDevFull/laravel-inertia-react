import React , { useState } from 'react'
import { Link } from '@inertiajs/inertia-react'



function NavigationMenuTop (){

    const [values, setValues] = useState({
        search: "",
        
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        Inertia.post('/users', values)
    }
    
    return (
        <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Offcanvas navbar</a>
                <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" href="/">Home</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link " href="/test">Test</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link " href="/blog">Blog</Link>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link " aria-current="page" href="#">Dashboard</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Notifications</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Profile</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Switch account</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Settings</a>
                        <ul class="dropdown-menu" aria-labelledby="dropdown01">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                    </ul>

                    <form class="d-flex" onSubmit={handleSubmit}>
                        <input class="form-control me-2" type="search" value={values.search}  onChange={handleChange}/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavigationMenuTop;