import { useState } from "react"

const ImageUpload = () =>{
    const [selectedimages,setSelectedImages] = useState([])


    const handleImageChange =(e) =>{
        const files = e.target.files;
        let selectImageArray = [];

        for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();
            const file = files[i];
            reader.onload = (e) =>{
                selectImageArray.push({
                    file,
                    preview:e.target.result
                });

                if(selectImageArray.length === files.length){
                    setSelectedImages(selectImageArray)
                }
            }
            reader.readAsDataURL(file);
        }
    }
}