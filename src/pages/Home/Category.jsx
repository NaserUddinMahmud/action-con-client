import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {
    return (
        <>
         <h2 className='text-5xl text-center py-6'>Shop By Category</h2>
        <div>
             <Tabs>
    <TabList>
      <Tab>Marvel</Tab>
      <Tab>DC</Tab>
      <Tab>Star-Wars</Tab>
    </TabList>

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
        </>
    );
};

export default Category;