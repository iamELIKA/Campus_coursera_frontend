import Card from "./card";
const Projects = () => {
    return (  
        <div>
            <h1> Project </h1>
            <div className="projectcarousal">
            <Card
                status="completed"
                imageUrl="path/to/image.jpg"
                name="John Doe"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                data="6 people registered"
            />
            
            </div>
        </div>
    );
}
 
export default Projects;