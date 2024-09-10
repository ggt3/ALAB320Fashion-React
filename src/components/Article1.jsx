import photo from '../assets/blog-image-1.jpg';
function Article1() {
    return (
        <article>

        <time dateTime="2020-11-11">11/11/20</time>
        <h2 className="title">Vintage in Vogue</h2>
        <img src={photo} alt="three renaissance faces"/>
        <p>Selfies Sunt  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae felis diam. Sed feugiat dui sed nisi faucibus dignissim. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed a pretium nunc. Duis aliquet ornare ex, vel facilisis nisi porttitor nec. Integer vestibulum vel arcu at tempus. Fusce porttitor quam nec nibh sagittis elementum. Etiam vel porttitor augue. Fusce id ante a nisi euismod tristique. Maecenas sit amet ante vel eros rutrum maximus nec sit amet ligula. Ut sed arcu sed augue volutpat venenatis pellentesque quis orci. Nunc libero neque, tempor vel aliquam eget, interdum vitae urna. Curabitur quis urna sed turpis hendrerit laoreet. Etiam quis accumsan ante. Suspendisse imperdiet accumsan metus, non fermentum enim cursus at. Morbi et dolor convallis diam imperdiet ornare sed sed quam. Cras placerat est sit amet purus blandit, non rutrum leo commodo. Morbi vehicula sit amet velit id dictum.</p>
        <a href="#" className="continue">Continues...</a>
    </article>
    )
}

export default Article1;
