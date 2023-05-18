import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// const [tabIndex, setTabIndex] = useState(0);


const Products = () => {
  const products = useLoaderData()
  return (
    <div>
      <p>this is product</p>
      <Tabs>
    <TabList>
      <Tab>All Products</Tab>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
      <Tab>Title 3</Tab>
    </TabList>

    <TabPanel>
      
    </TabPanel>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>

    </div>
  );
};

export default Products;