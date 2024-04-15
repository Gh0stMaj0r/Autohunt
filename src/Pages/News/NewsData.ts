export interface NewsItem {
    id: number;
    title: string;
    intro: string;
    content: string;
    date: string;
    image: string; // URL of the news image
    source: string;
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

        source: 'Auto News Daily' 
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
        
        source: 'Automobile Today' 
    },
    // Add more news items as needed
];

export default NewsData;