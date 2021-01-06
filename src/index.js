import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Switch, Route} from 'react-router-dom';
import './reset.css';
import './index.css';
import Header from './components/Header';
import MainPage from "./pages/MainPage.js";
import XmasPage from "./pages/XmasPage.js";
import XmasPoemPage from "./pages/XmasPoemPage.js";
import LabPage from "./pages/LabPage.js";
import LabPage1 from "./pages/LabPage1";
import LabPage2 from "./pages/LabPage2";
import The404Page from "./pages/The404Page.js";
import sharedData from "./data/shared-data.js";

function IndexPage() {
  sharedData.showmode = getShowMode();

  return (
    <HashRouter>
      <Header title1="halkjaer" title2=".dk" />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/xmas" component={XmasPage} />
          <Route path="/xmaspoem/:year" component={XmasPoemPage} />
          <Route path="/lab" component={LabPage} />
          <Route path="/lab1" component={LabPage1} />
          <Route path="/lab2" component={LabPage2} />
          <Route path="/" component={The404Page} />
        </Switch>
    </HashRouter>
  );
}

function getShowMode()
{
    const uri = window.location.search; 
    const params = new URLSearchParams(uri);
    const showparam = params.get("show") || '';
    const showmode = ['cv','li'].includes(showparam.toLowerCase()) ? showparam.toLowerCase() : '';
    return showmode;
}

ReactDOM.render(<IndexPage />, document.getElementById('root'));