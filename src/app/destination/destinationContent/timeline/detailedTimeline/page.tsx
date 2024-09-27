import React from "react";
import MainTimeline from "./MainTimeline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Map from "./Map";

const page = () => {
  return (
    <Tabs defaultValue="account" className="">
      <TabsList className=" my-10 flex justify-center items-center">
        <TabsTrigger value="account">TimeLine</TabsTrigger>
        <TabsTrigger value="password">Map</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <MainTimeline />
      </TabsContent>
      <TabsContent value="password">
        <Map />
      </TabsContent>
    </Tabs>
  );
};

export default page;
