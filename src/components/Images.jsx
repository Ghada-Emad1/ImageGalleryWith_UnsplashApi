export const Images=(props)=>{
    const {urls,username,des,likes}=props;
    
    // const res=props.props;
    // const images=res.map((img)=>{
    //     console.log(img.user.username)
    // })
    // const{urls}=props;
    
    // const res=props.props;
    // res.map((url)=>{
    //     console.log(url.user.username)
    // })
    // //console.log(props.props)
    
    
    // //.log(props)
    return(
        <div className="flex gap-4">
            <img src={urls} alt=""/>
            <p>{username}</p>
            <p>{des}</p>
            <p>{likes}</p>
            
        </div>
    )
}