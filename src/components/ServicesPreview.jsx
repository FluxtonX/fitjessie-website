import ServiceCard from './ServiceCard';
import channel from "/fitjessieschannel.png";

const ServicesPreview = () => {
  const services = [
    {
      title: 'Fitjessie Channel',
      description: 'Subscribe For Free At Home Fitness Workout',
      image: channel,
      color: 'bg-purple-50',
      link: 'https://www.youtube.com/@Fitjessieshapes'
    },
    {
      title: 'Fitjessie Amazon Affiliate',
      description: 'Affordable Deals for Gears And Apparels',
      image: '/fitjessieamazon.png',
      color: 'bg-pink-50',
      link: 'https://www.amazon.com/shop/fitjessie?ref=ac_inf_tb_vh&ccs_id=57d4799b-d2db-4b12-adfb-b75cb2fc524b'
    },
    {
      title: 'Fitjessie Design Products',
      description: 'Shop Fitjessie apparel and accessories—designed for busy, health-conscious people like you',
      image: '/firjessiedesign.png',
      color: 'bg-blue-50',
      link: 'https://fitjessie.myspreadshop.com/'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-4 font-display">
          Your Schedule, Your Workouts
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPreview;
