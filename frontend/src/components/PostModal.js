import styled from 'styled-components';
import {useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
//import { axios } from 'axios';
const axios = require('axios').default;
axios.get('https://campusin.herokuapp.com/api/post')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
 
 

const PostModal = (props) => {
    const [editorText , setEditorText] = useState("");
    const [shareImage,setShareImage] = useState("");
    const [videoLink ,setVideoLink]=useState("");
    const [assetArea ,setAssetArea ]=useState("");


    // useEffect (() => {
    //     Axios.get('https://campusin.herokuapp.com/api/post ')
    //     .then(response => {
    //         console.log("Getting from",response.data);
    //         setEditorText(response.data)
    //     }).catch(error => console.log(error))
    // },[])
    const postData = (e) => {
        e.preventDefault();
        axios.post('https://campusin.herokuapp.com/api/post',{
        contents:setEditorText
        }).then (response => console.log("posting data" , response))
        .catch(error => console.log(error));
    }


    const handleChange = (e) => {
        const image = e.target.files[0];
        if(image === '' || image===undefined){
        alert("not an image, the file is a ${typeof image}");
        return;
        }
        setShareImage(image);
    };
    const switchAssetArea =(area)=>
    {
        setShareImage("");
        setVideoLink("");
        setAssetArea(area);
    }

    
    const reset = (e) => {
        setEditorText("");
        setShareImage("");
        setVideoLink("");
        setAssetArea("");
        
        props.handleClick(e);
    };
 return (
     <>{props.showModal === 'open' &&
 <Container>
     <Content>
         <Header>
              <h2>
                  Create a post</h2>
                  <button onClick={(event) => reset(event)}>
                      <img src="/images/close.png" alt="delete-icon"/>
                  </button>
         </Header>
         <SharedContent>
         <UserInfo>
         {props.user.photoURL ? <img src={props.user.photoURL}/>:<img width="20%" height="20%"src="/images/user.png" alt=""/>}
         <span>{props.user.displayName}</span>
         </UserInfo>
         <Editor>
        <textarea value={editorText} onChange={(e) => setEditorText(e.target.value)}
        placeholder="What do you want to talk about?"
        autoFocus={true}/>
{ assetArea==="image"?(
        <UploadImage>
            <input type="file" accept="image/gif , image/jpeg ,image/png"
            name="image"
            id="file"
            style={{display:"none"}}
            onChange={handleChange}/>
            <p>
                <label htmlFor='file'>Share image</label>
            </p>
            {shareImage && <img src={URL.createObjectURL(shareImage)}/>}
            </UploadImage>):
            assetArea==="media" && (
             
            <>
            <input type="text"
            placeholder='Share Video'
            value={videoLink}
            onChange={(e)=>setVideoLink(e.target.value)}
            />
            {videoLink&&(<ReactPlayer width={'100%'} url={videoLink}/>)}
           
              </>)
}


        </Editor>
         </SharedContent>
         <SharedCreation>
             <AttachAssets>
                 <AssetButton onClick={()=>switchAssetArea("image")}>
                     <img src="/images/photo.png"  width="50px" height="30px" alt="upload Image"/>
                 </AssetButton>
                 <AssetButton  onClick={()=>switchAssetArea("media")}>
                     <img src="/images/video.png"  width="50px" height="30px" alt="upload video"/>
                 </AssetButton>
             </AttachAssets>
             <ShareComment>
             <AssetButton>
                 <img src="/images/comment.png"  width="50px" height="30px" alt="comment"/>
                 Anyone
             </AssetButton>
             </ShareComment>
             <PostButton disabled={!editorText ? true:false } onClick={postData}>
            
                 Post
              </PostButton>
         </SharedCreation>
         </Content>
 </Container>}
 </>
 )
};
 
const Container = styled.div`
position:fixed;
margin:0;
bottom:0;
left:0;
top:0;
right:0;
z-index:9999;
color:black;
background-color: rgba(0,0,0,0.8);
animation: fadeIn 0.3s;
`;

const Content = styled.div`
width:100%;
max-width:552px;
background-color:white;
max-height:90%;
overflow:initial;
border-radius:5px;
position:relative;
display:flex;
flex-direction:column;
top:32px;
margin:0 auto;
`;

const Header=styled.div`

display:block;
padding:16px 20px;
border-bottom:1px solid rgba(0,0,0,0.15);
font-size:16px;
line-height:1.5;
color:rgba(0,0,0,0.6);
font-weight:400;

display:flex;
justify-content:space-between;
align-items:center;
button
{
    height:40px;
    width:40px;
    min-width:auto;
    color:rgba(0,0,0,0.15);
    png,img{
        margin-left: -7px;
        margin-top: -2px;
        widht:50px;
        height:40px;
        pointer-events:none;
    }
}
`;

const SharedContent =styled.div`
  display:flex;
  flex-direction:column;
  flex-grow:1;
  overflow-y:auto ;
  vertical-align :baseline;
  background:transparent;

  padding:8px 12px;

`;

const UserInfo=styled.div`
display:flex;
align_item:center;
padding:12px 24px;
png,img
{
    
    background-clip:content-box;
    
    border:2px solid transparent;

        width: 40px;
        height: 40px;
        border-radius: 50%;
    
}


span
{
    font-weight:600;
    font-size:16px;
    line-height:1.5;
    margin-left:5px;
}
`;
const SharedCreation= styled.div`
display:flex;
justify-content:space-between;
padding:12px 24px 12px 16px;





`;

const AssetButton = styled.button`
display:flex;
align-items:center;
height:40px;
min-width:auto;
color:rgba(0,0,0,0.5);
`;

const AttachAssets = styled.div`
align-items:center;
display:flex;
padding-right:8px;
${AssetButton}{
    width:40px;
}
`;

const ShareComment = styled.div`
padding-left:8px;
margin-right:auto;
border-left: 1px solid rgba(0,0,0,0.15);
$(AssetButton){
    png,img{
        margin-right:5px;
    }
}

`;


const PostButton = styled.div`
min-width:60px;
border-radius:20px;
padding-left:16px;
padding-right:16px;
padding-top:10px;
background:${(props) => (props.disabled ? "rgba(0,0,0,0.8)" : "#0a66c2")};

color:${(props) => (props.disabled ? "rgba(0,0,0,0.2)" : "white")};
&:hover{
    background:${(props) => (props.disabled ? "rgba(0,0,0,0.08)" : "#004182")};
}
`;

const Editor = styled.div`

padding:12px 24px;
textarea{
    width:100%;
    min-height:100px;
    resize:none;
}

input{
    width:100%;
    height:35px;
    font-size:16px;
    margin-bottom:20px;
}
`;
const UploadImage = styled.div`
text-align:center;
img{
    width:100%;
    
}
`;



// const mapStateToProps = (state) => {
//     return {
//       user: state.userState.user,
//     };
//    };
   const mapStateToProps = (state) => {
    return {
      user: state.userState.user,
    };
   };
   


export default connect(mapStateToProps)(PostModal);