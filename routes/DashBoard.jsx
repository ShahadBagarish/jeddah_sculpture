import React, { Component } from "react";
import { WrapperBox , DashboardHeader , ValueBlock , Columns , Column} from 'admin-bro/components'
import {  } from 'admin-bro/components'

export default class DashBoard extends Component {
  render() {
    const card = {
      border: "3px solid white",
      borderRadius: "10px",
      height: "150px",
      width: "120px",
      margin: "0 auto",
      marginLeft: "90px",
      marginTop: "120px",
      textAlign: "center",
      float: "left",
      align: "center"
    };

    return (
      <div>


      <DashboardHeader>
         <h1>Overlaying text</h1>
       </DashboardHeader>
       <WrapperBox>
         <Columns style={{marginTop: '-80px'}}>
           <Column><ValueBlock  icon="fa fa-bomb" value="5">
             Utils
           </ValueBlock></Column>
           <Column><ValueBlock  icon="fa fa-star" value="12">
             Are
           </ValueBlock></Column>
           <Column><ValueBlock  icon="fa fa-cog" value="5" color="red">
             Awesome
           </ValueBlock></Column>
         </Columns>
       </WrapperBox>






      </div>
    );
  }
}
