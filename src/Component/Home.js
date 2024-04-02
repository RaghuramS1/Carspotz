import React ,{ useState,useRef,useEffect  } from 'react';
import Header from './Header';
import Card from './Card';

function Home() {

  const [showRow, setShowRow] = useState(false);
  const toggleRow = () => {
    setShowRow(!showRow);
  };


  const Brands = (
    <div className=''>
      <div className='overflow-x-auto'>
        <table className="border-collapse border border-slate-500 " width='100%'>
    <tr className='' align='center'>
      <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://www.carlogos.org/car-logos/skoda-logo.png'  width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50'>Skoda</label></td>
      <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://www.carlogos.org/car-logos/suzuki-logo.png'  width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Suzuki</label></td>
      <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://www.carlogos.org/car-logos/tata-logo.png'  width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Tata</label></td>
      <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://www.carlogos.org/car-logos/hyundai-logo.png'  width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Hyundai</label></td>
      <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://1000logos.net/wp-content/uploads/2020/04/Mahindra-Logo.png'  width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Mahindra</label></td>
      <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://www.financialexpress.com/wp-content/uploads/2021/01/Kia-new-logo_black_.jpg  ' width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Kia</label></td>
    </tr>
    <tr className=''  align='center'>
      <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://www.carlogos.org/car-logos/toyota-logo.png ' width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Toyota</label></td>
      <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://www.carlogos.org/car-logos/mg-logo.png' width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Mg</label></td>
      <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://www.carlogos.org/car-logos/honda-logo.png' width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Honda</label></td>
      <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://www.carlogos.org/car-logos/ferrari-logo.png' width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Ferrari</label></td>
      <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://www.carlogos.org/car-logos/bmw-logo.png' width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>BMW</label></td>
      <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://www.carlogos.org/car-logos/volkswagen-logo.png' width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Volkswagon</label></td>
    </tr>
    {showRow && (
      <>
      <tr className=''  align='center'>
          <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://cdn4.vectorstock.com/i/1000x1000/74/83/porsche-logo-brand-car-symbol-with-name-vector-46127483.jpg'   width="50.41" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Porsche</label></td>
          <td className='cursor-pointer border border-slate-700  pr-[23.55px] pl-[23.55px] pt-[16px] pb-[16px]'><img src='https://imgd.aeplcdn.com/0X0/n/cw/ec/11/brands/logos/mercedes-benz.jpg?v=1629973270530&q=80'   width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Mercedes-Benz</label></td>
          <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://1000logos.net/wp-content/uploads/2018/03/Lamborghini-logo.png'   width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Lamborghini</label></td>
          <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://logos-world.net/wp-content/uploads/2021/09/Jeep-Logo.png'   width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Jeep</label></td>
          <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://imgd.aeplcdn.com/0X0/n/cw/ec/37/brands/logos/volvo.jpg?v=1641478299001&q=80'   width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Volvo</label></td>
          <td className='cursor-pointer border border-slate-700   pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://listcarbrands.com/wp-content/uploads/2016/03/Jaguar-Logo-2012.png'   width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Jaguar</label></td>
        </tr>

      <tr className=''  align='center'>
      <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://imgd.aeplcdn.com/0X0/n/cw/ec/23/brands/logos/land-rover1647236056893.jpg?v=1647236057234&q=80'   width="50.41" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Land Rover</label></td>
      <td className='cursor-pointer border border-slate-700  pr-[23.55px] pl-[23.55px] pt-[16px] pb-[16px]'><img src='https://imgd.aeplcdn.com/0X0/n/cw/ec/18/brands/logos/audi.jpg?v=1630055874070&q=80'   width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Audi</label></td>
      <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://imgd.aeplcdn.com/0X0/cw/brands/logos/lexus.png?v=10&q=80'   width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Lexus</label></td>
      <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://imgd.aeplcdn.com/0X0/n/cw/ec/21/brands/logos/nissan.jpg?v=1631163973143&q=80'   width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Nissan</label></td>
      <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://imgd.aeplcdn.com/0X0/n/cw/ec/74/brands/logos/citroen1649763818937.jpg?v=1649763819072&q=80'   width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Citroen</label></td>
      <td className='cursor-pointer border border-slate-700   pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://imgd.aeplcdn.com/0X0/n/cw/ec/45/brands/logos/renault.jpg?v=1630057266767&q=80'   width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Renault</label></td>
    </tr>

      <tr className=''  align='center'>
      <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://imgd.aeplcdn.com/0X0/n/cw/ec/25/brands/logos/rolls-royce.jpg?v=1631164135042&q=80'   width="50.41" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Rolls-Royce</label></td>
      <td className='cursor-pointer border border-slate-700  pr-[23.55px] pl-[23.55px] pt-[16px] pb-[16px]'><img src='https://imgd.aeplcdn.com/0X0/cw/brands/logos/mini.png?v=10&q=80'   width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Mini</label></td>
      <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://imgd.aeplcdn.com/0X0/n/cw/ec/77/brands/logos/mclaren1649762557086.jpg?v=1649762557267&q=80'   width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>McLaren</label></td>
      <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://imgd.aeplcdn.com/0X0/cw/brands/logos/bugatti.png?v=10&q=80'   width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Bugatti</label></td>
      <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://imgd.aeplcdn.com/0X0/cw/brands/logos/force-motors.png?v=10&q=80'   width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Force Motors</label></td>
      <td className='cursor-pointer border border-slate-700   pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://imgd.aeplcdn.com/0X0/cw/brands/logos/aston-martin.png?v=10&q=80'   width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Aston Martin</label></td>
    </tr>
      </>
    )}     
    <tr className=''>
      <td colSpan="6"  align='center'>
        <button
          className=' text-[#0288D1] pt-[10px] pb-[10px] text-[13px] '
          onClick={() => {
            setShowRow(!showRow);
          }}
        >
         {showRow  ? 'View Less Brands' : 'View More Brands'}
        </button></td></tr>
</table>
      </div>
    </div>
  );

  const Budget=[

    <table className='border border-slate-500'>
            <tr>
              <label>
                <button><label>Under 5 Lakh</label></button>
              </label>
              <label>
                <button><label>Under 7 Lakh</label></button>
              </label>
              <label>
                <button><label>Under 10 Lakh</label></button>
              </label>
            </tr>
            <tr>
              <label>
                <button><label>Under 15 Lakh</label></button>
              </label>
              <label>
                <button><label>Under 20 Lakh</label></button>
              </label>
              <label>
                <button><label>Under 30 Lakh</label></button>
              </label>
            </tr>
          </table>
    ]
    let onwards=[
    <b>onwards</b>
    ];
    
    const Trending=[
      <table className="border-collapse border border-slate-500 " width='100%'>
    <tr className='' align='center'>
      <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://www.carlogos.org/car-logos/skoda-logo.png'  width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50'>Skoda</label>
        </td>
      <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://www.carlogos.org/car-logos/suzuki-logo.png'  width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Suzuki</label></td>
      <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://www.carlogos.org/car-logos/tata-logo.png'  width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Tata</label></td>
      <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://www.carlogos.org/car-logos/hyundai-logo.png'  width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Hyundai</label></td>
      <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://1000logos.net/wp-content/uploads/2020/04/Mahindra-Logo.png'  width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Mahindra</label></td>
      <td className='cursor-pointer border border-slate-700  pr-[52px] pl-[52px] pt-[16px] pb-[16px]'><img src='https://www.financialexpress.com/wp-content/uploads/2021/01/Kia-new-logo_black_.jpg  ' width="60" height="40"/><label className='text-[13px] text-[#6f6f6f]-50 '>Kia</label></td>
    </tr>
    </table>



    // <form><td>
      
    // <Card
    //     imageUrl="https:imgd.aeplcdn.com/664x374/n/cw/ec/130583/hector-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80/"
    //     content1="MG Hector"
    //     content2='Rs.15 Lakh</label>'
    //     content3='show more details'
    // />
    // </td><td>
    // <Card
    //     imageUrl="https:imgd.aeplcdn.com/664x374/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"
    //     content1="Mahindra XUV700"
    //     content2='Rs.14.02 Lakh</label>'
    //     content3='show more details'
    // />
    // </td><td>
    // <Card
    //     imageUrl="https:imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-20.jpeg?isig=0&q=80"
    //     content1="Toyota Fortuner"
    //     content2='Rs.33.43 Lakh</label>'
    //     content3='show more details'
    // />
    // </td>
    // </form>
    ]
    
    const budgetButtonRef = useRef(null);
    
    
    useEffect(() => {
      if (budgetButtonRef.current) {
        budgetButtonRef.current.focus();
      }
    }, []);
    
    const trendingButtonRef = useRef(null);
    useEffect(() => {
      if (trendingButtonRef.current) {
        trendingButtonRef.current.focus();
      }
    }, []);
    
    
    const [showBudgetTable, setShowBudgetTable] = useState(Budget);
    const [showBodyTable, setShowBodyTable] = useState(false);
    const [showFuelTable, setShowFuelTable] = useState(false);
    const [showTransmissionTable, setShowTransmissionTable] = useState(false);
    const [showSeatingTable, setShowSeatingTable] = useState(false);
    const [showTrendingCars, setShowTrendingCars] = useState(Trending);
    const [showPopularCars, setShowPopularCars] = useState(false);
    
    const handleEvent = (e) => {
      e.preventDefault(7000);
    };
    const displayBudgetTable = (e) => {
      e.preventDefault();
      setShowBudgetTable(true);
    };
    
    const hideBudgetTable = () => {
      setShowBudgetTable(false);
    };
    
    const displayBodyTable = (e) => {
      e.preventDefault();
      setShowBodyTable(true);
    };
    
    const hideBodyTable = () => {
      setShowBodyTable(false);
    };
    
    const displayFuelTable = (e) => {
      e.preventDefault();
      setShowFuelTable(true);
    };
    
    const hideFuelTable = () => {
      setShowFuelTable(false);
    };
    
    const displayTransmissionTable = (e) => {
      e.preventDefault();
      setShowTransmissionTable(true);
    };
    
    const hideTransmissionTable = () => {
      setShowTransmissionTable(false);
    };
    
    const displaySeatingTable = (e) => {
      e.preventDefault();
      setShowSeatingTable(true);
    };
    
    const hideSeatingTable = () => {
      setShowSeatingTable(false);
    };
    //Featured Cars
    const displayTrendingCars = (e) => {
      e.preventDefault();
      setShowTrendingCars(true);
    };
    
    const hideTrendingCars = () => {
      setShowTrendingCars(false);
    };
    const displayPopularCars = (e) => {
      e.preventDefault();
      setShowPopularCars(true);
    };
    
    const hidePopularCars = () => {
      setShowPopularCars(false);
    };
    
    
    
    const displayTable = (tableType) => {
      setShowBudgetTable(true);
      setShowBodyTable(false);
      setShowFuelTable(false);
      setShowTransmissionTable(false);
      setShowSeatingTable(false);
      setShowTrendingCars(true);
      setShowPopularCars(false);
     
    
      switch (tableType) {
       
        case 'body':
          setShowBodyTable(true);
          setShowBudgetTable(false);
          break;
        case 'fuel':
          setShowFuelTable(true);
          setShowBudgetTable(false);
          break;
        case 'transmission':
          setShowTransmissionTable(true);
          setShowBudgetTable(false);
          break;
        case 'seating':
          setShowSeatingTable(true);
          setShowBudgetTable(false);
          break;  
        case 'popular':
          setShowPopularCars(true);
          setShowTrendingCars(false);
          break;
          default:
          break;
      }
    };
    
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(true);
    };
    

  return (
    <div>
      <Header />
      {/* <div className='pl-[15%] pr-[15%] pt-40 bg-slate-30 min-h-[calc(100vh)]'>
        <p className='text-[20px] font-medium'>New Cars</p>
        <p className='pt-[15px] text-justify text-[#424242]'>Are you planning on buying a new car? Well, we know that with so many car options available out there, it gets really difficult to find a good car which suits your need. Hence, we have put together a complete list of new cars. Maruti Suzuki, Tata and Hyundai are the 3 most popular car brands. 
          These popular car brands cater to a wide spectrum of budgets and needs, offering a variety of cars from fuel-efficient hatchbacks to spacious SUVs. The 5 most popular cars are Maruti Suzuki Fronx, Mahindra Scorpio N, Tata Punch, Mahindra Thar and Hyundai Creta.
           Explore the complete list of cars by exploring different brands or by applying multiple filters such as budget, fuel type, body type etc. You can find the car that suits you best from the list of cars below.  
        </p><br/><br/>
        <p className='text-[20px] font-medium'>ALL Brands</p>
        <div className='text-justify text-[#424242] pt-[15px]'>{Brands}</div><br/><br/>
        <p className='text-[20px] font-medium'>Find The Cars Of Your Choice</p> 
        <p className='pt-[15px] flex gap-[10%] text-justify text-[#424242]'>
         <label className='cursor-pointer'>BODY TYPE</label> 
         <label className='cursor-pointer'>FUEL TYPE</label> 
         <label className='cursor-pointer'>TRANSMISSION</label> 
         <label className='cursor-pointer'>SEATING CAPACITY</label> 
        </p> */}
              
        {/* <p className='pt-[15px] flex gap-[10%] text-[#424242]'>
        <button ref={budgetButtonRef}  onClick={(e) => {
             handleEvent(e);
             displayTable("budget");
           }}
         >
          <label className='cursor-pointer'>BUDGET</label>
         
         </button>
       <label>      
       <label  onClick= {(e) => { handleEvent(e); displayTable('body');}}  >
         BODY TYPE
       </label></label>
       <label>
       <button onClick={(e)=> {handleEvent(e); displayTable('fuel');}}>
       FUEL TYPE
     </button></label>
     <label>
     <button onClick={(e)=> {handleEvent(e); displayTable('transmission');}}>
     TRANSMISSION
     </button></label>
     <label>
     <button onClick={(e)=> {handleEvent(e); displayTable('seating');}}>
     SEATING CAPACITY
     </button></label>
   </p>
 <br/>
   <p className=''>
     {showBudgetTable && (
       <table className='border border-slate-500 bg-[#f2f2f2]'  width='100%'>
       <tr className=''>         
           <td className='p-[29px]' align='center'><label className='border border-slate-500 p-[12px] rounded-[50px] bg-[#fafafa]'>Under 5 Lakh</label></td>
           <td className='p-[29px]' align='center'><label className='border border-slate-500 p-[12px] rounded-[50px] bg-[#fafafa]'>Under 6 Lakh</label></td>
           <td className='p-[29px]' align='center'><label className='border border-slate-500 p-[12px] rounded-[50px] bg-[#fafafa]'>Under 7 Lakh</label></td>
           <td className='p-[29px]' align='center'><label className='border border-slate-500 p-[12px] rounded-[50px] bg-[#fafafa]'>Under 8 Lakh</label></td>
           <td className='p-[29px]' align='center'><label className='border border-slate-500 p-[12px] rounded-[50px] bg-[#fafafa]'>Under 10 Lakh</label></td>
       </tr>
       <tr>
         
           <td className='p-[29px]' align='center'><label className='border border-slate-500 p-[12px] rounded-[50px] bg-[#fafafa]'>Under 15 Lakh</label></td>
           <td className='p-[29px]' align='center'><label className='border border-slate-500 p-[12px] rounded-[50px] bg-[#fafafa]'>Under 20 Lakh</label></td>
           <td className='p-[29px]' align='center'><label className='border border-slate-500 p-[12px] rounded-[50px] bg-[#fafafa]'>Under 25 Lakh</label></td>
           <td className='p-[29px]' align='center'><label className='border border-slate-500 p-[12px] rounded-[50px] bg-[#fafafa]'>Under 30 Lakh</label></td>
           <td className='p-[29px]' align='center'><label className='border border-slate-500 p-[12px] rounded-[50px] bg-[#fafafa]'>Luxury Cars</label></td>
       </tr>
     </table>
     )}
    
     {showBodyTable && (
       <table className="border-collapse border border-slate-500 bg-[#f2f2f2]" width='100%'>
       <tr className='' align='center'>
         <td className='border border-slate-700  pr-[52px] pl-[52px] pt-[36px] pb-[36px]'><img src='https://imgd.aeplcdn.com/0x0/cw/body/svg/suv_clr.svg?v=1'  width="70" height="50"/><label className='text-[13px] text-[#6f6f6f]-50'>SUV</label></td>
         <td className='border border-slate-700  pr-[52px] pl-[52px] pt-[36px] pb-[36px]'><img src='https://imgd.aeplcdn.com/0x0/cw/body/svg/sedan_clr.svg?v=1'  width="70" height="50"/><label className='text-[13px] text-[#6f6f6f]-50 '>Sedan</label></td>
         <td className='border border-slate-700  pr-[52px] pl-[52px] pt-[36px] pb-[36px]'><img src='https://imgd.aeplcdn.com/0x0/cw/body/svg/hatchback_clr.svg?v=1'  width="70" height="50"/><label className='text-[13px] text-[#6f6f6f]-50 '>Hatchback</label></td>
       </tr>
       
       <tr className='' align='center'>
         <td className='border border-slate-700  pr-[52px] pl-[52px] pt-[36px] pb-[36px]'><img src='https://imgd.aeplcdn.com/0x0/cw/body/svg/suv_clr.svg?v=1'  width="70" height="50"/><label className='text-[13px] text-[#6f6f6f]-50'>Compact SUV</label></td>
         <td className='border border-slate-700  pr-[52px] pl-[52px] pt-[36px] pb-[36px]'><img src='https://imgd.aeplcdn.com/0x0/cw/body/svg/compactsedan_clr.svg?v=1'  width="70" height="50"/><label className='text-[13px] text-[#6f6f6f]-50 '>Compact Sedan</label></td>
         <td className='border border-slate-700  pr-[52px] pl-[52px] pt-[36px] pb-[36px]'><img src='https://imgd.aeplcdn.com/0x0/cw/body/svg/suv_clr.svg?v=1'  width="70" height="50"/><label className='text-[13px] text-[#6f6f6f]-50 '>MUV</label></td>
       </tr>

       <tr className='' align='center'>
         <td className='border border-slate-700  pr-[52px] pl-[52px] pt-[36px] pb-[36px]'><img src='https://imgd.aeplcdn.com/0x0/cw/body/svg/convertible_clr.svg?v=1'  width="70" height="50"/><label className='text-[13px] text-[#6f6f6f]-50'>Convertible</label></td>
         <td className='border border-slate-700  pr-[52px] pl-[52px] pt-[36px] pb-[36px]'><img src='https://imgd.aeplcdn.com/0x0/cw/body/svg/coupe_clr.svg?v=1'  width="70" height="50"/><label className='text-[13px] text-[#6f6f6f]-50 '>Coupe</label></td>
         <td className='border border-slate-700  pr-[52px] pl-[52px] pt-[36px] pb-[36px]'><img src='https://imgd.aeplcdn.com/0x0/cw/body/svg/wagon_clr.svg?v=1'  width="70" height="50"/><label className='text-[13px] text-[#6f6f6f]-50 '>Station Wagon</label></td>
       </tr>
      </table>
     )}

     {showFuelTable && (
      <table className="border-collapse border border-slate-500 bg-[#f2f2f2]" width='100%'>
      <tr className='' align='center'>
       <td className='border border-slate-700  pr-[52px] pl-[52px] pt-[36px] pb-[36px]'>Petrol</td>
       <td className='border border-slate-700  pr-[52px] pl-[52px] pt-[36px] pb-[36px]'>Diesel</td>
       <td className='border border-slate-700  pr-[52px] pl-[52px] pt-[36px] pb-[36px]'>CNG</td>
      </tr>
      <tr className='' align='center'>
       <td className='border border-slate-700  pr-[52px] pl-[52px] pt-[36px] pb-[36px]'>Electric</td>
       <td className='border border-slate-700  pr-[52px] pl-[52px] pt-[36px] pb-[36px]'>Hybrid</td>
      </tr>
     </table>
     )}

     {showTransmissionTable && (
 <table className='border border-slate-500 bg-[#f2f2f2]' width='100%'>
      <tr className='' align='center'>
         <td className='border border-slate-700  pr-[40px] pl-[40px] pt-[25px] pb-[25px]'><img src='https://imgd.aeplcdn.com/0x0/cw/transmission/svg/automatic_clr.svg?v3.0'  width="50" height="50"/><label className='text-[13px] text-[#6f6f6f]-50'>Automatic</label></td>
         <td className='border border-slate-700  pr-[40px] pl-[40px] pt-[25px] pb-[25px]'><img src='https://imgd.aeplcdn.com/0x0/cw/transmission/svg/manual_clr.svg?v3.0'  width="50" height="50"/><label className='text-[13px] text-[#6f6f6f]-50 '>Manual</label></td>
       </tr>
     </table>
   )}
   {showSeatingTable && (
 <table className='border border-slate-500 bg-[#f2f2f2]' width='100%'>
        <tr className=''>         
           <td className='p-[29px]' ><label className='border border-slate-500 pr-[17px] pl-[17px] pt-[7px] pb-[7px]  rounded-[20px] bg-[#fafafa]'>Petrol</label></td>
           <td className='p-[29px]' ><label className='border border-slate-500 pr-[17px] pl-[17px] pt-[7px] pb-[7px]  rounded-[20px] bg-[#fafafa]'>Diesel</label></td>
           <td className='p-[29px]' ><label className='border border-slate-500 pr-[17px] pl-[17px] pt-[7px] pb-[7px]  rounded-[20px] bg-[#fafafa]'>CNG</label></td>
           <td className='p-[29px]' ><label className='border border-slate-500 pr-[17px] pl-[17px] pt-[7px] pb-[7px]  rounded-[20px] bg-[#fafafa]'>Electric</label></td>
           <td className='p-[29px]' ><label className='border border-slate-500 pr-[17px] pl-[17px] pt-[7px] pb-[7px]  rounded-[20px] bg-[#fafafa]'>Hybrid</label></td>
       </tr>
     </table>
   )}
   </p><br/><br/>
   <p className='text-[20px] font-medium'>Featured Cars</p><br/>
   <p>
     <div className='pt-[15px] flex gap-[10%] text-[#424242]'>
     <button onClick={(e) => { handleEvent(e); displayTable('trending'); }}>
       TRENDING
     </button>
     <button onClick={(e) => { handleEvent(e); displayTable('popular'); }}>
       POPULAR
     </button>
     </div>
 <br/><br/>
   {showTrendingCars && (
     <form width='100%'><td>
     <Card
         imageUrl="https:imgd.aeplcdn.com/664x374/n/cw/ec/130583/hector-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80/"
         content1="MG Hector"
         content2='Rs.15 Lakh'
         content3='show more'
   />
     </td><td>
     <Card
         imageUrl="https:imgd.aeplcdn.com/664x374/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"
         content1="Mahindra XUV700"
         content2='Rs.14.02 Lakh'
         content4='show more'
   />
    </td><td>
     <Card
         imageUrl="https:imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-20.jpeg?isig=0&q=80"
         content1="Toyota Fortuner"
         content2='Rs.33.43 Lakh'
         content5='show more'
   />
     </td>
     </form>
   )}
   {showPopularCars && (
     <form><td>
     
     <Card
        imageUrl="https:imgd.aeplcdn.com/664x374/n/cw/ec/54399/swift-exterior-right-front-three-quarter-64.jpeg?isig=0&q=80"
        content1="Maruti Suzuki Swift"
        content2='Rs. 5.99 Lakh'
        content3='show more details'
  />
    </td><td>
    <Card
        imageUrl="https:imgd.aeplcdn.com/664x374/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80"
        content1="Tata Nexon"
        content2='Rs. 8.10 Lakh'
        content3='show more details'
  />
   </td><td>
   <Card
        imageUrl="https:imgd.aeplcdn.com/664x374/n/cw/ec/112947/wagon-r-2022-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"
        content1="Maruti Suzuki WagonR"
        content2='Rs. 5.55 Lakh'
        content3='show more details'
  />
    </td>
    </form>
   )}
        </p>
         */}
      {/* </div> */}
    </div>
  );
}

export default Home;
