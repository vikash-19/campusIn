import React from 'react';
import styled from 'styled-components';


// key={currentCard._id}
// name={currentCard.userId}
// content={currentCard.contents}
// upvote={currentCard.upvotes}
// downvote={currentCard.downvotes}
// createdat={currentCard.createdAt}
// updatedAt={currentCard.updatedAt}  
  
// 
function Card(props)
{
    return (
            <Article>
    <SharedActor>
        <a>
            <button>
            <img src="/images/ellipsis.png" alt=""></img>
            </button>
        </a>

    </SharedActor>

       <a>
          <img   width="50px" height="30px" src="/images/user.png" alt=""/>
      </a>
    <UserId>{props.name}</UserId>
    <CreatedAt>{props.createdat}</CreatedAt>
    <UpdatedAt>{props.updatedAt}</UpdatedAt>
  <Description>{props.content}</Description>

  <SharedImg>
      <a>
          <img src="/images/scenery.png" alt=""/>
      </a>
      
  </SharedImg>
  <SocialCount>
      <li>
          <button>
          <img src="/images/like.png"  width="50px" height="30px" alt=""/>
          <span>{props.upvote}</span>
          <img src="/images/clapping.png"  width="50px" height="30px" alt=""/>
          <span>{props.downvote}</span>
          </button>
      </li>
      <li>
          <a>2 comments</a>
      </li>
  </SocialCount>
  <SocialActions>
  <button>
      <img src="/images/like.png" width="50px" height="30px" alt=""/>
      <span>Like</span>
  </button>
  <button>
      <img src="/images/comment.png" width="50px" height="30px"  alt=""/>
      <span>Comment</span>
  </button>
  {/* <button>
      <img src="/images/share.png" width="50px" height="30px"  alt=""/>
      <span>Share</span>
  </button>
  <button>
      <img src="/images/send.png" width="50px" height="30px"  alt=""/>
      <span>Send</span>
  </button> */}
  {/* <h1>{(post[0].contents)}</h1> */}
  </SocialActions>
  </Article>
 );
}

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
 
const UserId = styled.div`

padding:0 16px;
overflow:hidden;
color:rgba(0,0,0,0.9);
font-size:20px;
text-align:left;
`;

const Description = styled.div`

padding:0 16px;
overflow:hidden;
color:rgba(0,0,0,0.9);
font-size:25px;
text-align:left;

`;
const CreatedAt = styled.div`
padding:0 16px;
overflow:hidden;
color:rgba(0,0,0,0.9);
font-size:10px;
text-align:left;
`;

const UpdatedAt = styled.div`
padding:0 16px;
overflow:hidden;
color:rgba(0,0,0,0.9);
font-size:10px;
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

export default Card;
