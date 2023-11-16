import { useEffect, useRef } from "react"

export default function UploadWidget() {
    const cloudinaryRef = useRef()
    const widgetRef = useRef()

    useEffect (() => {
        cloudinaryRef.current = window.cloudinary
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName:"healthtech",
            uploadPreset: "otiod5ve",
            folder: 'healthtech/products',
            maxFiles: 1,
        },function(err,res){         
        if (!err && res && res.event === "success") {
          console.log("Done! Here is the image info: ", res.info.url)
        } 
        console.log(res);
    })
    },[])
    return (
            <button type="button" onClick={()=> widgetRef.current.open() }>
                Profile Image
            </button>
            )
};