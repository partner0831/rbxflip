import {
  RoomUserContainer,
  RoomUserImage,
  RoomUserMark,
  RoomUserMarkBack,
  RoomUserMarkBackImage,
  RoomUserMarkContainer,
  RoomUserMarkImage,
  RoomUserWrapper,
} from "./roomuser.styled";

import back from "../../assets/img/back.svg";

const RoomUser = (props) => {
  return (
    <RoomUserWrapper>
      <RoomUserContainer>
        <RoomUserImage src={props.avatar} />
        <RoomUserMark>
          <RoomUserMarkContainer>
            <RoomUserMarkBack>
              <RoomUserMarkBackImage src={back} />
            </RoomUserMarkBack>
            <RoomUserMarkImage src={props.mark} />
          </RoomUserMarkContainer>
        </RoomUserMark>
      </RoomUserContainer>
    </RoomUserWrapper>
  );
};

export default RoomUser;
