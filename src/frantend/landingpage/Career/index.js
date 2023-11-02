import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Author page sections
import Company from "frantend/landingpage/Career/sections/Company";
// import Contact from "pages/LandingPages/Author/sections/Contact";
import Footer from "frantend/landingpage/Author/sections/Footer";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/career-website-banner-concept-with-thin-line-flat-design_56103-101.avif";
import Jobs from "./sections/jobs";

function Career() {
  document.title ="E2X INFOTECH || Career PAGE"
  return (
    <>
      <DefaultNavbar
        routes={routes}
        sticky
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
            
          }}
          
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Company />
          <Jobs/>
        </Card>
        {/* <Contact /> */}
        <Footer />
      </MKBox>
    </>
  );
}
export default Career;