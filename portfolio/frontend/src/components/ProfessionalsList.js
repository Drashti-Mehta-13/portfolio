import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPortfolios } from "../api";

function ProfessionalsList(){
    const [profiles, setProfiles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getPortfolios().then(res => setProfiles(res.data));
    }, []);

    return(
        <div className="container">

            {/* Hero Banner */}
            <div className="hero-dark mb-4 text-center">
                <h1 className="display-5 fw-bold">Meet Our Professionals</h1>
                <p className="lead">Discover the future of tech through talented individuals</p>
            </div>

            <div className="row">
                {profiles.map(profile => (
                    <div className="col-md-4" key={profile.id}>
                        <div className="card dark-card mb-4 text-center p-3">
                            <img src={profile.profileImage} className="rounded-circle mx-auto" alt="Profile" style={{ width: "120px", height: "120px", objectFit: "cover", marginBottom: "1rem" }} />
                            <div className="card-body">
                                <h5>{profile.name}</h5>
                                <p>{profile.title}</p>
                                <button className="btn btn-outline-light mt-2" onClick={() => navigate(`/portfolio/${profile.id}`)}>View Portfolio</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProfessionalsList;
