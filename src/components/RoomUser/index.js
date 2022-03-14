import {
  RoomUserContainer,
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
        {props.children}
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
