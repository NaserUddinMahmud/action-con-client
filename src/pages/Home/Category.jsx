import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryToy from './CategoryToy';


const Category = () => {
    const toys = useLoaderData();
    
    const marvel= toys.filter(toy=>toy.category == 'Marvel')
    const dc= toys.filter(toy=>toy.category == 'DC')
    const starWars= toys.filter(toy=>toy.category == 'Star-Wars')
    return (
        <>
         <h2 className='text-5xl text-center py-6'>Shop By Category</h2>
        <div className='flex justify-center text-center'>
             <Tabs>
    <TabList >
      <Tab>Marvel</Tab>
      <Tab>DC</Tab>
      <Tab>Star-Wars</Tab>
    </TabList>

    <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
    
        {marvel.map(toy=><CategoryToy
      key={toy._id}
      toy={toy}
      ></CategoryToy>)}


</div>
    </TabPanel>
    <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
    
    {dc.map(toy=><CategoryToy
  key={toy._id}
  toy={toy}
  ></CategoryToy>)}


</div>
    </TabPanel>
    <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
    
    {starWars.map(toy=><CategoryToy
  key={toy._id}
  toy={toy}
  ></CategoryToy>)}
</div>
    </TabPanel>
  </Tabs>
        </div>
        </>
    );
};

export default Category;