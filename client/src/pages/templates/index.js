import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useParams } from "react-router-dom";
import Template1 from './Template.1';
import Template2 from './Template.2';
import DefaultLayout from '../../components/DefaultLayout';
import { Button } from "antd";
    function Templates () {
        const params = useParams();
        const gettemplate = () => {
            switch (params.id) {
              case "1": {
                return <Template1 />;
              }
              case "2": {
                return <Template2 />;
                }
              }
            };
            return (<DefaultLayout>
                <div className="d-flex justify-content-end my-5"></div>
                    {/* <Button>Back</Button>
                    <Button>Print</Button> */}
                <div>{gettemplate()}</div>
            </DefaultLayout>
            )
          };

export default Templates