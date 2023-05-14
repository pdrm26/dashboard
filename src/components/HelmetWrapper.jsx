import { Helmet } from "react-helmet";

// We create this component because whenever helmet change or 
// obselete we can very easy convert it to another package 
// just to change this part of this code

export default function HelmetWrapper({ title, description = "" }) {
  return (
    <Helmet>
      <title>{title}</title>
      {/* at about 160 characters for description... */}
      <meta name="description" content={description} />
    </Helmet>
  );
}
