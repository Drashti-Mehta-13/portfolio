import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPortfolioById } from "../api";
import TemplateOne from "./templates/TemplateOne";
import TemplateTwo from "./templates/TemplateTwo";

function PortfolioPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    getPortfolioById(id).then(res => setData(res.data));
  }, [id]);

  if (!data) return <p className="text-center mt-5">Loading...</p>;

  // Check which template user selected (stored in form submission)
  const templateId = String(data.templateId);

  return (
    <div className="container my-4">
      {templateId === "1" && <TemplateOne data={data} />}
      {templateId === "2" && <TemplateTwo data={data} />}
    </div>
  );
}

export default PortfolioPage;
