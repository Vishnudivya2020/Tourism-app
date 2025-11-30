import React from 'react';
import Navbar from '../HomePage/Navbar/nav';
import styles from "./Gallery.module.css"; 


export const Gallery = () => {
  const images =[
    {
      "State":"Delhi",
      "Image1":"https://www.mistay.in/travel-blog/content/images/2020/07/travel-4813658_1920.jpg",
      "Image2":"https://www.tripsavvy.com/thmb/EamG8gwnVK1VCqLrqtC1lGuLGPg=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-148743699-5b514725c9e77c005b2e61bd.jpg",
      "Image3":"https://www.tripsavvy.com/thmb/pAlZ4kx0tM9HFLmgkYbqMlfxaok=/2116x1417/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-846359134-5b515328c9e77c003738e40c.jpg",
      "Image4":"https://fthmb.tqn.com/Vqe5JXuW_7_Ch9ccncpyLeHrthI=/960x0/filters:no_upscale()/GettyImages-531732818-592d24ec3df78cbe7e956e68.jpg",
      "Image5":"https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661186669/top-10-tourist-attractions-in-india-taj-mahal-building/top-10-tourist-attractions-in-india-taj-mahal-building-1120x732.jpg"
    },
     {
    "State": "Bangalore",
    "Image1": "https://bangalore.ind.in/wp-content/uploads/2021/02/Bangalore-Palace.jpg",
    "Image2": "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=2/tour_img/5d9f6cf0c6832.jpeg",
    "Image3": "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=2/tour_img/ca6c5432cb022a665861d1c7fef7bbf1d3ff3e851209398d1afe7b76848d9142.jpg",
    "Image4": "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=2/tour_img/4bbf106f4544c.png",
    "Image5": "https://www.tourmyindia.com/socialimg/ranthambore-national-park.jpg"
  },
  {
    "State": "Kerala",
    "Image1": "https://4.bp.blogspot.com/-j1rGJ7HQn1M/UtfKuF3yPRI/AAAAAAAAEVU/N2lUwaTodtw/s1600/alappuzha-in-kerala.jpg",
    "Image2": "https://wallpapercave.com/wp/wp2649841.jpg",
    "Image3": "https://www.tripsavvy.com/thmb/PYvXYeGd8vVa2RHJONCQHCLfLfE=/2121x1414/filters:fill(auto,1)/tea-plantations-536270487-5c4102c146e0fb00017e287c.jpg",
    "Image4": "https://static-blog.treebo.com/wp-content/uploads/2023/12/Thiruvananthapuram-1024x675.jpg",
    "Image5": "https://irisholidays.com/keralatourism/wp-content/uploads/2018/12/athirapally-falls-kerala.jpg"
  },
  {
    "State": "Kashmir",
    "Image1": "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/02/Betaab-Valley-Pahalgam-Kashmir3.jpg?resize=768%2C616&ssl=1",
    "Image2": "https://wallpapercave.com/wp/wp2678229.jpg",
    "Image3": "https://getwallpapers.com/wallpaper/full/4/3/a/842545-kashmir-wallpaper-1920x1080-for-mac.jpg",
    "Image4": "https://i.pinimg.com/736x/16/c4/4d/16c44dcf176b2a707ac812e7977e3d0b.jpg",
    "Image5": "https://wallpapercave.com/wp/wp2678269.jpg"
  },
   {
    "State": "Goa",
    "Image1": "https://www.indiatravel.app/wp-content/uploads/2024/03/places-to-visit-goa-1024x585.jpg",
    "Image2": "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Dudhsagar-Waterfalls.jpg",
    "Image3": "https://goa.tours/wp-content/uploads/2022/02/india-travels-gda952ceac_1920.jpg",
    "Image4": "https://c.myholidays.com/blog/blog/content/images/2021/04/Goa-india.jpg",
    "Image5": "https://zenseresort.com/wp-content/uploads/2023/06/goa-in-monsoon-season.jpg"
  },
  {
    "State": "Meghalaya",
    "Image1": "https://assets-news.housing.com/news/wp-content/uploads/2022/09/12220317/Best-places-to-visit-in-July-in-India.jpg",
    "Image2": "https://assets.shortpedia.com/Voices/wp-content/uploads/2021/06/Meghalaya-1200x900-1.jpg",
    "Image3": "https://live.staticflickr.com/5529/9313176062_a1ed81320b_b.jpg",
    "Image4": "https://buddhistcavesindia.com/wp-content/uploads/2021/11/badse3-939x1024.jpg",
    "Image5": "https://indiain360.com/wp-content/uploads/2021/02/dawki-tour-cabs.jpg"
  },
  {
    "State": "Tamil Nadu",
    "Image1": "https://wordzz.com/wp-content/uploads/2023/04/Srirangam-Temple.jpeg",
    "Image2": "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/07/Mahabalipuram.jpg",
    "Image3": "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/popular-destinations-1655295598_ee43e7b2e5c8894ecdcf.jpg",
    "Image4": "https://www.indiatourism.guide/wp-content/uploads/2023/04/tn.webp",
    "Image5": "https://static.tnn.in/thumb/msid-113849831,thumbsize-88372,width-1280,height-720,resizemode-75/113849831.jpg"
  },
  {
    "State": "Andaman & Nicobar",
    "Image1": "https://cdn.suwalls.com/wallpapers/nature/cayo-levantado-9527-1920x1080.jpg",
    "Image2": "https://pantimearabia.com/wp-content/uploads/2022/08/10e9914e-0fc1-436e-87c0-3868b390a97d.jpg",
    "Image3": "https://www.touristsecrets.com/wp-content/uploads/2023/10/the-top-8-chillest-places-in-asia-1696215048.jpg",
    "Image4": "https://onlineandaman.in/wp-content/uploads/2016/03/shutterstock_1064304320.jpg",
    "Image5": "https://www.shikhar.com/blog/wp-content/uploads/2019/06/Diglipur-Andamans-highest-peak.jpg"
  },
  {
    "State": "Puducherry",
    "Image1": "https://4.bp.blogspot.com/-2E3TvbSa224/XA60uuseyNI/AAAAAAABPWM/hlZyeSIXcKcT8XbSNMvBgGKnVIkYrN5HQCLcBGAs/s1600/_IGP3438.JPG",
    "Image2": "https://voiceofadventure.com/wp-content/uploads/2022/08/front-view-golden-globe-image-pondicherry_694820-20.jpg",
    "Image3": "https://i.pinimg.com/originals/dc/06/d7/dc06d7022556b19ce18aac9c7b031519.jpg",
    "Image4": "https://localtourism.in/wp-content/uploads/2024/02/Exploring_Mangaluru_dp3cex.webp",
    "Image5": "https://media2.thrillophilia.com/images/photos/000/091/346/original/1568440112_shutterstock_695128300.jpg?gravity=center&width=752&height=450&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true"
  },
  ]
  return (
    <>
    <div>
     <Navbar /> 
    </div>
   
      {images.map((stateData,stateIndex) =>(
        <div key={stateIndex} className={styles.stateSection}>
          <h2>{stateData.State}</h2>

          <div className={styles.imageGrid}>
            {Object.keys(stateData).map((key,index) =>(
              key.includes("Image") && (
                <img 
                key={index}
                src={stateData[key]}
                alt ={`${stateData.State}${key}`}
                className={styles.image} />
              )
            ))}
          </div>
        </div>
      ))}
      </>
  );
};
