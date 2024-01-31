import Card from "./card";
const Courseoff = () => {
    return (  
        <div>
            <h1> Courses Offered</h1>
            <div className="coursecarousal">
            <Card
                status="completed"
                imageUrl="path/to/image.jpg"
                name="John Doe"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                data="240 students registered"
            />
            </div>
        </div>
    );
}
 
export default Courseoff;