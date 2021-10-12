import cn from "classnames";
import axios from "axios";
import Navbar from "../src/components/Navbar";
import NavbarWhite from "../src/components/NavbarWhite";
import Servicesitem from "../src/components/Servicesitem";
import AboutItem from "../src/components/AboutItem";
import ProfessionalItem from "../src/components/ProfessionalItem";

export default function Home(props) {
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
        <div className={cn("grid grid-cols-2")}>
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
        <div className={cn("grid grid-cols-3 gap-8")}>
          {props.professionalItem.map((item, idx) => (
            <div className={cn("col-span-1")}>
              <ProfessionalItem
                key={idx}
                imageUrl={item.imageUrl}
                title={item.title}
                description={item.description}
                ReadMoreButtonName={item.ReadMoreButtonName}
              />
            </div>
          ))}
        </div>
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
    }, // will be passed to the page component as props
  };
}
