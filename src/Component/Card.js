import React from 'react';
import { Link } from 'react-router-dom';

let onwards="onwards";
const Card = ({ content1,content2,content3,content4,content5,imageUrl }) => {
    return (
      <>
      <div className="card">
        <form>
          <tr><img src={imageUrl} className="card-image" /></tr>
          <div style={{backgroundColor:'#f2f2f2',height:'100px',textAlign:'justify'}}>
            <tr style={{fontSize:'15px',position:'relative',left:'10px'}}>{content1}</tr>
            <tr style={{position:'relative',top:'3px',left:'10px',fontWeight:"bold",fontSize:'15px'}}>{content2} <label style={{fontSize:'13px',color:'#616060',fontWeight:'light'}}>{onwards}</label></tr>
            <Link to='/Mghector'><tr  style={{position:'relative',left:'7px',fontSize:'15px',outline:'none',border:'none'}}><button className='btn' style={{color:'#0288D1'}}>{content3}</button></tr></Link>
            <Link to='/Mahindraxuv'><tr  style={{position:'relative',left:'0.1px',fontSize:'15px'}}><button className='btn' style={{color:'#0288D1'}}>{content4}</button></tr></Link>
            <Link to='/Mghector'><tr style={{position:'relative',right:'8px',fontSize:'15px'}}><button className='btn' style={{color:'#0288D1'}}>{content5}</button></tr></Link>
          </div>
        </form>
      </div>
       {/* <div className='flex p-[5px]' style={{borderColor:'black'}}>


      
<div className='flex flex-col bg-[#f2f2f2] border-slate-300 rounded-lg shadow-md w-[30%] m-6 '>
  <img src='https:imgd.aeplcdn.com/664x374/n/cw/ec/130583/hector-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80/' className='h-[70%]'/>
  <p className='pt-[5px] pl-[10px] pb-[5px]'>MG Hector</p>
  <p className='pt-[5px] pl-[10px] pb-[5px]'>Rs.15 Lakh</p>
  <a href='#' className='pt-[5px] pl-[10px] pb-[5px]'>show more</a>
  </div>



<div className='flex flex-col bg-[#f2f2f2] border-slate-200 rounded-lg shadow-md w-[30%] m-6 '>
  <img src='https:imgd.aeplcdn.com/664x374/n/cw/ec/130583/hector-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80/' className='h-[70%]'/>
  <p className='pt-[5px] pl-[10px] pb-[5px]'>MG Hector</p>
  <p className='pt-[5px] pl-[10px] pb-[5px]'>Rs.15 Lakh</p>
  <a href='#' className='pt-[5px] pl-[10px] pb-[5px]'>show more</a>
  </div>



<div className='flex flex-col bg-[#f2f2f2] border-slate-200 rounded-lg shadow-md w-[30%] m-6'>
  <img src='https:imgd.aeplcdn.com/664x374/n/cw/ec/130583/hector-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80/' className='h-[70%]'/>
  <p className='pt-[5px] pl-[10px] pb-[5px]'>MG Hector</p>
  <p className='pt-[5px] pl-[10px] pb-[5px]'>Rs.15 Lakh</p>
  <a href='#' className='pt-[5px] pl-[10px] pb-[5px]'>show more</a>
  </div>
</div>  */}
      </>
    );
  };
  

export default Card;  