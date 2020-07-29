import React, { Component } from 'react';
import { Redirect, Link, Route,Switch } from 'react-router-dom';
import Category from './Category';
import Products from './Products';
import  Login, { fakeAuth }  from './Login';
import '../src/styles.css'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {

  render() {

    return (
      <div>
       <nav className="j ">     
        <ul className="nav navbar-nav x">
          <li><Link to="/" className="v" type="button" >Homes</Link></li>
          <li><Link to="/category"className="v" type="button" >Category</Link></li>
          <li><Link to="/products" className="v" type="button" >Products</Link></li>
          <li><Link to="/admin" className="v" type="button" >:Restricted area:</Link></li>
        </ul>
       </nav>
      
       <Switch>
        <Route path="/login" component={Login}/>
        <Route exact path="/" component={Home}/>
        <Route path="/category" component={Category}/>
        <PrivateRoute path='/admin' component = {Admin} />
        <Route path="/products" component={Products}/>
       </Switch>
      </div>
    );
  }
}

const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => fakeAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />} />
  )
}

const Home = (props) => (
  <div>
    <h2>Home {console.log(props)}</h2>
  </div>
)

const Admin = ({ match }) => {
  return(<div> <h2>Welcome admin </h2></div>)


}


export default  App;