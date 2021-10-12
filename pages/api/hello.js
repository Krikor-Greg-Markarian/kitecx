// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { data } from "autoprefixer";

export default function handler(req, res) {
  const data = {
    about: [
      {
        smallTitle: "ABOUT COMPANY",
        titleOne: "WE PROVIDE THE BEST ARCHITECTS",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, simply free text by injected humour, or randomised.",
        commpassImageUrl:
          "https://cdn.pixabay.com/photo/2017/11/13/22/12/compass-2946959__340.jpg",
        title: "There are many variations passages of available.",
        housemapImageUrl:
          "https://cdn.pixabay.com/photo/2020/03/01/00/55/compass-4891499__340.jpg",
        anotherTitle: "There are many variations passages of available.",
      },
    ],

    professionalItem: [
      {
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287__480.jpg",
        title: "Interior Design",
        description:
          "Lorem ipsum dolor sit amet, consectetur notted adipiscing elit sed do.",
        ReadMoreButtonName: "READ MORE",
      },
      {
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287__480.jpg",
        title: "Architecture",
        description:
          "Lorem ipsum dolor sit amet, consectetur notted adipiscing elit sed do.",
        ReadMoreButtonName: "READ MORE",
      },
      {
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287__480.jpg",
        title: "Exterior Design",
        description:
          "Lorem ipsum dolor sit amet, consectetur notted adipiscing elit sed do.",
        ReadMoreButtonName: "READ MORE",
      },
      {
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287__480.jpg",
        title: "Furniture & Decor",
        description:
          "Lorem ipsum dolor sit amet, consectetur notted adipiscing elit sed do.",
        ReadMoreButtonName: "READ MORE",
      },
      {
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287__480.jpg",
        title: "Designing Solutions",
        description:
          "Lorem ipsum dolor sit amet, consectetur notted adipiscing elit sed do.",
        ReadMoreButtonName: "READ MORE",
      },
      {
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287__480.jpg",
        title: "Custom Solution",
        description:
          "Lorem ipsum dolor sit amet, consectetur notted adipiscing elit sed do.",
        ReadMoreButtonName: "READ MORE",
      },
    ],
  };

  res.status(200).json(data);
}
