

import Image from './image';

const Images = ({ data }) => {
    console.log('data',data);
    return (
        data.map(image => {
            return <Image image={image}/>
        })
    )
}

export default Images;