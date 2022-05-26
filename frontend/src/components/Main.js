import React from 'react';
import { useState } from "react";
import styled from "styled-components";
import PostModal from "./PostModal";
import axios from "axios";
import Card from "./Card";


// "_id": "627ebb6a9b92d90c5ba77d04",
// "userId": "71",
// "contents": "This is my testing post.",
// "upvotes": [],
// "downvotes": [],
// "comments": [],
// "createdAt": "2022-05-13T20:11:22.410Z",
// "updatedAt": "2022-05-13T20:11:22.410Z",
// "__v": 0
function createCard(currentCard)
{
     return(
      <Card 

    key={currentCard._id}
    name={currentCard.userId}
    content={currentCard.contents}
    upvote={currentCard.upvotes}
    downvote={currentCard.downvotes}
    createdat={currentCard.createdAt}
    updatedAt={currentCard.updatedAt}  
      
      
      
      
      />

    
     );
}

const Main = (props) => {
    const [showModal , setShowModal] = useState("close");
    const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get('https://campusin.herokuapp.com/api/post')
  .then(function (response) {
    // handle success
    console.log("hi");
    setPost(response.data);
    console.log("bye");
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  }, []);

  if (!post) return null;

    const handleClick = (e) => {
        e.preventDefault();
        if(e.target!==e.currentTarget){
            return;
        }

        switch(showModal){

            case "open":
                setShowModal("close");
                break;
            case "close":
                setShowModal("open");
                break;
            default:
                setShowModal("close");
                break;
        }
    };
  return (<Container>
      <ShareBox>Share
      <div>
          <img src="images/user.png" width="50px" height="40px"/>
          <button onClick={handleClick}>Start a Post</button>
       </div>

      <div>
          <button>
              <img src="/images/photo.png" width="50px" height="40px" alt=""/>
              <span>Photos</span>
          </button>

          <button>
              <img src="/images/video.png" width="50px" height="40px"  alt=""/>
              <span>Videos</span>
          </button>

          <button>
              <img src="/images/event.png" width="50px" height="40px"  alt=""/>
              <span>Event</span>
          </button>


          <button>
              <img src="/images/article.png" width="50px" height="40px"  alt=""/>
              <span>Write Article</span>
          </button>

      </div>
      </ShareBox>

      <div>
          
         { post.map(createCard)}
      </div>

    <PostModal showModal={showModal} handleClick={handleClick}/>

  </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`

 text-align-center;
 overflow:hidden;
 margin-bottom: 8px;
 background-color:#fff;
 border-radius:5px;
 position:relative;
 border:none;
 box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0/20%);   

`;

const ShareBox = styled(CommonCard)`

display:flex;
flex-direction:column;
color:#958b7b;
margin: 10px 0px 8px;
background:white;

div{
    button{
        outline: none;
        color: rgba(0,0,0,0.6);
        font-size:20px;
        line-height: 1.5px;
        min-height:48px;
        background:transparent;
        border:none;
        display:flex;
        align-items:center;
        font-weight:600;

    }
    &:first-child{
        display:flex;
        align-items:center;
        padding:8px 16px 0px 16px;
        img{
            width:48px;
            border-radius:50%;
            margin-right:8px;
            height:30px;
        }
        button{
            margin:4px 4px;
            flex-grow:1;
           
            padding-left:16px;
           border: 1px solid rgba(0,0,0,0.15);
           border-radius:35px;
           background-color:white;
           text-align:left;

        }
    }
    &:nth-child(2){
       display:flex;
       flex-wrap:wrap;
       justify-content:space-around;
       padding-bottom:4px;

       button{
           img{
               margin: 0 4px 0 -2px;
           }
           span{
               color:#70b5f9;
           }
       }
    }
}

`;

const Article = styled(CommonCard)`
padding 0px;
margin: 0 0 8px;
overflow:visible;
`;

const SharedActor  = styled.div`

padding-right:40px;
flex-wrap:nowrap;
padding:12px 16px 0;
margin-bottom: 8px;
align-items:center;
display:flex;
a{
    margin-right:12px;
    flex-grow:1;
    overflow:hidden;
    display:flex;
    text-decoration:none;
    img{
        width:48px;
        height:48px;
    }
    &>div{
        display:flex;
        flex-direction:column;
        flex-grow:1;
        margin-left:8px;
        overflow:hidden;
        span{
            text-align:left;
            &:first-child{
                font-size:14px;
                font-weight:700;
                color=rgb(0,0,0,1);
            }
            &:nth child(n+1){
                  font-size:12px;
                  color:rgba(0,0,0,1);
            }
        }
    }
}

button{
    position:absolute;
    right:12px;
    top:0;
    background:transparent;
    border:none;
    outline:none;
}

`;


const Description = styled.div`

padding:0 16px;
overflow:hidden;
color:rgba(0,0,0,0.9);
font-size:14px;
text-align:left;

`;

const SharedImg = styled.div`

margin-top:8px;
width:100%;
display:block;
position:relative;
background-color:#f9fafb;

img{
    object-fit:conatin;
    width:100%;
    height:100%;
}

`;

const SocialCount =styled.ul`

line-height: 1.3;
display:flex;
align-items:auto;
overflow:auto;
margin:0 16px;
padding: 8px 0;
border-bottom: 1px solid #e9e5df;
list-style:none;
li{
    margin-right:5px;
    font-size:12px;
    button{
        display:flex;
    }
}

`;


const SocialActions = styled.div`

align-items:center;
display:flex;
justify-content:flex-start;
margin:10px;
min-height:40px;
padding:4px 8px;
button{
   display:inline-flex;
   align-items:center;
   padding:8px;
   color:#0a66c2;
   @media(min-width:768px){
       span{
           margin-left:15px;
       }
   } 
}

`;

export default Main;