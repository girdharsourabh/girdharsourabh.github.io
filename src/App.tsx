import React from "react";
import { Route, Switch } from "wouter";
import { Toaster } from "./components/ui/toaster";
import Home from "./pages/Home";
import NotFound from "./pages/not-found";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
      <Toaster />
    </>
  );
}
