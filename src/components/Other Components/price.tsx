import React, { useState } from 'react';

interface Pricing {
  category: string;
  price: string;
  period: string;
  Tagline: string;
  Recommanded?: string;
}

const PriceData: { [key: string]: Pricing[] }[] = [
  {
    Monthly: [
      {
        category: 'Starter',
        price: '499',
        period: 'Month',
        Tagline: 'Perfect for growing business',
      },
      {
        category: 'Growth',
        price: '999',
        period: 'Month',
        Tagline: 'Ideal for Established Enterprises',
        Recommanded: 'Most Popular',
      },
      {
        category: 'Pro',
        price: '1299',
        period: 'Month',
        Tagline: 'Ultimate Solution for Innovators',
      },
    ],
  },
  {
    Quarterly: [
      {
        category: 'Starter',
        price: '1499',
        period: 'Quarter',
        Tagline: 'Perfect for growing business',
      },
      {
        category: 'Growth',
        price: '2999',
        period: 'Quarter',
        Tagline: 'Ideal for Established Enterprises',
        Recommanded: 'Most Popular',
      },
      {
        category: 'Pro',
        price: '3199',
        period: 'Quarter',
        Tagline: 'Ultimate Solution for Innovators',
      },
    ],
  },
];

interface DivProps {
  data: Pricing;
  ind: number;
}

const Div: React.FC<DivProps> = ({ data, ind }) => {
  return (
    <div
      className={`h-[300px] w-[280px] ${
        ind === 1 ? 'bg-[#27363d] text-[#fff]' : 'bg-[#f8f8f8] text-[#27363d] shadow-custom'
      } rounded-[40px] text-left p-[30px] relative ${
        ind === 0 ? 'rotate-[-8deg] top-[10px]' : ind === 2 ? 'rotate-[8deg] top-[10px]' : ''
      }`}
    >
      <p className="text-[33px]">{data.category}</p>
      <p className="text-[19px]">
        <span className="relative bottom-[11px] right-[5px] text-[20px]">₹</span>
        <span className={`text-[40px] ${ind === 1 ? 'text-[#edff71]' : ''}`}>{data.price}</span>/
        {data.period}
      </p>
      <p className="absolute bottom-[30px] text-[16px]">{data.Tagline}</p>
    </div>
  );
};

const Price: React.FC = () => {
  const [count, setCount] = useState(0);
  const [period, setPeriod] = useState<Pricing[]>(PriceData[0].Monthly);

  return (
    <>
      <div className="text-center w-screen flex flex-col items-center py-[50px] font-[poppins] ">
        <p className="text-[#27363d] text-[50px] font-[poppins] w-[450px] font-bold leading-[66px]">
          <span className="m-[80px] font-bold">Explore</span> Our Pricing Plans
        </p>
        <p className="w-[600px] text-[#787878] text-[17.5px] mt-[10px]">
          Discover Tailored Solutions Designed to Meet Your Specific Needs and Budgets, Ensuring Value
          and Flexibility.
        </p>
        <div
          className={`flex w-[300px] h-fit items-center bg-[#f8f8f8] rounded-full mt-[20px] p-[4px] shadow-custom relative before:content-[""] before:absolute before:w-1/2 before:bg-[#27363d] before:h-[47px] before:top-[5px] before:rounded-full ${
            count === 0 ? 'before:translate-x-0' : 'before:translate-x-[94%]'
          } before:duration-[600ms]`}
        >
          <p
            className={`w-[50%] h-[100%] p-[10px] rounded-full flex items-center justify-center ${
              count === 0 ? 'text-[#edff71]' : 'text-[#27363d]'
            } text-[20px] relative z-10 duration-[600ms]`}
            onClick={() => {
              setCount(0);
              setPeriod(PriceData[0].Monthly);
            }}
          >
            Monthly
          </p>
          <p
            className={`w-[50%] h-[100%] p-[10px] flex items-center justify-center ${
              count === 0 ? 'text-[#27363d]' : 'text-[#edff71]'
            } text-[20px] duration-[600ms] relative z-10`}
            onClick={() => {
              setCount(1);
              setPeriod(PriceData[1].Quarterly);
            }}
          >
            Quarterly
          </p>
        </div>
        <div className="flex mt-[40px] ">
          {period.map((val, ind) => (
            <Div key={ind} data={val} ind={ind} />
          ))}
        </div>
        <div className="mt-14">
          <h1 className="text-[#27363d] text-[25px] font-semibold">All Plans Include</h1>
          <div className="flex gap-[100px] mt-[23px] text-[#787878]">
            <ul>
              <li className="w-[370px] text-left text-[17px] relative before:absolute before:content-[url('/src/assets/circle-check.png')] before:left-[-40px] before:top-[1.5px]">
                Expert bookkeeping, automated reports, and tax assistance.
              </li>
              <li className="w-[370px] text-left text-[17px] mt-3 relative before:absolute before:content-[url('/src/assets/circle-check.png')] before:left-[-40px] before:top-[1.5px]">
                We maintain high standards by conducting thorough research.
              </li>
            </ul>
            <ul>
              <li className="w-[370px] text-left text-[17px] relative before:absolute before:content-[url('/src/assets/circle-check.png')] before:left-[-40px] before:top-[1.5px]">
                Our pricing plans are designed to be flexible and cater.
              </li>
              <li className="w-[370px] text-left text-[17px] mt-3 relative before:absolute before:content-[url('/src/assets/circle-check.png')] before:left-[-40px] before:top-[1.5px]">
                Absolutely! We tailor our design solutions to meet your specific needs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
