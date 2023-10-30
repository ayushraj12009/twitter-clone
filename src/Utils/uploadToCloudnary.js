export const uploadToCloudnary=async(pics)=>{
   
    if(pics){
        const data = new FormData();
        data.append("file",pics)
        data.append("upload_preset", "twitterclone");
        data.append("cloud_name", "dug6aue2b")


        const res = await fetch("https://api.cloudinary.com/v1_1/dug6aue2b/image/upload",{
            method:"post",
            body:data
        })

        const fileData = await res.json();
        return fileData.url.toString();

    }
    else console.log("error from upload function")
}