import React from 'react';
import { Routes,Route,Link } from 'react-router-dom';
import { Layout,Typography,Space } from 'antd';
import {Navbar,Exchanges,Homepage,CryptoDetails,Cryptocurrencies,News} from './components'
import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='navbar'>
         <Navbar />
      </div>
      <div className='main'>
          <Layout>
            <div className='routes'>
                  <Routes>
                    <Route path='/' element={<Homepage/>} />
                    <Route path="/exchanges" element={ <Exchanges/>} />
                    <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
                    <Route path='/crypto/:coinId' element={<CryptoDetails/> }/>
                    <Route path='/news' element={<News />}/>
                  
                  </Routes>
            </div>
          </Layout>
  
          <div className='footer'>
                  <Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
                Cryptotracker <br />
                  All rights reserverd
                </Typography.Title>
                <Space>
                  <Link to='/'>Home</Link>
                  <Link to='/exchanges'>Exchanges</Link>
                  <Link to='/news'>News</Link>
                </Space>
          </div>
      </div>
    </div>
  );
}

export default App;


  //  <Route exact path="/">
  //                       <Homepage/>
  //                   </Route>
  //                   <Route exact path="/exchanges">
  //                       <Exchanges/>
  //                   </Route>
  //                   <Route exact path="/cryptocurrencies">
  //                       <Cryptocurrencies/>
  //                   </Route>
  //                   <Route exact path="/crypto/:coinId">
  //                       <CryptoDetails/>
  //                   </Route>
  //                   <Route exact path="/news">
  //                       <News/>
  //                   </Route> */