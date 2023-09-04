import me from '../assets/me.jpg';
function HomePage() {
    return (
        <div>
            <img src={me}></img>
            <h1 className="about">
                Hi, my name is Aaron DeLara. I was born and raised in Indio California. I am the youngest out of seven sisters and one brother. The thing that kicked my interest in coding was back in sophomore year of high school when I had a substitute teacher in my IT academy talk to us about coding. We played a video game that taught you how to code python while you play and it was really fun. We never did any coding after that day so once I found out about the UCR Extension coding bootcamp after I graduated, I decided to enroll and learn full stack web development.
            </h1>
        </div>
    )
}

export default HomePage