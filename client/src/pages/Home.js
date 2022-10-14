import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import TemplateImg1 from '../resources/templates/Template1.png'
import TemplateImg2 from '../resources/templates/Template2.png'
import { useNavigate } from "react-router-dom";
import "../resources/templates.css";

function Home() {
    const navigate = useNavigate();
    const templates = [
        {
            title: 'Simple Resume',
            image: TemplateImg1
    },
        {
            title: "Highlighted Sections Resume",
            image: TemplateImg2,
    },
]
return (
    <DefaultLayout>
      <div className="row home">
        {templates.map((template, index) => {
          return (
            <div className="col-md-4">
              <div className="template">
                <img
                  src={template.image}
                  height="400"
                  alt=""
                  style={{ width: "100%" }}
                />
                <div className="text">
                  <p>{template.title}</p>
                  <button onClick={() => navigate(`/templates/${index + 1}`)}>
                    TRY
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </DefaultLayout>
  );
}

export default Home