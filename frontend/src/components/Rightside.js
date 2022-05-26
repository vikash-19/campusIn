import styled from "styled-components";

const Rightside = (props) => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>

        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
            
          <Search>
            <div>
            <input type="text" placeholder="Find People" />
           </div>
          <SearchIcon>
            <img src="https://raw.githubusercontent.com/CleverProgrammers/cp-linkedin-clone/f014d361d787029f15ea0f0f78c053d8c214f138/public/images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <a>What's new</a>
            </div>
          </li>
        </FeedList>

        <Recommendation>
         
          <div>Filter</div>
        </Recommendation>
      </FollowCard>
      <BannerCard>
        <img
          src="/images/bond.png"
          alt=""
        />
      </BannerCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: rightside;
  width:28%;
  position:fixed;
  right:0;
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    & > div {
      display: flex;
      flex-direction: column;
    }
    // button {
    //   background-color: transparent;
    //   color: rgba(0, 0, 0, 0.6);
    //   box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
    //   padding: 16px;
    //   align-items: center;
    //   border-radius: 15px;
    //   box-sizing: border-box;
    //   font-weight: 600;
    //   display: inline-flex;
    //   justify-content: center;
    //   max-height: 32px;
    //   max-width: 480px;
    //   text-align: center;
    //   outline: none;
    // }
  }
`;




const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Avatar = styled.div`
  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

const Recommendation = styled.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const BannerCard = styled(FollowCard)`
  img {
    width: 100%;
    height: 100%;
  }
`;

export default Rightside;