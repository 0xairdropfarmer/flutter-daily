import React from "react";
import WidgetContainer from "./WidgetContainer";
import WidgetTitle from "./WidgetTitle";
import config from "../../../data/SiteConfig";


const WidgetAds = () => (
  <WidgetContainer extraClass="categories-container">
    <WidgetTitle title="Sponsor" />

    <div data-ea-publisher="kriss-io" data-ea-type="image" />
  </WidgetContainer>
)

export default WidgetAds;