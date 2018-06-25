import comment from "./comment.svg";
import retweet from "./retweet.svg";
import like from "./like.svg";
import mail from "./mail.svg";
import likeActive from "./likeActive.svg";
import image from "./Image.png";
import future from "./tweetimage.png";

export const tweet = [
  {
    pinned: true,
    name: "Every Interaction",
    nickName: "@EveryInteract",
    timeTweet: "2 Mar 2015",
    text: "We`ve made some more resources for all you wonderful #design folk",
    site: "everyinteracion.com/resources/ #webdesign #UI",
    img1: image,
    action: [
      {
        img: comment,
        count: 0,
        active: false
      },
      {
        img: retweet,
        count: 17,
        active: false
      },
      {
        img: likeActive,
        count: 47,
        active: true
      },
      {
        img: mail,
        count: 0,
        active: false
      }
    ]
  },
  {
    pinned: false,
    name: "Every Interaction",
    nickName: "@EveryInteract",
    timeTweet: "23h",
    text: "Our new website concept; Taking you from... @ Every Interaction",
    site: "instagram.com/p/BNFGrhfBP3M",
    img1: "",
    action: [
      {
        img: comment,
        count: 1,
        active: false
      },
      {
        img: retweet,
        count: 4,
        active: false
      },
      {
        img: like,
        count: 2,
        active: false
      },
      {
        img: mail,
        count: 0,
        active: false
      }
    ]
  },
  {
    pinned: false,
    name: "Every Interaction",
    nickName: "@EveryInteract",
    timeTweet: "Nov 18",
    text:
      "Variable web fonts are coming, and will open a world of opportunities for weight use online",
    site: "",
    img1: future,
    action: [
      {
        img: comment,
        count: 0,
        active: false
      },
      {
        img: retweet,
        count: 0,
        active: false
      },
      {
        img: like,
        count: 0,
        active: false
      },
      {
        img: mail,
        count: 0,
        active: false
      }
    ]
  }
];
