import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Blog from '../Blog/Blog';
import Alltoys from '../AllToys/Alltoys';

function RoutePage() {
  // Get the current location
  const location = useLocation();

  // Update the document title based on the current route
  useEffect(() => {
    const pageTitle = getPageTitle(location.pathname);
    document.title = pageTitle;
  }, [location]);

  // Get the page title based on the route
  const getPageTitle = (pathname) => {
    switch (pathname) {
      case '/blog':
        return 'carToys | blog';
      case '/products':
        return 'carToys | Products';
      case '/allToys':
        return 'carToys | allToys';
      default:
        return 'carToys';
    }
  };

  return (
    <Router>
      <Switch>
        {/* Define your routes here */}
        <Route path="/blog" component={Blog} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/contact" component={Alltoys} />
        {/* ...other routes */}
      </Switch>
    </Router>
  );
}

function Blog() {
  return <Blog></Blog>;
}

function ProductsPage() {
  return <h1>Products Page</h1>;
}

function Alltoys() {
  return <h1>All Toys Page</h1>;
}

export default RoutePage;
