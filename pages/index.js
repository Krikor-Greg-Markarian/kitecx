import cn from "classnames";
import axios from "axios";
import Navbar from "../src/components/Navbar";
import NavbarWhite from "../src/components/NavbarWhite";
import Servicesitem from "../src/components/Servicesitem";
import AboutItem from "../src/components/AboutItem";
import ProfessionalItem from "../src/components/ProfessionalItem";
import TrustItem from "../src/components/TrustItem";
import WhyWhereItem from "../src/components/WhyWhereItem";
import ProjectInfoItem from "../src/components/ProjectInfoItem";
import Footer from "../src/components/Footer";
import ReadMoreButton from "../src/components/ReadMoreButton";
import PricingPlan from "../src/components/PricingPlan";
import BusinessCard from "../src/components/BusinessCard";
import BusinessCardBottom from "../src/components/BusinessCardBottom";

export default function Home(props) {
  const businessCardPlan = props.businessCard.standardBusiness;
  const largeBusinessPlan = props.businessCard.largeBusiness;
  return (
    <div className={cn("font-bold")}>
      <section>
        <Navbar
          number={"666 888 0000"}
          hotmailAddress={"contact@example.com"}
        />
      </section>
      <section>
        <NavbarWhite
          title={"KITECX"}
          home={"HOME"}
          services={"SERVICES"}
          portfolio={"PORTFOLIO"}
          news={"NEWS"}
          pages={"PAGES"}
          contact={"CONTACT"}
        />
      </section>

      <section>
        <Servicesitem
          title={"SERVICES ||"}
          homeTag={"HOME / "}
          servicesTag={"SERVICES ||"}
        />
      </section>

      <section className={cn("pb-40")}>
        <div className={cn("grid md:grid-cols-2")}>
          <div className={cn("pt-28 pl-6")}>
            <img
              className={cn("rounded-full ")}
              src={
                "https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_516/https://www.gavias-theme.com/wp/kitecx/wp-content/uploads/2021/04/image-6.jpg"
              }
              alt=""
            />
          </div>
          <div>
            {props.posts_data.map((item, idx) => (
              <AboutItem
                key={idx}
                smallTitle={item.smallTitle}
                titleOne={item.titleOne}
                description={item.description}
                commpassImageUrl={item.commpassImageUrl}
                title={item.title}
                housemapImageUrl={item.housemapImageUrl}
                anotherTitle={item.anotherTitle}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={cn("bg-gray-200 p-4")}>
        <div className={cn("pt-32 pb-12")}>
          <p className={cn("text-gray-500 font-normal text-lg text-center")}>
            WHAT WE’RE OFFERING
          </p>
          <p className={cn("text-black text-5xl font-normal text-center")}>
            PROFESSIONAL SERVICES
          </p>
        </div>
        <div className={cn("grid md:grid-cols-3 gap-8")}>
          {props.professionalItem.map((item, idx) => (
            <div key={idx} className={cn("col-span-1")}>
              <ProfessionalItem
                imageUrl={item.imageUrl}
                title={item.title}
                description={item.description}
                ReadMoreButtonName={item.ReadMoreButtonName}
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <TrustItem
          smallTitle={"ABOUT COMPANY"}
          title={"TRUST THE EXPERTS FOR ALL YOUR BUILDING NEEDS"}
          ReadMoreButtonName={"READ MORE"}
        />
      </section>

      <section className={cn("pt-28 pb-28 p-4")}>
        <div className={cn("grid md:grid-cols-2 gap-4")}>
          {props.whyWhereitem.map((item, idx) => (
            <div className={cn("col-span-1")}>
              <WhyWhereItem
                key={idx}
                text={item.text}
                imageUrl={item.imageUrl}
              />
            </div>
          ))}
        </div>
      </section>

      <section className={cn("pt-20")}>
        <div className={cn("projectInfoItem")}>
          <div className={cn("grid md:grid-cols-4")}>
            {props.projectInfoItem.map((item, idx) => (
              <div key={idx} className={cn("col-span-1")}>
                <ProjectInfoItem
                  imagUrl={item.imagUrl}
                  number={item.number}
                  text={item.text}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={cn("pt-20 pb-20 p-5")}>
        <div className={cn("grid md:grid-cols-2")}>
          <div className={cn("col-span-1")}>
            <p className={cn("text-gray-500 ")}>CHECKOUT PRICING</p>
            <p className={cn("text-4xl pt-2 ")}>
              CHOOSE YOUR OPTIMAL PRICING PLAN
            </p>

            <div className={cn("flex pt-12")}>
              <div className={cn("flex-shrink")}>
                <ReadMoreButton
                  className={cn(
                    "bg-gray-200 text-black hover:bg-black hover:text-white text-center text-sm p-3 font-bold"
                  )}
                  ReadMoreButtonName={" / Get Right Solutiuons"}
                />
              </div>
              <div className={cn("flex-shrink pl-6")}>
                <ReadMoreButton
                  className={cn(
                    "bg-gray-200 text-black hover:bg-black hover:text-white  text-center text-sm p-3 font-bold"
                  )}
                  ReadMoreButtonName={" / Expert Architecture"}
                />
              </div>
              <div className={cn("flex-grow")}></div>
            </div>
            {props.pricingPlan.map((item, idx) => (
              <PricingPlan title={item.title} description={item.description} />
            ))}
          </div>
          <div className={cn("col-span-1")}>
            <p className={cn("text-gray-500 pt-8 pl-28")}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>

            <div className={cn("grid md:grid-cols-2")}>
              <div className={cn("col-span-1 relative      ")}>
                <BusinessCard
                  dolorSign={businessCardPlan.dolorSign}
                  price={businessCardPlan.price}
                  month={businessCardPlan.month}
                  title={businessCardPlan.title}
                  visualization={businessCardPlan.visualization}
                  planning={businessCardPlan.planning}
                  selection={businessCardPlan.selection}
                  construction={businessCardPlan.construction}
                  ReadMoreButtonName={businessCardPlan.ReadMoreButtonName}
                />
                <div
                  className={cn(
                    "col-span-1 absolute  left-10 pl-44 top-0       "
                  )}
                >
                  <BusinessCardBottom
                    dolorSign={largeBusinessPlan.dolorSign}
                    price={largeBusinessPlan.price}
                    month={largeBusinessPlan.month}
                    title={largeBusinessPlan.title}
                    visualization={largeBusinessPlan.visualization}
                    planning={largeBusinessPlan.planning}
                    selection={largeBusinessPlan.selection}
                    construction={largeBusinessPlan.construction}
                    ReadMoreButtonName={largeBusinessPlan.ReadMoreButtonName}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={cn("pt-40")}>
        <Footer
          title={"KITECX"}
          contactUs={"Contact us for incredible interior & architect designs."}
          ReadMoreButtonName={"READ MORE"}
          title={"About"}
          description={
            "Lorem ipsum dolor sit amet, consect etur adi pisicing elit sed do eiusmod."
          }
          number={"92 666 888 0000"}
          hotmailAddress={"contact@example.com"}
          info={"66 Broklyn Street New York, USA"}
          Links={"Links"}
          aboutus={"About Us"}
          ourMisson={"Our Mission"}
          meetTheTeam={"Meet the Team"}
          ourProject={"Our Projects"}
          contact={"Contact"}
          Explore={"Explore"}
          TypesOf={"Types Of Designs"}
          OurStory={"Our Story"}
          LatestNews={"Latest News"}
          HelpCenter={"Help Center"}
          OurServices={"Our Services"}
          Newsletter={"Newsletter"}
          signUp={"Sign up now for weekly news and updates"}
          copyright={"© Copyright 2021 by Gaviasthemes"}
          privacy={"Privacy Policy"}
          termsAndConditions={"Terms & Conditions"}
        />
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await axios.get("http://localhost:3000/api/hello");

  return {
    props: {
      posts_data: response.data.about,
      professionalItem: response.data.professionalItem,
      whyWhereitem: response.data.whyWhereitem,
      projectInfoItem: response.data.projectInfoItem,
      pricingPlan: response.data.pricingPlan,
      businessCard: response.data.businessCard,
    }, // will be passed to the page component as props
  };
}
