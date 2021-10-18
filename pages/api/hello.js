// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { data } from "autoprefixer";

export default function handler(req, res) {
  const data = {
    "about": [
      {
        "smallTitle": "ABOUT COMPANY",
        "titleOne": "WE PROVIDE THE BEST ARCHITECTS",
        "description":
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, simply free text by injected humour, or randomised.",
        "commpassImageUrl":
          "https://cdn3.iconfinder.com/data/icons/real-estate-line-12/100/33-house_sizes_ruler_House_Measurement_ArchitectConstruction-512.png",
        "title": "There are many variations passages of available.",
        "housemapImageUrl":
          "https://cdn3.iconfinder.com/data/icons/real-estate-line-12/100/10-architecture_house_Blueprint_Construction_PlanHouse_Sizereal_estateProperty-512.png",
        "anotherTitle": "There are many variations passages of available."
      }
    ],

    "professionalItem": [
      {
        "imageUrl":
          "https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287__480.jpg",
        "title": "Interior Design",
        "description":
          "Lorem ipsum dolor sit amet, consectetur notted adipiscing elit sed do.",
        "ReadMoreButtonName": "READ MORE"
      },
      {
        "imageUrl":
          "https://cdn.pixabay.com/photo/2020/11/08/00/17/waterfall-5722620__340.jpg",
        "title": "Architecture",
        "description":
          "Lorem ipsum dolor sit amet, consectetur notted adipiscing elit sed do.",
        "ReadMoreButtonName": "READ MORE"
      },
      {
        "imageUrl":
          "https://cdn.pixabay.com/photo/2021/09/17/12/12/coffee-6632524__340.jpg",
        "title": "Exterior Design",
        "description":
          "Lorem ipsum dolor sit amet, consectetur notted adipiscing elit sed do.",
        "ReadMoreButtonName": "READ MORE"
      },
      {
        "imageUrl":
          "https://cdn.pixabay.com/photo/2020/07/30/10/26/asian-woman-5450041__340.jpg",
        "title": "Furniture & Decor",
        "description":
          "Lorem ipsum dolor sit amet, consectetur notted adipiscing elit sed do.",
        "ReadMoreButtonName": "READ MORE"
      },
      {
        "imageUrl":
          "https://cdn.pixabay.com/photo/2015/06/01/00/20/man-792821__340.jpg",
        "title": "Designing Solutions",
        "description":
          "Lorem ipsum dolor sit amet, consectetur notted adipiscing elit sed do.",
        "ReadMoreButtonName": "READ MORE"
      },
      {
        "imageUrl":
          "https://cdn.pixabay.com/photo/2021/09/29/13/17/redwood-national-park-6667452__340.jpg",
        "title": "Custom Solution",
        "description":
          "Lorem ipsum dolor sit amet, consectetur notted adipiscing elit sed do.",
        "ReadMoreButtonName": "READ MORE"
      }
    ],
    "whyWhereitem": [
      {
        "text": "Why Should You Choose Kitecs?",
        "imageUrl":
          "https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756__340.jpg"
      },
      {
        "text": "We’re Award Winnings Studio",
        "imageUrl":
          "https://cdn.pixabay.com/photo/2015/04/20/13/30/kitchen-731351__340.jpg"
      }
    ],
    "projectInfoItem": [
      {
        "imagUrl":
          "https://cdn.pixabay.com/photo/2021/08/23/04/02/woman-6566600__340.jpg",
        "number": "6,816",
        "text": "PROJECT SUCCESS"
      },
      {
        "imagUrl":
          "https://cdn.pixabay.com/photo/2020/11/08/00/17/waterfall-5722620__340.jpg",
        "number": "916",
        "text": "TEAM MEMBERS"
      },
      {
        "imagUrl":
          "https://cdn.pixabay.com/photo/2021/10/03/04/21/woman-6676901__340.jpg",
        "number": "218",
        "text": "SERVICE PROVIDING"
      },
      {
        "imagUrl":
          "https://cdn.pixabay.com/photo/2020/11/24/11/24/sika-deer-5772242__340.jpg",
        "number": "9,660",
        "text": "HAPPY CUSTOMERS"
      }
    ],
    "pricingPlan": [
      {
        "title": "Interior Sketch",
        "description":
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
      },
      {
        "title": "3D Modeling",
        "description":
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
      },
      {
        "title": "Room Measurement",
        "description":
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
      }
    ],

    "businessCard": {
      "standardBusiness": {
        "dolorSign": "$",
        "price": "60",
        "month": "/MONTHLY",
        "title": "Standard Business",
        "visualization": "3D Visualization",
        "planning": "Planning Solution",
        "selection": "Selection of Materials",
        "construction": "10 Construction Drawings",
        "ReadMoreButtonName": "CHOOSE PLAN",
      },
      "largeBusiness": {
        "dolorSign": "$",
        "price": "89",
        "month": "/MONTHLY",
        "title": "Standard Business",
        "visualization": "3D Visualization",
        'planning': "Planning Solution",
        "selection": "Selection of Materials",
        "construction": "15 Construction Drawings",
        "ReadMoreButtonName": "CHOOSE PLAN",
      },
    },
  };

  res.status(200).json(data);
}
