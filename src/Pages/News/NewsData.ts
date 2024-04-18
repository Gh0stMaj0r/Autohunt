export interface NewsItem {
    id: number;
    title: string;
    intro: string;
    content: string;
    date: string;
    image: string; // URL of the news image
    source: string;
    written: string;
}

const NewsData: NewsItem[] = [
    { 
        id: 1, 

        title: 'New Electric Car Model Unveiled', 

        intro: 'Lucid Motors has unveiled its latest electric car model, the Lucid Air. The sleek and stylish sedan boasts impressive performance and range, making it a strong competitor in the electric vehicle market.',

        content: `Lucid Motors has unveiled its latest electric car model, the Lucid Air.
                  The sleek and stylish sedan boasts impressive performance and range, making it a strong competitor in the electric vehicle market. 
                  With a range of over 500 miles on a single charge and lightning-fast acceleration, the Lucid Air is setting new standards for electric cars.
                  The interior is spacious and luxurious, featuring premium materials and cutting-edge technology. 
                  From its futuristic design to its environmentally friendly powertrain, the Lucid Air represents the future of transportation.

                  The Lucid Air is powered by advanced electric drivetrain technology, delivering smooth and quiet performance. 
                  Its powerful electric motors provide instant torque, allowing for quick acceleration and responsive handling. 
                  With multiple drive modes to choose from, including a sport mode for spirited driving and an eco mode for maximizing range, 
                  the Lucid Air offers a personalized driving experience for every driver.

                  In addition to its impressive performance, the Lucid Air prioritizes safety and convenience. 
                  It features an array of advanced driver assistance systems, including lane-keeping assist, adaptive cruise control, and automatic emergency braking. 
                  The spacious interior offers ample room for passengers and cargo, making it ideal for daily commuting and long road trips.

                  The Lucid Air is not just a car—it's a statement of innovation and progress. 
                  With its groundbreaking technology and forward-thinking design, 
                  it's redefining what's possible in the world of electric vehicles.`,

        date: '2024-04-15', 

        image: 'https://media.architecturaldigest.com/photos/5fb4008a3ec62d20cc008aa5/16:9/w_2560%2Cc_limit/lucid-air-exterior-09.jpg',

        source: 'Auto News Daily' ,

        written: 'Autohunt Ltd.'
    },
    { 
        id: 2, 

        title: 'Car Manufacturer Reports Record Sales', 

        intro: 'Toyota has announced record-breaking sales figures for the first quarter of 2024. Despite challenges posed by supply chain disruptions and chip shortages, Toyota managed to sell over 2 million vehicles worldwide.',

        content: `Toyota has announced record-breaking sales figures for the first quarter of 2024. 
                  Despite challenges posed by supply chain disruptions and chip shortages, Toyota managed to sell over 2 million vehicles worldwide.
                  The strong sales performance can be attributed to the popularity of Toyota's hybrid and electric models, 
                  as well as continued demand for its reliable and fuel-efficient vehicles. 
                  With a diverse lineup of cars, trucks, and SUVs, Toyota remains a leader in the automotive industry.

                  Toyota's success in the first quarter of 2024 reflects its commitment to innovation and quality. 
                  The company continues to invest in research and development, 
                  introducing new technologies and features to improve the safety, efficiency, and performance of its vehicles. 
                  From hybrid powertrains to advanced driver assistance systems, Toyota is driving the future of transportation.

                  In addition to its focus on innovation, Toyota is dedicated to sustainability and environmental stewardship. 
                  The company has set ambitious goals to reduce carbon emissions and minimize its environmental footprint, 
                  with initiatives ranging from eco-friendly manufacturing processes to the development of hydrogen fuel cell vehicles.

                  As Toyota looks ahead to the future, it remains committed to its core principles of quality, reliability, and innovation. 
                  With a focus on customer satisfaction and a dedication to excellence, 
                  Toyota is poised to continue its success and shape the future of the automotive industry for years to come.

                  The record-breaking sales figures are a testament to Toyota's strong brand reputation and the continued trust of its customers. 
                  As the automotive industry continues to evolve, Toyota will continue to lead the way with its innovative products and forward-thinking vision.`,

        date: '2024-04-14', 

        image: 'https://media.arcadis.com/-/media/project/arcadiscom/com/blogs/global/david-aimable-lina/2022/how-to-deliver-automotive-manufacturing-for-the-future/how-to-deliver-automotive-manufacturing-for-the-future-header.png?rev=0e6cb54236ed45cc84225c6de678fe68',
        
        source: 'Automobile Today' ,

        written: 'Autohunt Ltd.'
    },

    { 
        id: 3, 

        title: 'Electric Truck Startup Introduces Revolutionary Battery Technology for Heavy-Duty Vehicles', 

        intro: 'Revolt Motors, a startup specializing in electric trucks, has unveiled a groundbreaking battery technology designed specifically for heavy-duty vehicles.',

        content: `Revolt Motors, a startup specializing in electric trucks, has unveiled a 
                  groundbreaking battery technology designed specifically for heavy-duty vehicles. 
                  The new battery technology, named PowerHaul, offers unparalleled energy density and durability, 
                  making it ideal for powering electric trucks and commercial vehicles.
                  
                  With PowerHaul batteries, electric trucks can achieve extended range and 
                  increased payload capacity, addressing key challenges faced by fleet operators in the 
                  transition to electric mobility. The innovative battery technology also features fast charging 
                  capabilities, minimizing downtime and maximizing productivity for businesses.

                  The introduction of PowerHaul batteries underscores Revolt Motors' 
                  commitment to innovation and sustainability in the development of electric vehicles for 
                  commercial applications.`,

        date: '2024-04-17', 

        image: 'https://www.thomasnet.com/insights/_next/image/?url=https%3A%2F%2Fthomasmkt.wpengine.com%2Fwp-content%2Fuploads%2F2023%2F09%2Fe-truck.jpg&w=3840&q=75',
        
        source: 'Electric Vehicle Weekly' ,

        written: 'Autohunt Ltd.'
    },

    { 
        id: 4, 

        title: 'Luxury Car Brand Launches Subscription Service for High-End Electric Vehicles', 

        intro: 'Prestige Motors, a renowned luxury car brand, has announced the launch of a subscription service for its high-end electric vehicle lineup, catering to discerning customers seeking flexibility and convenience.',

        content: `Prestige Motors, a renowned luxury car brand, has announced the launch of a 
                  subscription service for its high-end electric vehicle lineup, catering to discerning 
                  customers seeking flexibility and convenience. The subscription service, named LuxeDrive, 
                  offers subscribers access to a fleet of premium electric vehicles on a monthly basis, with no 
                  long-term commitments or ownership responsibilities.
                  
                  Subscribers can choose from a range of luxury electric models, including 
                  sedans, SUVs, and sports cars, and enjoy exclusive perks such as concierge delivery and 
                  vehicle maintenance services. LuxeDrive aims to provide a hassle-free and luxurious driving 
                  experience for subscribers, allowing them to enjoy the latest electric vehicles without the 
                  upfront costs and complexities of ownership.

                  Jonathan Smith, CEO of Prestige Motors, described LuxeDrive as a game-
                  changer in the luxury car market, stating, 'LuxeDrive redefines the traditional car ownership 
                  experience, offering unparalleled onvenience and flexibility for our discerning customers.

                  The subscription service reflects Prestige Motors' commitment to innovation 
                  and customer-centricity in meeting the evolving needs of luxury car enthusiasts.
                  `,

        date: '2024-04-17', 

        image: 'https://www.europeanceo.com/wp-content/uploads/2019/08/Lotus-Evija.jpg',
        
        source: 'Luxury Auto News' ,

        written: 'Autohunt Ltd.'
    },

    {
        id: 7,

        title: "Velocity Motors Unveils Limited Edition Electric Supercar",

        intro: "Velocity Motors, a renowned sports car manufacturer, has unveiled a limited edition electric supercar, setting new benchmarks for performance and luxury in the electric vehicle segment.",

        content: `The limited edition electric supercar, named Velocity EVX, stands as a testament to the relentless 
                  pursuit of automotive excellence by Velocity Motors. This groundbreaking vehicle merges cutting-
                  edge electric drivetrain technology with the finest craftsmanship, resulting in an unparalleled 
                  driving experience that transcends conventional expectations.
                  
                  At the heart of the Velocity EVX lies a revolutionary electric drivetrain system, meticulously 
                  engineered to deliver unmatched performance. With lightning-fast acceleration and razor-sharp 
                  precision handling, the Velocity EVX effortlessly pushes the boundaries of what's possible in 
                  electric vehicle performance, redefining the driving experience for enthusiasts worldwide.
                  
                  Beyond its exceptional performance capabilities, each unit of the Velocity EVX is a masterpiece of 
                  design and craftsmanship. From its sleek exterior contours to its meticulously crafted interior, 
                  every detail reflects Velocity Motors' unwavering commitment to excellence. The bespoke styling 
                  of the limited edition model ensures that each vehicle is a unique expression of luxury and 
                  sophistication, tailored to meet the discerning tastes of its fortunate owners.
                  
                  The unveiling of the Velocity EVX heralds a new era of innovation and achievement for Velocity
                  Motors, reaffirming its position as a leader in the high-performance electric vehicle market. This 
                  groundbreaking supercar not only showcases the pinnacle of automotive engineering but also 
                  sets a new standard for luxury and exclusivity in the realm of electric vehicles.
                
                  As Velocity Motors continues to push the boundaries of automotive technology and design, the 
                  Velocity EVX serves as a symbol of the brand's dedication to innovation and excellence. With its 
                  combination of cutting-edge technology, exquisite craftsmanship, and unparalleled performance, 
                  the Velocity EVX stands poised to leave an indelible mark on the automotive landscape for 
                  generations to come.`,

        date: '2025-01-10',

        image: 'https://media.cnn.com/api/v1/images/stellar/prod/170531131011-electric-cars-2017-elextra.jpg?q=w_3840,h_2160,x_0,y_0,c_fill/h_778',

        source: 'Sports Car Gazette',

        written: 'Autohunt Ltd.'
    },
    // Add more news items as needed
];

export default NewsData;