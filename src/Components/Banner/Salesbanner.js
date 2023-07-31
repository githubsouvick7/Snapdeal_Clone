import ReactCaroussel from "react-caroussel";
import "react-caroussel/dist/index.css";
import "./Banner.css";

const sliderItems = [
    {
        id: 1,
        img: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/84b6a214-9eb3-49eb-9f9d-72cec56ec5d71659019908592-Indian-Wear_DK--1-.jpg",
    },
    {
        id: 2,
        img: "https://e0.pxfuel.com/wallpapers/606/84/desktop-wallpaper-ecommerce-website-design-company-noida-e-commerce-banner-design-e-commerce.jpg",
    },
    {
        id: 3,
        img: "https://previews.123rf.com/images/pattarasin/pattarasin1709/pattarasin170900006/85482183-sale-banner-template-design-big-sale-special-offer-end-of-season-special-offer-banner-vector.jpg",
    },
    {
        id: 4,
        img: "https://www.boldmonk.in/cdn/shop/collections/men_s_shirt.webp?v=1668845720",
    },
    {
        id: 4,
        img: "https://marketplace.canva.com/EAFLtJa7Jqo/1/0/1600w/canva-red-creative-sale-promo-banner-A_Te0b9wP9o.jpg",
    }
];
export default function Salesbanner() {
    return (
        <div className="Container">
            <ReactCaroussel
                infinite={true}
                autoplay={true}
                speed={4}
                display={{
                    dots: true,
                    arrows: true
                }}
            >
                {
                    sliderItems.map((item, index) => {
                        return (<>
                            <img className="img" height={500} src={item.img} alt="" />
                        </>)
                    })
                }
            </ReactCaroussel>
        </div>
    );
}
