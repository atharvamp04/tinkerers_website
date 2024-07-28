import React, { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

class CustomCarousel extends Component {
    onChange = (index) => {
        console.log(`Slide changed to: ${index}`);
    };

    onClickItem = (index) => {
        console.log(`Item clicked: ${index}`);
    };

    onClickThumb = (index) => {
        console.log(`Thumbnail clicked: ${index}`);
    };

    render() {
        return (
            <Carousel 
                showArrows={true} 
                onChange={this.onChange} 
                onClickItem={this.onClickItem} 
                onClickThumb={this.onClickThumb}
            >
                <div>
                    <img src="assets/1.jpeg" alt="Slide 1" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" alt="Slide 2" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" alt="Slide 3" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="assets/4.jpeg" alt="Slide 4" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="assets/5.jpeg" alt="Slide 5" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="assets/6.jpeg" alt="Slide 6" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        );
    }
}

export default CustomCarousel;
