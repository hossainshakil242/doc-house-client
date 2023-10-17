import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import img from '../../../assets/home/ourService/servicePic.jpeg';
import { useEffect, useState } from 'react';
import TabContent from './tabContent/TabContent';

const Services = () => {
    const [data, setData] = useState([]);
    const [tabIndex, setTabIndex] = useState(0);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    console.log(data);
    return (
        <div className='max-w-6xl mx-auto flex justify-center gap-5 '>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2 className="text-2xl font-semibold">Our Sevices</h2>
                <p className="text-justify">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                {/* react tabs */}
                <div>
                    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList>
                            <Tab>Cavity Protection</Tab>
                            <Tab>Cosmetic Dentisty</Tab>
                            <Tab>Oral Surgery</Tab>
                        </TabList>
                        <TabPanel>
                            <TabContent 
                            title="Cavity Protection"
                            img="https://i.ibb.co/BzD3c7T/Cosmetic-Dentisty.png"
                            ></TabContent>
                        </TabPanel>
                        <TabPanel>
                            <TabContent 
                            title="Cosmetic Dentisty"
                            img="https://i.ibb.co/KGtDkRf/Cavity-Protection.png"
                            ></TabContent>
                        </TabPanel>
                        <TabPanel>
                            <TabContent
                            title="Oral Surgery"
                            img="https://i.ibb.co/BzD3c7T/Cosmetic-Dentisty.png"
                            ></TabContent>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Services;