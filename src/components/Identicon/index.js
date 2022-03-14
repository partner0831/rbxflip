import { useEffect, useRef } from "react";
import Jazzicon from "@metamask/jazzicon";
import styled from "styled-components";
const StyledIdenticon = styled.div`
  background-color: transparent;
`;

export default function Identicon({ address, size }) {
  const ref = useRef();

  useEffect(() => {
    if (address && ref.current) {
      ref.current.innerHTML = "";
      ref.current.appendChild(
        Jazzicon(size * 16, parseInt(address.slice(2, 10), 16))
      );
    }
  }, [address, size]);

  return <StyledIdenticon ref={ref} />;
}
