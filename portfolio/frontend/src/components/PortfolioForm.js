import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createPortfolio } from "../api";

function PortfolioForm(){
    const { templateId } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        title: "",
        tagline: "",
        profileImage: "",
        bio: "",
        email: "",
        phone: "",
        location: "",
        skills: "",
        templateId,
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        await createPortfolio(formData);
        navigate("/professionals");
    };

    return(
        <form onSubmit={handleSubmit} className="container my-4 p-4 bg-light text-dark rounded shadow-sm" style={{ maxWidth: "600px" }}>
            <input name="name" placeholder="Name" onChange={handleChange} className="form-control mb-3" />
            <input name="title" placeholder="Title" onChange={handleChange} className="form-control mb-3" />
            <input name="tagline" placeholder="Tagline" onChange={handleChange} className="form-control mb-3" />
            <textarea name="bio" placeholder="Bio" onChange={handleChange} className="form-control mb-3" rows={4} />
            <input name="skills" placeholder="Skills (comma-separated)" onChange={handleChange} className="form-control mb-3" />
            <input name="email" placeholder="Email" onChange={handleChange} className="form-control mb-3" />
            <input name="phone" placeholder="Phone" onChange={handleChange} className="form-control mb-3" />
            <input name="location" placeholder="Location" onChange={handleChange} className="form-control mb-3" />
            <input name="profileImage" placeholder="Image URL" onChange={handleChange} className="form-control mb-4" />
            <button type="submit" className="btn btn-gradient w-100">Submit</button>
        </form>
    );
}

export default PortfolioForm;
