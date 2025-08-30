import { useNavigate } from "react-router-dom";

function TemplateSelection(){
    const navigate = useNavigate();

    return(
        <div className="container my-5">
            <div className="row g-4">

                <div className="col-md-6">
                    <div
                        className="card dark-card template-card p-4 cursor-pointer text-center"
                        onClick={() => navigate("/form/1")}
                    >
                        <img src="simple.jpg" alt="temp1"/>
                        <h4 className="mb-3">Template 1</h4>
                        <p style={{color:"#ffffff"}}>Simple layout</p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div
                        className="card dark-card template-card p-4 cursor-pointer text-center"
                        onClick={() => navigate("/form/2")}
                    >
                        <img src="morden.png" alt="temp1"/>
                        <h4 className="mb-3 mt-3">Template 2</h4>
                        <p style={{color:"#ffffff"}}>Modern layout</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TemplateSelection;
