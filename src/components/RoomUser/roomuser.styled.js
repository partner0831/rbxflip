import styled from "styled-components";

export const RoomUserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #1d1f32;
  border-radius: 100%;
  height: 4.5rem;
  width: 4.5rem;
`;

export const RoomUserContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export const RoomUserImage = styled.img`
  border: 3px solid rgb(49, 133, 255);
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background: #2c2d46;
  background-position: 50%;
  background-size: cover;
`;

export const RoomUserMark = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export const RoomUserMarkContainer = styled.div`
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  margin: 0px;
  width: 100%;
`;

export const RoomUserMarkBack = styled.div`
  box-sizing: border-box;
  display: block;
  max-width: 100%;
`;

export const RoomUserMarkBackImage = styled.img`
  max-width: 100%;
  display: block;
  margin: 0px;
  border: none;
  padding: 0px;
`;

export const RoomUserMarkImage = styled.img`
  position: absolute;
  inset: 0px;
  box-sizing: border-box;
  padding: 0px;
  border: none;
  margin: auto;
  display: block;
  width: 0px;
  height: 0px;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
`;
