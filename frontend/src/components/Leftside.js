import styled from "styled-components";
import { connect } from "react-redux";
// const axios = require('axios').default;
// const fetchName =() =>
// {
//   axios.get('https://campusin.herokuapp.com/api/user?email=emailID')
//                .then(function (response) {
//                  // handle success
//                 console.log(response)
//                 })
//                 .catch(function (error) {
//                   // handle error
//                     console.log(error)
//                  })
// }
const Leftside = (props) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>Welcome , {props.user ? props.user.displayName : "there" }!</Link>
          </a>
          <a>
        
            <input type="file" accept="image/gif , image/jpeg ,image/png"
            name="image"
            id="file"
            style={{display:"none"}}/>
            
            <AddPhotoText>
                <label htmlFor='file'>Add a photo</label>
            </AddPhotoText>
           
    
         
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              
              <span>Name</span>
              <span>Branch</span>
              <span>Year</span>
              <span>Course</span>
            </div>
            <img src="/images/widget-icon.svg" alt="" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="" />
            My Items
          </span>
        </Item>
      </ArtCard>

      <CommunityCard>
        <a>
          <span></span>
        </a>
        <a>
          <span>
            Feed
            <img src="/images/plus-icon.svg" alt="" />
          </span>
        </a>
        <a>
          <span>Buy&Sell</span>
        </a>
        <a>
          <span>Resources</span>
        </a>
        <a>
          <span>Support</span>
        </a>
      </CommunityCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: leftside;
  position:fixed;
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

const CardBackground = styled.div`
  background: url("/images/background.png");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

const Photo = styled.div`
  box-shadow: none;
  background-image: url("/images/profile.png");
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 50%;
`;

const Link = styled.div`
  font-size: 20px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #add8e6;
  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;
    &:hover {
      background-color: #add8e6;
    }
    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 20px;
        line-height: 1.333;
        font-weight: 50;
        &:first-child {
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }
  svg {
    color: rgba(0, 0, 0, 1);
  }
`;

const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 20px;
  display: block;
  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);
    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const CommunityCard = styled(ArtCard)`
  padding: 8px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  background-color:#add8e6;
  a {
    color: black;
    padding: 4px 12px 4px 12px;
    font-size: 20px;
    &:hover {
      color: #0a66c2;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;
      border-top: 1px solid #d6cec2;
      padding: 12px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

const mapStateToProps = (state) =>
{
  return{
    user: state.userState.user,
  };
};


export default connect(mapStateToProps)(Leftside);
