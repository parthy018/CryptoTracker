import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';


const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;
const { Option } = Select;

const News = () => {
  const [newsCategory, setNewsCategory] = useState('cryptocurrency');
  // const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews, isLoading, error } = useGetCryptoNewsQuery(newsCategory );
  console.log(cryptoNews); 
  let newsData = [cryptoNews.data]; 
  if (!cryptoNews?.value) return "Limit error";

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;
  // if (!Array.isArray(newsData) || newsData.length === 0) {
  //   return <div>loading...</div>;
  // }

 

  // If cryptoNews exists and is an object with a 'data' propert


  return (
    <Row gutter={[24, 24]}>
      {newsData.map((newsItem, index) => (
        <div key={index}>
          console.log(newsItem);
          <h2>{newsItem.title}</h2>
          <p>{newsItem.published_datetime_utc}</p>
          <a href={newsItem.link} target="_blank" rel="noopener noreferrer">
            <img src={newsItem.photo_url} alt={newsItem.title} />
          </a>
          <p>Source: <a href={newsItem.source_url} target="_blank" rel="noopener noreferrer">{newsItem.source_url}</a></p>
          <img src={newsItem.source_logo_url} alt="Source Logo" />
          <img src={newsItem.source_favicon_url} alt="Source Favicon" />
        </div>
      ))}

    </Row>
  );
};

export default News;


/* {!simplified && (
       <Col span={24}>
         <Select
           showSearch
           className="select-news"
           placeholder="Select a Crypto"
           optionFilterProp="children"
           onChange={(value) => setNewsCategory(value)}
           filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
         >
           <Option value="cryptocurency">Cryptocurrency</Option>
           {cryptoNews?.data?.coins?.map((currency) => <Option value={currency.name}>{currency.name}</Option>)}
         </Select>
       </Col>
     )} */



// import React from 'react'
// import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
// import moment from 'momment';
// import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

// const { Text, Title } = Typography;
// const { Option } = Select;
// function News({simplified}) {
//   const {data:cryptoNews}=useGetCryptoNewsQuery({newsCategory:'Cryptocurrency',count:simplified?10:100});
//   console.log(cryptoNews);
//   return (
//     <div>News</div>
//   )
// }

// export default News