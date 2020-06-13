import React from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import Answered from "./Answered";
import Unanswered from "./Unanswered";

export default function Home() {
    return (
        <div className='container'>
            <Tabs id="uncontrolled-tab-example">
                <TabList>
                    <Tab>Answered</Tab>
                    <Tab>Unanswered</Tab>
                </TabList>
                <TabPanel>
                    <Answered />
                </TabPanel>
                <TabPanel>
                    <Unanswered />
                </TabPanel>
            </Tabs>
        </div>
    );
}