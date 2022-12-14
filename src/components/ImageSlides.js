import '../styles/slide-img.css'
import {Splide} from "@splidejs/react-splide";
import SlideImage from "./SlideImage";
import {marker_outline} from "../constants/constants";

function ImageSlides({data}) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'left',
            justifyContent: 'left',
        }}>
            <Splide
                options={{rewind: true}}
                aria-label="Images"
                style={{
                    width: '60%',
                    height: '50%',
                    maxHeight: '700px',
                    outline: `5px solid ${marker_outline}`,
                    border: `5px solid white`,
                }}
            >
                {data['imgs'].map((img, index) => (
                    <SlideImage url={img} key={index}/>
                ))}
            </Splide>
        </div>
    );
}

export default ImageSlides;