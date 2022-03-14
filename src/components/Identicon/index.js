import { useEffect, useRef } from "react";
import Jazzicon from "@metamask/jazzicon";
import styled from "styled-components";
const StyledIdenticon = styled.div`
  width: ${(props) => props.size || "2.5rem"};
  height: ${(props) => props.size || "2.5rem"};
  border-radius: 100%;
  background-color: black;
`;

export default function Identicon({ address, size }) {
  const ref = useRef();

  useEffect(() => {
    if (address && ref.current) {
      ref.current.innerHTML = "";
      ref.current.appendChild(
        Jazzicon(2.5 * 16, parseInt(address.slice(2, 10), 16))
      );
    }
  }, [address]);

  return <StyledIdenticon ref={ref} size={size} />;
}
