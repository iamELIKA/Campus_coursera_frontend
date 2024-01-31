import Teamcard from "./teamcard";

const Team = () => {
    return ( 
        <div>
            <h1>Team</h1>
            <Teamcard
                imgUrl="path/to/image.jpg"
                name="john doe"
                post="co-ordinator"
                instagramUrl="https://www.instagram.com/johndoe/"
            />
        </div>
     );
}
 
export default Team;